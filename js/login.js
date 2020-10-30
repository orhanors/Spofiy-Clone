const users = [{name:"admin",password:"admin"},
{name:"abishek",password:"1234"},
{name:"orhan",password:"1234"}]

const loginToPage = function(){
    let loginBtn = document.querySelector("#loginBtn");

    let username = document.querySelector("#username");
    let password = document.querySelector("#password");

    let invalidMessage = document.querySelector("#invalid")
   
    
    loginBtn.addEventListener("click",()=>{
       
        let trustedUser = users.find((index)=> username.value == index.name && password.value == index.password)    
        if(trustedUser){
            window.location.href = "../index.html"
            
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




