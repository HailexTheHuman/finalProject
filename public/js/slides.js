document.addEventListener('DOMContentLoaded', async () => {

    let slideElement = document.getElementById('slide');

    let source = [];

    let memeIndex = 0;

    //Was going to do a slide show of memes that some api scrapes and it was cool on the 29th, but then on the 30th the memes got a bit interesting and I decided to try another api
    
    // async function getapi() {
    //     const response = await fetch(`https://meme-api.com/gimme/100`);
    //     var data = await response.json();
    //     console.log(data);
    //     for (let i = 0; i < data.memes.length; i++) {
    //         source[i] = data.memes[i].preview[data.memes[i].preview.length-1]
    //     }
    //     console.log("Sources ", source)
    // }
    
    //This api was guaranteed to not show the bad memes I was getting before... because it was only giving templates...
    
    // async function getapi() {
    //     const response = await fetch(`https://api.imgflip.com/get_memes`);
    //     var data = await response.json();
    //     console.log(data);
    //     for (let i = 0; i < data.data.memes.length; i++) {
    //         source[i] = data.data.memes[i].url
    //     }
    //     console.log("Sources ", source)
    // }

    //Decided to just cycle through the pics I had already approved
                    
    async function getapi() {
        source = ["../images/daFuture.png", "../images/space.jpg", "../images/wubba-lubba-dub-dub-rick-sanchez.gif"]
        console.log("Sources ", source)
    }


    function changeMeme() {
        slideElement.src = source[memeIndex];
        memeIndex++;
        if(memeIndex >= source.length) {
            memeIndex = 0;
        }
    }

    await getapi();

    changeMeme();

    setInterval(changeMeme, 10000);

});