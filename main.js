window.addEventListener('scroll',function () {
    var scroll = document.querySelector('.back-to-top');
    scroll.classList.toggle("active", window.scrollY>400)
})
    function scrollTopTop() {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }