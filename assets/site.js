// Theme toggle: follows the device setting until the visitor picks one.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-btn');
  function saved() { try { return localStorage.getItem('theme'); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem('theme', v); } catch (e) {} }
  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function label() { if (btn) btn.textContent = isDark() ? 'Light mode' : 'Blueprint mode'; }
  var s = saved();
  if (s === 'dark' || s === 'light') root.setAttribute('data-theme', s);
  label();
  if (btn) btn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    save(next);
    label();
  });
})();
