window.addEventListener('DOMContentLoaded', () => getVisitCount());

const API_BASE = location.hostname.includes('localhost')
  ? 'http://localhost:7071'
  : 'https://myuniquefuncapp123mc.azurewebsites.net';

async function getVisitCount() {
  try {
    const res = await fetch(`${API_BASE}/api/getresumecounter`);
    const text = await res.text();
    const count = Number(text) || (JSON.parse(text).count ?? 0);
    document.getElementById('counter').textContent = count;
    console.log('Website called function API.');
  } catch (err) {
    console.error('counter error', err);
  }
}
