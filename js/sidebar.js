
const createPlaylist = function(){
    let createBtn = document.querySelector(".create-playlist.mt-3.d-flex.flex-row")
    
    let listItems = document.querySelector(".new-track-list")

    let modal = document.querySelector(".modal")

    
    createBtn.addEventListener("click",(e)=>{
       modal.style.display = "block"

       let close = modal.querySelector(".closeBtn");
       let save = modal.querySelector(".saveBtn")

       let input = modal.querySelector("#playlist-name")

        
       close.addEventListener("click",()=>{
           modal.style.display = "none"
       })

       save.addEventListener("click",()=>{

            let newPlaylist = addElement(listItems,"li",{className:"playlistItem",innerText:`${input.value}`})
            input.value = "";
            modal.style.display = "none"
            
       })
    })
    
    
}