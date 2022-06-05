
const themeLink = document.querySelector('#theme');
const themeMode = localStorage.getItem('theme');
if(!themeMode) {
    themeLink.href = 'index.css';
} else {
    themeLink.href = localStorage.getItem('theme');
}

const dots = document.querySelectorAll('div[class *= theme-dot-]');
for(let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
        console.log(this.dataset.mode);
        const mode = this.dataset.mode;
        themeLink.href = mode;
        localStorage.setItem('theme', mode);
    })
}
