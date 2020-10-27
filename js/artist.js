const cardSizeForEachSection = 5;

window.onload = function(){
    cardActionsArtistPage()
}

const cardActionsArtistPage = function(){
    let sampleCard = document.querySelector("#artistpage section.page div.row div.col")
    
    let pages = document.querySelectorAll("section.page")
    // let cards = document.querySelectorAll("section.page div.row div.col")
    // console.log(cards)

    for(let i=0;i<pages.length;i++){
        let pageInnerSections = pages[i].querySelectorAll("section.container")
        for(let j=0;j<pageInnerSections.length;j++){
            let innerSectionRow = pageInnerSections[j].querySelector("div.row")
            console.log(pageInnerSections[j])
            for(let k = 0;k<cardSizeForEachSection; k++){
                let newCard = sampleCard.cloneNode(true)
                innerSectionRow.appendChild(newCard)
            }
            
            


        }
    }
}