import { useEffect, useId, useRef, useState } from 'react';
import appData from '@data/app.json';
import { submitLead } from '@library/consultation-submit';
import { services, finishes, priorities, timelines, budgets, initialValues, validateStep, projectSummary } from '@data/consultation';

const steps = ['Services', 'Project details', 'Priorities', 'Contact & review'];
// No contact details or free-text answers are included in these measurement hooks.
function track(event, step) {
  window.dispatchEvent(new CustomEvent('consultation:analytics', { detail: { event, step: step + 1 } }));
}
export default function ConsultationForm({ onBusyChange } = {}) {
  const instanceId = useId();
  const idPrefix = `consultation-${instanceId.replace(/:/g, '')}`;
  const [values, setValues] = useState(initialValues);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const heading = useRef(null);
  const started = useRef(false);
  const sending = useRef(false);
  const moved = useRef(false);
  useEffect(() => { if (moved.current) heading.current?.focus(); }, [step, status]);
  function update(key, value) {
    if (!started.current) { started.current = true; track('start', step); }
    setValues(previous => ({ ...previous, [key]: value }));
    setErrors(previous => ({ ...previous, [key]: undefined }));
  }
  function go(next) {
    moved.current = true;
    setErrors({});
    setStep(next);
    track('step_view', next);
  }
  function validate(current) {
    const nextErrors = validateStep(current, values);
    setErrors(nextErrors);
    const first = Object.keys(nextErrors)[0];
    if (first) {
      track('validation_error', current);
      requestAnimationFrame(() => document.getElementById(`${idPrefix}-${first}`)?.focus());
      return false;
    }
    return true;
  }
  async function submit(event) {
    event.preventDefault();
    if (sending.current) return;
    if (!validate(step)) return;
    if (step < 3) { go(step + 1); return; }
    for (let index = 0; index < 3; index++) {
      if (Object.keys(validateStep(index, values)).length) { go(index); return; }
    }
    sending.current = true;
    onBusyChange?.(true);
    setStatus('sending');
    track('submit_attempt', step);
    try {
      await submitLead(values, appData.settings.formspreeURL);
      moved.current = true;
      setStatus('success');
      track('submit_success', step);
    } catch {
      setStatus('error');
      track('submit_error', step);
    } finally {
      sending.current = false;
      onBusyChange?.(false);
    }
  }
  function field({ id, label, type = 'text', options, required = false, value, onChange, hint, ...props }) {
    const error = errors[id];
    const inputProps = { id: `${idPrefix}-${id}`, name: id, value: value ?? values[id], onChange: onChange || (event => update(id, event.target.value)), required, 'aria-invalid': error ? true : undefined, 'aria-describedby': `${hint ? `${idPrefix}-${id}-hint ` : ''}${error ? `${idPrefix}-${id}-error` : ''}`.trim() || undefined, ...props };
    return <div className="consultation-field" key={id}>
      <label htmlFor={inputProps.id}>{label} <small>({required ? 'required' : 'optional'})</small></label>
      {options ? <select {...inputProps}><option value="">Choose an option</option>{options.map(option => <option key={option}>{option}</option>)}</select> : type === 'textarea' ? <textarea {...inputProps} rows={4} /> : <input {...inputProps} type={type} />}
      {hint && <p className="consultation-help" id={`${idPrefix}-${id}-hint`}>{hint}</p>}
      {error && <p className="consultation-error" id={`${idPrefix}-${id}-error`}>{error}</p>}
    </div>;
  }
  if (status === 'success') return <section className="consultation consultation-success" aria-labelledby={`${idPrefix}-success`}>
    <p className="consultation-eyebrow">Request received</p>
    <h2 id={`${idPrefix}-success`} tabIndex={-1} ref={heading}>Let’s talk about your project.</h2>
    <p>Thank you, {values.name.trim()}. Chief Stone Construction will follow up by {values.contact === 'Email' ? 'email' : 'phone'} to discuss your project and arrange the next step.</p>
    <p>Your consultation is requested, but an appointment has not been booked. We’ll confirm availability and timing with you directly.</p>
    <a className="consultation-secondary" href="/projects">Explore our projects</a>
  </section>;
  return <section className="consultation" aria-label="Free consultation request">
    <div className="consultation-top"><span className="consultation-eyebrow">Free consultation · No obligation</span><span>Step {step + 1} of 4</span></div>
    <ol className="consultation-progress" aria-label="Your progress">{steps.map((label, index) => <li key={label} aria-current={index === step ? 'step' : undefined} className={index <= step ? 'is-active' : ''}><span>{index + 1}</span>{label}</li>)}</ol>
    <form onSubmit={submit} noValidate>
      <fieldset disabled={status === 'sending'} className="consultation-fields">
        <h3 ref={heading} tabIndex={-1}>{['What can we help you with?', 'Tell us a little about the work.', 'What matters most to you?', 'Where should we follow up?'][step]}</h3>
        {step === 0 && <>
          <p>Choose all that apply. We’ll ask only about the services you select.</p>
          <fieldset className="consultation-services"><legend className="consultation-sr-only">Services (required)</legend>
            {services.map((service, index) => <label key={service.id} className={`consultation-service ${values.services.includes(service.id) ? 'is-selected' : ''}`}>
              <input id={index === 0 ? `${idPrefix}-services` : `${idPrefix}-service-${service.id}`} type="checkbox" checked={values.services.includes(service.id)} aria-describedby={errors.services ? `${idPrefix}-services-error` : undefined} onChange={event => update('services', event.target.checked ? [...values.services, service.id] : values.services.filter(id => id !== service.id))} />
              <i className={`fa-solid ${service.icon}`} aria-hidden="true" /><span>{service.label}</span>
            </label>)}
          </fieldset>
          {errors.services && <p className="consultation-error" id={`${idPrefix}-services-error`} role="alert">{errors.services}</p>}
        </>}
        {step === 1 && <>
          <p>Estimates are fine. Leave measurements blank if you don’t know them—we can help during your consultation.</p>
          {services.filter(service => values.services.includes(service.id)).map(service => <fieldset className="consultation-service-details" key={service.id}><legend>{service.label}</legend>
            {service.fields.map(item => field({ ...item, id: `${service.id}-${item.id}`, label: `${item.label}${item.unit ? ` (${item.unit})` : ''}`, value: values.details[service.id]?.[item.id] || '', ...(item.type === 'number' ? { min: '0.01', step: ['items', 'gates'].includes(item.unit) ? '1' : 'any', inputMode: 'decimal' } : {}), onChange: event => {
              update('details', { ...values.details, [service.id]: { ...values.details[service.id], [item.id]: event.target.value } });
              setErrors(previous => ({ ...previous, [`${service.id}-${item.id}`]: undefined }));
            } }))}
          </fieldset>)}
          {field({ id: 'notes', label: 'Your goals, must-haves or other details', type: 'textarea', maxLength: 4000, hint: 'Tell us what is not working today and what you want to improve. You can share photos when we follow up.' })}
        </>}
        {step === 2 && <>
          <p>Whether you’re ready to build or just planning, we’ll help you understand your options.</p>
          {field({ id: 'finish', label: 'Preferred finish level', options: finishes })}
          {field({ id: 'priority', label: 'Your most important priority', options: priorities })}
          {field({ id: 'budget', label: 'Total budget for this project', options: budgets, hint: 'A planning range, not a quote or commitment. Select “Help me establish a budget” if you’re unsure.' })}
          {field({ id: 'timeline', label: 'When would you like to get started?', options: timelines })}
          {values.timeline && values.timeline !== 'Just budgeting / exploring' && field({ id: 'deadline', label: 'Do you have a target completion date?', type: 'date', hint: 'We’ll discuss feasibility. Selecting a date does not reserve a spot.' })}
        </>}
        {step === 3 && <>
          <p>We’ll review your request and contact you to discuss the scope and next steps.</p>
          {field({ id: 'name', label: 'Your name', required: true, autoComplete: 'name', maxLength: 120 })}
          {field({ id: 'zip', label: 'Project ZIP code', required: true, autoComplete: 'postal-code', inputMode: 'numeric', maxLength: 5, hint: 'Serving Oklahoma City, Edmond and surrounding communities.' })}
          {field({ id: 'property', label: 'Property type', options: ['Primary home', 'Rental / investment property', 'Commercial property', 'Other'] })}
          {field({ id: 'contact', label: 'Preferred way to reach you', required: true, options: ['Email', 'Phone call'] })}
          {field({ id: 'email', label: 'Email address', type: 'email', required: values.contact === 'Email', autoComplete: 'email', maxLength: 254 })}
          {field({ id: 'phone', label: 'Phone number', type: 'tel', required: values.contact === 'Phone call', autoComplete: 'tel', maxLength: 25 })}
          <details className="consultation-review"><summary>Review your project details</summary><pre>{projectSummary(values)}</pre><button type="button" className="consultation-secondary" onClick={() => go(0)}>Edit project details</button></details>
          <p className="consultation-help">By submitting, you’re asking Chief Stone Construction to contact you about this project. This is a free consultation request, not a booking or a construction quote.</p>
        </>}
        <div className="consultation-honeypot" aria-hidden="true"><label htmlFor={`${idPrefix}-website`}>Leave this empty</label><input id={`${idPrefix}-website`} name="_gotcha" value={values.website} onChange={event => update('website', event.target.value)} tabIndex={-1} autoComplete="off" /></div>
        <div className="consultation-actions">
          {step > 0 && <button className="consultation-secondary" type="button" onClick={() => go(step - 1)}>Back</button>}
          <button className="consultation-primary" type="submit">{status === 'sending' ? 'Sending your request…' : step === 3 ? 'Request my free consultation' : 'Continue'}<i className="fa-solid fa-arrow-right" aria-hidden="true" /></button>
        </div>
      </fieldset>
      {status === 'error' && <p className="consultation-error" role="alert">We couldn’t confirm your request was received. Your answers are still here. Try again, or call <a href="tel:+14053881577">(405) 388-1577</a>.</p>}
      <p className="consultation-help consultation-call">Prefer a conversation? <a href="tel:+14053881577">Call (405) 388-1577</a></p>
    </form>
  </section>;
}
