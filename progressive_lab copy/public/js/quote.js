document.addEventListener('DOMContentLoaded', async () => {

    let quoteInPage = document.getElementById('quote');

    let quote = "";
    let author = "";

    async function getapi() {
        let id = Math.floor(Math.random()*1454)
        const response = await fetch(`https://dummyjson.com/quotes/${id}`);
        var data = await response.json();
        console.log(data);
        quote = data.quote;
        author = data.author;
        quoteInPage.innerHTML = `<q>${quote}</q> - ${author}`
    }

    getapi();

});