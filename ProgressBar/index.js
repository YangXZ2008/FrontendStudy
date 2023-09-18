const progressBar = document.querySelector(".progress-bar").style;

function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop;
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.width = (scrollTop / totalScroll) * 100 + '%';
}

window.addEventListener('scroll', updateProgressBar)
window.addEventListener('resize', updateProgressBar)

updateProgressBar();

