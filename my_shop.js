var storage = [
    {
    id:"div1",
    src:"./img/img1.webp",
    shoes:"Nike Air Force 1 '07",
    price:15000,
    rating:5,
    flag:false,
},
{
    id:"div2",
    src:"./img/img2.webp",
    shoes:"Nike Air Force 1 '07",
    price:15000,
    rating:5,
    flag:false,
},
{
    id:"div3",
    src:"./img/img3.webp",
    shoes:"Nike Air Force 1 '07",
    price:15000,
    rating:5,
    flag:false,
},
{
    id:"div4",
    src:"./img/img4.webp",
    shoes:"Nike Air Force 1 '07",
    price:15000,
    rating:5,
    flag:false,
},
{
    id:"div5",
    src:"./img/img5.webp",
    shoes:"Nike Air Force 1 '07",
    price:15000,
    rating:5,
    flag:false,
},
{
    id:"div6",
    src:"./img/img6.webp",
    shoes:"Nike Air Force 1 '07",
    price:15000,
    rating:5,
    flag:false,
},
]



var main= document.querySelector("main")
var logo = document.querySelector(".fas.fa-shopping-cart")
var popup = document.querySelector("#popup")
var close = document.querySelector(".fa-solid.fa-circle-xmark")



function oc() {

logo.addEventListener("click",()=>{
    popup.style.right= "0"
})

close.addEventListener("click",()=>{
    popup.style.right="-100%"
})

}



function cart(){

storage.forEach((e)=>{
    main.innerHTML +=` <div id="${e.id}">
    <img src=${e.src} alt="">
    <h3>Bestseller</h3>
    <h3>${e.shoes}</h3>
    <p>Men's Shoes</p>
    <div><span>₹ ${e.price}</span><span>${e.rating} ⭐</span></div>
    <button class="fav"><i class="fa-solid fa-bag-shopping"></i></button>
    </div>`
    })
}



function addcart(){
    var fav = document.querySelectorAll(".fav")

    fav.forEach((a)=>{
        a.addEventListener("click",()=>{
            popup.style.right= "0"

        var parentid = a.parentElement.id

        storage.forEach((b)=>{
            if(parentid==b.id  && !b.flag){
                var dynamic  = document.querySelector("#dynamic")
                dynamic.innerHTML += `<div class="cont">
                <img src=${b.src} alt="">
                <div>
                    <h4>${b.shoes}</h4>
                    <p>${b.price}</p>
                    <input type="number" class="input">
                </div>
                <div><span class="sub">${b.price}</span><i class="fa-solid fa-trash-can"></i></div>
            </div>`
            b.flag=true
            }
            remove()
            calcu()
            total()

        })

        })

        // a.addEventListener("dblclick",()=>{
        //     popup.style.right= "0"
        // })

    })
}

function remove(){
    var del =document.querySelectorAll(".fa-solid.fa-trash-can")

    del.forEach((c) => {
        c.addEventListener("click",()=>{
            c.parentElement.parentElement.remove()
            // storage.forEach((b)=>{
            //     b.flag=false
            // })
            
             var parentelemt = c.parentElement.parentElement
             var goa = parentelemt.querySelector("h4")

             storage.forEach((j)=>{
                if(j.shoes==goa.innerHTML){
                    j.flag=false
                }
             })
             parentelemt.remove()

            total()

        })

        
    })
}


function calcu(){
    var input =document.querySelectorAll(".input")

    input.forEach((d)=>{
        d.addEventListener("input",()=>{
            if(d.value<1 || isNaN(d.value)){
                d.value=1
            }
            var parent=d.parentElement.parentElement
            var price=parent.querySelector("p").innerHTML.replace("Rs.","")
            var subtotal=d.value*price
            var sub=parent.querySelector(".sub")
            sub.innerHTML =`Rs.${subtotal}`

            total()
        })
    })

}

function total(){
    var Gtotal = document.querySelector("#total")
    var Gsub = document.querySelectorAll(".sub")
    var temp =0
    Gsub.forEach((f)=>{
        f=parseInt(f.innerHTML.replace("Rs.",""))
        temp +=f

        // Gtotal.innerHTML=temp
    })

    if(Gsub.length>0){
        Gtotal.innerHTML=`Total: Rs.${temp}`
    }
    else{
        Gtotal.innerHTML=`Total Rs: 0`
    }

}


function shopping(){
    cart()
    oc()
    addcart()
}
shopping()
// cart()

