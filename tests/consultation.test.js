const test = require('node:test');
const assert = require('node:assert/strict');
const { services, initialValues, validateStep, projectSummary, leadPayload } = require('../src/data/consultation');

test('requires service selection but allows unknown measurements and planning preferences', () => {
  const v = initialValues();
  assert.ok(validateStep(0, v).services);
  v.services = ['flooring'];
  assert.deepEqual(validateStep(0, v), {});
  assert.deepEqual(validateStep(1, v), {});
  assert.deepEqual(validateStep(2, v), {});
});
test('every service branches to its own fields and measurements keep their units', () => {
  for (const service of services) {
    const v = initialValues();
    v.services = [service.id];
    v.details[service.id] = Object.fromEntries(service.fields.map(f => [f.id, f.type === 'number' ? '12' : f.options[0]]));
    assert.deepEqual(validateStep(1, v), {});
    const summary = projectSummary(v);
    assert.ok(summary.includes(service.label));
    for (const field of service.fields) assert.ok(summary.includes(field.unit ? `12 ${field.unit}` : field.options[0]));
  }
});
test('rejects negative, nonnumeric and fractional count measurements', () => {
  const v = initialValues(); v.services = ['fencing'];
  for (const value of ['-10', '0', 'Infinity', 'abc']) {
    v.details = { fencing: { length: value } };
    assert.ok(validateStep(1, v)['fencing-length']);
  }
  v.details = { fencing: { gates: '1.5' } };
  assert.ok(validateStep(1, v)['fencing-gates']);
});
test('requires only the preferred contact method, validates optional entries too', () => {
  const v = { ...initialValues(), name: 'Test Client', zip: '73034', email: 'test@example.com' };
  assert.deepEqual(validateStep(3, v), {});
  v.contact = 'Phone call'; v.email = '';
  assert.ok(validateStep(3, v).phone);
  v.phone = '(405) 555-0123';
  assert.deepEqual(validateStep(3, v), {});
  v.email = 'invalid'; assert.ok(validateStep(3, v).email);
  v.zip = '7303'; assert.ok(validateStep(3, v).zip);
  v.name = ' '; assert.ok(validateStep(3, v).name);
});
test('deselected services never leak stale details into owner submission', () => {
  const v = { ...initialValues(), services: ['flooring'], details: { flooring: { area: '500', material: 'Tile' }, fencing: { length: '100' } }, budget: '$5,000–$15,000', notes: '<script>example</script>' };
  const payload = leadPayload(v);
  assert.ok(payload.message.includes('500 sq ft'));
  assert.ok(payload.message.includes('Total project budget: $5,000–$15,000'));
  assert.ok(!payload.message.includes('100 linear ft'));
  assert.ok(!payload.subject.includes('Fencing'));
  assert.equal(payload._gotcha, '');
});
test('contact preference cannot be blank and hidden target dates are excluded', () => {
  const v = { ...initialValues(), name: 'Client', zip: '73034', contact: '', deadline: '2027-01-01', timeline: 'Just budgeting / exploring' };
  assert.ok(validateStep(3, v).contact);
  assert.ok(!projectSummary(v).includes('2027-01-01'));
});
const { submitLead } = require('../src/lib/consultation-submit');
test('submits a readable summary and contact details to the configured endpoint', async () => {
  const values = { ...initialValues(), services: ['fencing'], details: { fencing: { length: '80' } }, name: 'Test Client', email: 'test@example.com', zip: '73034' };
  let calls = 0;
  await submitLead(values, 'https://example.invalid/form', async (url, options) => {
    calls++;
    assert.equal(url, 'https://example.invalid/form');
    assert.equal(options.method, 'POST');
    assert.equal(options.body.get('email'), 'test@example.com');
    assert.ok(options.body.get('message').includes('80 linear ft'));
    assert.ok(options.body.get('message').includes('Project ZIP: 73034'));
    return { ok: true };
  });
  assert.equal(calls, 1);
});
test('server rejection and network failures do not report success', async () => {
  await assert.rejects(submitLead(initialValues(), '/mock', async () => ({ ok: false })), /Submission failed/);
  await assert.rejects(submitLead(initialValues(), '/mock', async () => { throw new Error('Offline'); }), /Offline/);
});
