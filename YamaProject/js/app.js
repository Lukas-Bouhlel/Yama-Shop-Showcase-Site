let content = document.querySelector(".very-long-content");
function updateProgressBar() {
    const progressBar = document.querySelector(".progress-bar");
    const scroll = window.pageYOffset;
    const endPosition = content.offsetTop + content.offsetHeight - window.innerHeight;
    const progress = Math.min(Math.ceil((scroll / endPosition) * 100), 100);
    progressBar.style.width = `${progress}%`;
}

window.onload = function () {
    updateProgressBar();
    document.addEventListener('scroll', updateProgressBar);
}

let menuBtn = document.getElementById('openBtn');
let navResponsive = document.getElementById('list-nav-responsive');
function toggleMenu() {
    menuBtn.classList.toggle('active');
    navResponsive.classList.toggle('active');
}

menuBtn.onclick = function () {
    toggleMenu();
}