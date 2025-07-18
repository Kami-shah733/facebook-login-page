
let loginButton=document.getElementById("logbutton");
console.log("worked");
loginButton.addEventListener("click",function(){
    event.preventDefault();
    let email=document.getElementById("email").value.trim();
    let password=document.getElementById("password").value.trim();
    
    if(email==="" || password==="")
    {
        alert("Please enter email and password");
    }       
    else
        {
            window.location.href="loged.html";
            
        }
        
        
    });
