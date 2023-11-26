const updateDetails = (picture, details) => {

    if (!picture || !details) return

    const postName = details.querySelector('.post-name')
    const postAuthor = details.querySelector('.post-credit-author')
    const postEquipment = details.querySelector('.post-equipment span:last-child')
    const maskables = Array.from(details.querySelectorAll('[maskable="true"]'))

    maskables.forEach(elem => {
        elem.classList.add('active-mask')
        setTimeout(() => { elem.classList.remove('active-mask') }, 1000)
    });

    setTimeout(() => {
        postName.textContent = picture.dataset.name
        postAuthor.textContent = picture.dataset.author
        postEquipment.textContent = picture.dataset.equip
    }, 500)

}

export default updateDetails