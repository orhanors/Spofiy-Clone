const cardSizeForEachSection = 11;

window.onload = function(){
    navActions()
    cardActionsMainPage()
    cardIMGTemplate()
    togglePlayButton()
   
    // cardActionsArtistPage()
}

/**
 * This function changes active class of navbar
 */

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

const cardActionsMainPage = function(){
    let sampleCard = document.querySelector(".col-10 section.page div.row div.col")
    let pages = document.querySelectorAll("section.page")
    // let cards = document.querySelectorAll("section.page div.row div.col")
    // console.log(cards)

    for(let i=0;i<pages.length;i++){
        let pageInnerSections = pages[i].querySelectorAll("section.container")
        for(let j=0;j<pageInnerSections.length;j++){
            let innerSectionRow = pageInnerSections[j].querySelector("div.row")
            
            for(let k = 0;k<cardSizeForEachSection; k++){
                let newCard = sampleCard.cloneNode(true)
                innerSectionRow.appendChild(newCard)
            }
        }
    }
}

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

const togglePlayButton = function(){
    let playButtons = document.querySelectorAll(".card .round-button");
    let pauseButton = `<i class="mr-2 fas fa-grip-lines-vertical"></i>`
    let playButton = `<i class="mb-2 mr-1 fa fa-play fa-sm"></i>`
    for(let button of playButtons){
        
        button.addEventListener("click",(e)=>{
            
           
        })

    }
}
