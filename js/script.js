function go(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');
    document.querySelectorAll('.nls a').forEach(a => a.classList.remove('active'));
    const el = document.getElementById('nl-' + id);
    if (el) el.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('navLinks').classList.remove('mob');
    return false;
}
function toggleTheme() {
    const d = document.documentElement, dark = d.dataset.theme === 'dark';
    d.dataset.theme = dark ? '' : 'dark';
    document.getElementById('tBtn').textContent = dark ? '☽' : '☀';
}
function toggleMob() { document.getElementById('navLinks').classList.toggle('mob') }
function pf(btn, cat) {
    document.querySelectorAll('.fb').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.mi').forEach(item => {
        item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
    });
}
function submitForm(btn) {
    const t = btn.textContent; btn.textContent = 'Sending…'; btn.disabled = true;
    setTimeout(() => {
        btn.textContent = '✓ Message Sent!'; btn.style.background = '#1D9E75';
        setTimeout(() => { btn.textContent = t; btn.style.background = ''; btn.disabled = false; }, 3000);
    }, 1200);
}