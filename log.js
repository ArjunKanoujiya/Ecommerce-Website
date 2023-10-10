var form =document.querySelector("form")
var first =document.querySelector("#first")
var efirst =document.querySelector("#efirst")
var last =document.querySelector("#last")
var elast =document.querySelector("#elast")
var number =document.querySelector("#number")
var enumber =document.querySelector("#enumber")
var email =document.querySelector("#email")
var eemail =document.querySelector("#eemail")
var pass =document.querySelector("#pass")
var epass =document.querySelector("#epass")
var cpass =document.querySelector("#cpass")
var ecpass =document.querySelector("#ecpass")
var button =document.querySelector("button")
// var storage =JSON.parse(localStorage)



var k=true
var store=[]

var local = JSON.parse(localStorage.getItem("data"))

if(local){
    store=local
}


button.addEventListener("click",(valid)=>{


    var regx=/^[a-zA-Z]{2,10}$/
    var regx1=/^[6-9][0-9]{9}$/ 
    var regx3 = /^[a-zA-Z0-9!@]{6,15}$/
  

    if(first.value ==""){
        efirst.innerHTML="*First Name Required"
       // valid.preventDefault()
       k=false

    }
    else if(regx.test(first.value)){
        efirst.innerHTML=""
        console.log("First correct")
        
    }
    else{
        efirst.innerHTML="Invalid First Number"
        //valid.preventDefault()
        k=false
    }

    // for last
    if(last.value ==""){
        elast.innerHTML="*Last Name Required"
       // valid.preventDefault()
       k=false

    }
    else if(regx.test(last.value)){
        elast.innerHTML=""
        console.log("last correct")
        
    }
    else{
        elast.innerHTML="Invalid Last Number"
        //valid.preventDefault()
        k=false
    }

    //for mobile no
    if(number.value==""){
        enumber.innerHTML="*Mobile Number Required"
       // valid.preventDefault()
       k=false
    }
    else if(regx1.test(number.value)){
        enumber.innerHTML=""
        console.log("number correct")
    }
    else{
        enumber.innerHTML="Inavlid number"
       // valid.preventDefault()
       k=false
    }

    //for email
    if(email.value==""){
        eemail.innerHTML="*Email id  Required"
        //valid.preventDefault()
        k=false
    }
    // else if(regx.test(email.value)){
    //     eemail.innerHTML=""
    // }
    else{
        eemail.innerHTML=""
        console.log("email correct")
 
    }


    // for password
    if(pass.value==""){
        epass.innerHTML="*Password Number Required"
       // valid.preventDefault()
       k=false
    }
    else if(regx3.test(pass.value)){
        epass.innerHTML=""
        console.log("pass correct")
    }
    else{
        epass.innerHTML="Inavlid Password"
        // valid.preventDefault()
        k=false
    }

    if(cpass.value==pass.value){
        ecpass.innerHTML=""
        console.log("pass2 correct")
    }
    else{
        ecpass.innerHTML="password is not matching"
        // valid.preventDefault()
        k=false
    }

    for(i=0;i<storage.length;i++)
    {

    
        if(k){
            console.log("hi")
            var ref={
                first:first.value,
                last:last.value,
                number:number.value,
                email:email.value,
                pass:pass.value,
            };
            store.push(ref)
            localStorage.setItem("data",JSON.stringify(store))

        }
        else{
    
            valid.preventDefault()
        }
    }

});