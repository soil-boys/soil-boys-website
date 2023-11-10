window.addEventListener('resize', (e) => {

    const nav = document.getElementById('nav')
    const nav_btn = document.querySelector('.nav-btn')
    if (!nav || !nav_btn) return

    if (
        e.target.innerHeight >= 600 &&
        nav.classList.contains('menu') &&
        nav_btn.classList.contains('menu-active')
        )
    {
        nav?.classList?.remove('menu');
        nav_btn?.classList?.remove('menu-active');
        return;
    }
    else return
})