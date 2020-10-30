const cardSizeForEachSection = 6;



/**
 * This function changes active class of navbar
 */


const onAlbumPageLoad = function(){
     const urlParams = new URLSearchParams(window.location.search); 
     const id = urlParams.get('id');

     const album = playlist.find((item)=>{
        return item.id === id;
     })
     return album.id
}

const navActions = function(){
    let navList = document.querySelectorAll(".col-10 nav ul li");

    for (let item of navList){
        item.parentElement.classList.remove("active")
        
        item.addEventListener("click", (e)=>{
            let currentListElement = e.target.parentElement;
           
            if (!(currentListElement.classList.contains("active"))){
                
                currentListElement.classList.add("active")
                navPages(currentListElement)
                
            }

            for(let item2 of navList){
                if(item2 !== currentListElement){
                    item2.classList.remove("active")
                    
                }
            }
        })

        
    }
}

const navPages = function(currentPageItem){
    let pages = document.querySelectorAll("section.page");

    for(let page of pages){
        let split = currentPageItem.firstElementChild.innerText.split(" ") //editing navtext to classname
        let pageLinkText = split.join("-").toLowerCase()
       

        if(page.classList.contains("displayShow")){
            page.classList.remove("displayShow")
        }
        if(page.classList.contains(pageLinkText)){
            page.classList.add("displayShow")
        }
    }
}

const cardActions = function(){
    let sampleCard = document.querySelector(".col-10 section.page div.row div.col")
    let pages = document.querySelectorAll("section.page")
    // let cards = document.querySelectorAll("section.page div.row div.col")
    // console.log(cards)

    //This Part clones card for Mainpage
    for(let i=0;i<pages.length;i++){
        if(!(pages[i].classList.contains("about"))){
            let pageInnerSections = pages[i].querySelectorAll("section.container")
            for(let j=0;j<pageInnerSections.length;j++){
                let innerSectionRow = pageInnerSections[j].querySelector("div.row")
                
                for(let k = 0;k<cardSizeForEachSection; k++){
                    let newCard = sampleCard.cloneNode(true)
                    newCard.classList.remove("hide")
                    if(pageInnerSections[j].classList.contains("homepage")){
                        //TODO Also change the sample card actions
                        let cover = newCard.querySelector("img");
                        let albumName = newCard.querySelector("h5")
    
                        let contentIndex = getRandomInt(0,15)
                        
    
                        albumName.innerText = playlist[contentIndex].name
                        cover["src"] = playlist[contentIndex].cover;
                       
                        changePlayerContent(newCard,contentIndex)
                       
                    }
    
                    else{
                        //TODO write rules for artist page
                        
                        // cardActionForArtist()
    
                        
                    }
                    sampleCard.remove()
                    innerSectionRow.appendChild(newCard)
                }
            }
        }

    }
}

const cardActionForArtist = function(){
    
    
    let pages = document.querySelectorAll("#artistpage section.page")
    
    for(let page of pages){
        if(!(page.classList.contains("about"))){
            let artistCards = page.querySelectorAll(".card")
            
            for(let i=0;i<artistCards.length;i++){
                let cover = artistCards[i].querySelector("img"); 
                let albumName = artistCards[i].querySelector("h5");
                albumName.innerText = queen[i].album;
                cover["src"] = queen[i].cover;
           
        }
        }
        
    }
    
}

const changePlayerContent = function(card,index){
    
        card.addEventListener("click",(e)=>{
            
            // window.location.href = `./pages/artist.html?id=${playlist[index].id}`

            let playImg = document.querySelector("#player img")
            let playTitle = document.querySelector(".player-title p")
            let playSubTitle = document.querySelector(".player-title p:nth-of-type(2)")

            playImg["src"] = card.querySelector("img")["src"];
            playTitle.innerText = card.querySelector("h5").innerText
            playSubTitle.innerText = `${playTitle.innerText} Playlis...`
            
            
            
            let audioSrc = document.querySelector("audio source")

            let playlistData = playlist.find(index => index.name == card.querySelector("h5").innerText)
            console.log(audioSrc)
            audioSrc["src"] = playlistData.song
           
           
        })
        
    
}
/*
const cardIMGTemplate = function(){
    let cards = document.querySelectorAll(".card img");
    let path = window.location.pathname;
    let page = path.split("/").pop();
    for(let img of cards){
        if(page === "index.html"){
            img["src"] = "./assets/Bohemian-Rhapsody.jpeg"
        }else{
            img["src"] = "../assets/Bohemian-Rhapsody.jpeg"
            
        }
        
    }

}
*/

const togglePlayPause = function(){
    let play = document.querySelectorAll(".play");
    let pause = document.querySelectorAll(".pause");


    for(let btn of play){
        btn.addEventListener("click",(e)=>{
            for(let btn2 of pause){
                btn.classList.add("hide")
                btn2.classList.remove("hide")
            }
            
            
        })
    }

    for(let btn of pause){
        btn.addEventListener("click",(e)=>{
            for(let btn2 of play){
                btn.classList.add("hide")
                btn2.classList.remove("hide")
            }
            
            
        })
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function likedSongs(){
    let liked = document.querySelector("#likedPage");

    liked.addEventListener("click",()=>{
        window.location.href = "../pages/likedSongs.html"
    })
}

window.onload = function(){
    // loginToPage()
    // createPlaylist()
    
   
    // navActions()
    // cardActions()
    // cardActionForArtist()
    // likedSongs()
    
    // togglePlayPause()
    
    // changePlayerContent()
    if(window.location.href.includes("artist")){
        // onAlbumPageLoad()
    }
    // cardActionsArtistPage()

   

}


