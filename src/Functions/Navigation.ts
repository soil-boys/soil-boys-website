const navigation = () => {
    const nav_btn = document.querySelector('.nav-btn')
    const nav = document.getElementById('nav')
    if (!nav_btn || !nav) return
    nav.classList.toggle('menu');
    nav_btn.classList.toggle('menu-active');
    return;
}

export default navigation