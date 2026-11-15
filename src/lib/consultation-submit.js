const { leadPayload } = require('../data/consultation');

async function submitLead(values, endpoint, fetchImpl = fetch) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);
  try {
    const payload = new FormData();
    Object.entries(leadPayload(values)).forEach(([key, value]) => payload.append(key, value));
    const response = await fetchImpl(endpoint, {
      method: 'POST', body: payload, headers: { Accept: 'application/json' }, signal: controller.signal,
    });
    if (!response.ok) throw new Error('Submission failed');
  } finally {
    clearTimeout(timeout);
  }
}
module.exports = { submitLead };
