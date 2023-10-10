var form =document.querySelector("form")
var user =document.querySelector("#user")
var pass =document.querySelector("#pass")
var button =document.querySelector("button")
var euser =document.querySelector("#euser")
var epass =document.querySelector("#epass")
var ebut =document.querySelector("#ebut")
var k=true

var storage = JSON.parse(localStorage.getItem("data"))


form.addEventListener("submit",(ak)=>{
    euser.innerHTML =""
    epass.innerHTML = ""
    ebut.innerHTML = ""


    if(user.value=="" && pass.value==""){
        // alert("empty ____@#$%^&&&")
        euser.innerHTML="Enter Username <br>"
        epass.innerHTML="Enter Password <br>"
        // k=false
        ak.preventDefault()
        
    }else if(user.value==""){
        // alert("empty ___user name")
        euser.innerHTML="Enter Username <br>"
        // k=false
        ak.preventDefault()
    }
    else if(pass.value==""){
        // alert("empty ____password")
        epass.innerHTML="Enter Password <br>"
        // k=false
        ak.preventDefault()
    }

    for(var i=0;i<storage.length;i++){
    
    if(user.value==storage[i].number && pass.value==storage[i].pass){
        alert("boss welcome to the page")
        // ebut.innerHTML="boss welcome to the page"
        k=false
    }
   }

   if(k){
    ebut.innerHTML="not matching"
    ak.preventDefault()
   }


    // else{
    //     // alert("kachada go away")
    //     ebut.innerHTML="kachada go away"
    //     k=false
    //     // ak.preventDefault()
    //     user.value=""
    //     pass.value=""
    // }
    
})