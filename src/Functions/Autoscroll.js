const Autoscroll = () => {
    const wrapper = document.querySelector('.carousel-wrapper')
    if (!wrapper) return
    const img_items = document.querySelectorAll('.carousel-box')
    if (!img_items) return
    const body = document.body
    const imgRect = img_items[0].getBoundingClientRect()
    const bodyRect = body.getBoundingClientRect()

    const scrolling_const = window.getComputedStyle(wrapper)?.getPropertyValue('--carousel-const')
}

export default Autoscroll