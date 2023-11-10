const navigationonroutechange = () => {
    const nav_btn = document.querySelector('.nav-btn')
    const nav = document.getElementById('nav')
    if (!nav_btn) return
    nav.classList.remove('menu');
    nav_btn.classList.remove('menu-active');
    return;
}

export default navigationonroutechange