const updateDetails = (picture: HTMLElement, details: HTMLElement) => {

    if (!picture || !details) return

    const postName: HTMLElement | null = details.querySelector('.post-name')
    const postAuthor: HTMLElement | null = details.querySelector('.post-credit-author')
    const postAuthorLink: HTMLLinkElement | null = details.querySelector('.post-credit')
    const postEquipment: HTMLElement | null = details.querySelector('.post-equipment span:last-child')
    const maskables: Array<HTMLElement> | null = Array.from(details.querySelectorAll('[maskable="true"]'))

    maskables.forEach(elem => {
        elem.classList.add('active-mask')
        setTimeout(() => { elem.classList.remove('active-mask') }, 1000)
    });

    setTimeout(() => {
        if (!postName || !postAuthor || !postAuthorLink || !postEquipment) return
        postName.textContent = picture.dataset.name || null
        postAuthor.textContent = picture.dataset.author || null
        postAuthorLink.href = `https://instagram.com/${picture.dataset.author}`
        postEquipment.textContent = picture.dataset.equip || null
    }, 500)

}

export default updateDetails