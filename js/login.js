const users = [{name:"admin",password:"admin"},
{name:"abishek",password:"1234"},
{name:"orhanors",password:"1234"}]


const loginToPage = function(){
    let loginBtn = document.querySelector("#loginBtn");

    let username = document.querySelector("#username");
    let password = document.querySelector("#password");

    let invalidMessage = document.querySelector("#invalid")
   
    
    loginBtn.addEventListener("click",()=>{
       
        let trustedUser = users.find((index)=> username.value == index.name && password.value == index.password)    
        if(trustedUser){
            window.location.href = "../index.html"
            hideDropdown()
            
        }else{
            invalidMessage["style"] = "display:block;color:red"
        }
        
       
    })   
}

const logout = function(){
    let btn = document.querySelector("#logoutMain");

    btn.addEventListener("click",()=>{
        window.location.href = "../pages/login.html"
    })
}

const tryForFree = function(){
    let freeBtn = document.querySelector("#tryfree")
    // let dropdown = document.querySelector("#dropdownMain");
    freeBtn.addEventListener("click",()=>{
        loadAdd()
        setTimeout(function(){ window.location.href = "../index.html"}, 4000);
       
    })
    
}
const loadAdd = function(){
    let advertising = document.querySelector(".advertising")
    advertising.classList.remove("hide")

    let fullpage = document.querySelector(".container-fluid.position-relative")
    fullpage.classList.add("hide")
}
const showDropdown = function(){
    let dropdown = document.querySelector("#dropdownMain");
    dropdown.classList.remove("hide")
}
