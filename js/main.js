window.onload = function(){
    navActive()
}

/**
 * This function changes active class of navbar
 */

const navActive = function(){
    let navList = document.querySelectorAll("nav ul li");

    for (let item of navList){
        item.parentElement.classList.remove("active")
        
        item.addEventListener("click", (e)=>{
            let currentListElement = e.target.parentElement;
            console.log(currentListElement)
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