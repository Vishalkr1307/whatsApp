


export function navBar(){
 const token=localStorage.getItem("token");
 const name=document.getElementById("name");
 const email=document.getElementById("email");
 const btn1=document.getElementById("login")
 const btn4=document.getElementById("nav2")
 const btn2=document.getElementById("register")
 const btn3=document.getElementById("nav1")
 
 getUser()
 function getUser(){
    if(token){

    
    axios.post("/auth/profile",{
        token:token,
    }).then((res)=>{
        localStorage.setItem("User",JSON.stringify(res.data))
        name.textContent=res.data.name;
        email.textContent=res.data.email
        btn1.style.display="none"
        btn2.style.display="none"
        btn3.style.display="none"
        btn4.style.display="none"
        
    }).catch((err)=>{
        if(err.res.data=="Your Token has expired"){
            window.location.href="login.html"
        }
    })
  }
  else{
    window.location.href="login.html"
  }

 }


}
