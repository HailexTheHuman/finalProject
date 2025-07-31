document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const styleToggle = document.getElementById("style-toggle");
    // const currentStyle = document.getElementsByTagName("link");
    // console.log(currentStyle.href)

    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'Dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Light Mode';
    }


    themeToggle.addEventListener('click',  () => {
        body.classList.toggle('dark-theme');

        const isDark = body.classList.contains('dark-theme');

        themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";

        localStorage.setItem('theme', isDark ? 'Dark' : 'Light')
    })

    styleToggle.addEventListener('click',  () => {
        if(document.styleSheets[0].href == "http://localhost:5000/css/style.css") {
            document.querySelector("link").href = "../css/alternateStyle.css";
        } else {
            document.querySelector("link").href = "../css/style.css";
        }
    })
})