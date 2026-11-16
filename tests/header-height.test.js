const assert = require('assert');
const { observeHeaderHeight } = require('../src/lib/header-height');

function fixture(initial = '') {
  let value = initial, reads = 0, callback, disconnected = false;
  const element = { isConnected: true, getBoundingClientRect() { reads++; return { height: 112 }; } };
  const root = { style: { getPropertyValue: () => value, setProperty: (key, next) => { value = next; }, removeProperty: () => { value = ''; } } };
  const browser = { ResizeObserver: class { constructor(fn) { callback = fn; } observe(node) { assert.strictEqual(node, element); } disconnect() { disconnected = true; } } };
  return { element, root, browser, fire: () => callback(), value: () => value, reads: () => reads, disconnected: () => disconnected };
}
{
  const f = fixture('90px');
  const cleanup = observeHeaderHeight(f.element, f.root, f.browser);
  assert.strictEqual(f.value(), '112px');
  cleanup();
  f.element.isConnected = false;
  f.element.getBoundingClientRect = () => { throw new Error('Unmounted header must never be measured'); };
  f.fire(); // ResizeObserver notifications can already be queued when cleanup runs.
  assert.strictEqual(f.value(), '90px');
  assert(f.disconnected());
  cleanup(); // Cleanup is safe to repeat.
}
{
  const f = fixture();
  const cleanup = observeHeaderHeight(f.element, f.root, f.browser);
  f.element.isConnected = false;
  f.fire();
  assert.strictEqual(f.reads(), 1, 'Detached nodes must not be measured before cleanup either');
  cleanup();
  assert.strictEqual(f.value(), '');
}
{
  const f = fixture();
  const listeners = new Map();
  const browser = { addEventListener: (type, fn) => listeners.set(type, fn), removeEventListener: type => listeners.delete(type) };
  const cleanup = observeHeaderHeight(f.element, f.root, browser);
  assert(listeners.has('resize'), 'Use window resize when ResizeObserver is unavailable');
  listeners.get('resize')();
  assert.strictEqual(f.reads(), 2);
  cleanup();
  assert.strictEqual(listeners.size, 0);
}
assert.doesNotThrow(() => observeHeaderHeight(null, null, null)());
console.log('Header measurement regression checks passed: queued callback, detached node, cleanup, and fallback.');
