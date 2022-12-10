//-------------------LLAMAMIENTOS----------------------------//

const btnTheme  = document.getElementById("theme-btn")
const body = document.body
//llamado para ventana carrito
const cartBtnOpen = document.getElementById("cart-btn")
const cartBtnClose = document.getElementById("close-cart")
const cartContainer= document.getElementById("cart-container")
//llamado para ventana menu
const menuBtnOpen = document.getElementById("menu-btn")
const menuBtnClose = document.getElementById("close-menu")
const menuContainer= document.getElementById("menu-container")
//llamado para aumento por plus dentro de carrito

const minusBtn = document.getElementById("minus")

//eliminar

const deleteUnited = document.getElementById("cart-content")
const caneca = document.getElementById("caneca")

const checkBtn = document.getElementById("check")
//conteo de click

const spanCounter = document.querySelector("span.cart-counter");
const clickPlus = document.querySelector("span.plus")
const clickPlus2 = document.querySelector("span.dos")
const clickPlus3 = document.querySelector("span.tres")

const clickPlus4 = document.querySelector("span.pl")
const clickPlus5 = document.querySelector("span.pl2")
const clickPlus6 = document.querySelector("span.pl3")


// llamado en ventana ( quantitieSelected, price, checkout)
const stockW = document.querySelector("#item-q")
const priceW = document.querySelector("#item-p")



//---------------------ARRAY----------------------------//


const items = [
  {
    id: 1,
    name: 'Hoodies',
    price: 14.00,
    image: './images/featured1.png',
    category: 'hoodies',
    quantity: 10,
    quantitySelected: 0
  },
  {
    id: 2,
    name: 'Shirts',
    price: 24.00,
    image: './images/featured2.png',
    category: 'shirts',
    quantity: 15,
    quantitySelected: 0
   
  },
  {
    id: 3,
    name: 'Sweatshirts',
    price: 24.00,
    image: './images/featured3.png',
    category: 'shirts',
    quantity: 20,
    quantitySelected: 0
  }
]


//---------------------FUNCTIONS----------------------------//


//DOCUMENT LOADED

const loadComponent = () => {

  const loader = document.getElementById("loader")
 
  
  /*OBLIGARLO A QUE DURE UN POCO MAS:*/
  
  setTimeout(()=>{
  //INSTRUCCIONES
  //LO QUE QUEREMOS LLEVAR A CABO
  loader.classList.add("hide")
  } ,0)                            
   } 
  document.addEventListener('DOMContentLoaded', ()=>{
    
   
     getStorageInfo()
      loadComponent()
      
 
  })



//cambiar a tema oscuro---------------------------------------------------------

const darkThemeChange = () =>{

    if(body.classList.contains("dark")){

        body.classList.remove("dark")
    }else{ 
    body.classList.add("dark")}
    
    /*mas sencillo quitar y poner clase 'dark': body.classList.toogle("dark")*/
    
    /*Cambiar logo de sol y luna: */
    
    if(btnTheme.classList.contains("bx-moon")){
    
    btnTheme.classList.replace("bx-moon","bx-sun")
    }
    else{
           
        btnTheme.classList.replace("bx-sun","bx-moon")
    }
}

btnTheme.addEventListener("click", e =>{

darkThemeChange()
})



//-----------------AGREGAR A CARRITO--2----------------------------------------------------

const getStorageInfo = ()=>{

  let spanShow = window.localStorage.getItem("counter")
let cart = window.localStorage.getItem("cartProduct")
if(cart && spanShow){

cart = JSON.parse(cart)
spanShow = JSON.parse(spanShow)
//MOSTRAR PRODUCTOS EN VENTANA--------------------------------------------------
spanCounter.textContent=  spanShow
  const content = document.getElementById("cart-content2") 
  const content2= document.getElementById("item-q")
  const content3= document.getElementById("item-p")
  
  content.classList.add('cart-content2')
  let cadena =""
  let cadena2=""
  let cadena3=""
  let acu= 0
  let acuPrice= 0
  for(let i=0; i<cart.length; i++){
 acu= acu + cart[i].quantitySelected
  acuPrice = acuPrice+ (cart[i].price * cart[i].quantitySelected)
  }stockW.textContent = acu+' '+"units"
    priceW.textContent= "$"+acuPrice+" "+"dls."
   cart.map((product) => {
     
                        
  cadena +=  `<div class="art-class"><div class="photo" id="cart-content">
  <img class="featured" src="${product.image}" alt="">
  <span class="id">id: ${product.id}</span></div>
  <div class="description2">
  <span>${product.name}</span>

  <div class="line2"><span>stock:${product.quantity}</span>
  <div class="barra2"></div>
  <span class="price2">$${product.price}</span>
  </div>
  <span class="sub">Subtotal:$ ${product.price * product.quantitySelected}</span>
  <div class="plus-minus"><span class="minus" id="minus">-</span>
  <span>${product.quantitySelected} units</span>
  <span id="pl">+</span>
  <img class="caneca caneca2 caneca3" id="caneca" src="./images/household_chores_taking_out_trash_garbage_can_icon_133380.svg" alt=""></div>
  </div></div>`
 


  
  content.innerHTML = cadena



  }) 
  

} else{window.localStorage.setItem("cartProduct", JSON.stringify([]))
window.localStorage.setItem('counter', JSON.stringify(0))
}}


//AGREGAR A CARRITO------------------------------------------------------


function addProduct(itemId){
 
let cartActual = JSON.parse(window.localStorage.getItem("cartProduct"))


    //condicion para saber si se puede agregar otro producto

  let productSelected = cartActual.find(product => product.id === itemId)

   if(productSelected){
  let index = cartActual.indexOf(productSelected)
 
  cartActual[index].quantitySelected++
 
  
 
      if(cartActual[index].quantitySelected > cartActual[index].quantity){
        cartActual[index].quantitySelected = cartActual[index].quantity
                       
      }

   }else{
    
    let counterStorage = JSON.parse(window.localStorage.getItem("counter"))
    counterStorage = counterStorage + 1
    spanCounter.textContent = counterStorage
    
    window.localStorage.setItem("counter", JSON.stringify(counterStorage))
  
      const item = items.find(product=> product.id ===itemId)
      item.quantitySelected = 1;
    cartActual.push(item)
    
    
    
   } 
       console.log(cartActual)
  
  window.localStorage.setItem("cartProduct",JSON.stringify(cartActual))
  getStorageInfo()
}

// FUNCTION SUM  Y MIN  Reflejada en ventana de carrito

function eliminar(){
  
  window.localStorage.clear()
  stockW.textContent = 0+' '+"units"
    priceW.textContent= "$"+0.00+" "+"dls."
  spanCounter.textContent = 0
  const content = document.getElementById("cart-content2") 
  content.innerHTML= ` <div class="emtpy1" id="empty1">
  <h1>My cart</h1>
<img src="./images/empty-cart.png" alt="">
 <p>Your cart is empty
  You can add items to your cart by clicking on the "" 
  button on the product page.</p>
</div>`
getStorageInfo()
}

function clickSpan(){ 
  let cart = window.localStorage.getItem("cartProduct")
if(cart){

cart = JSON.parse(cart)
  cart.map(product => {
    let ide = product.id
    if(ide === 1){
    clickPlus4.classList.add("pl")
 }
 else if(ide ===2){
   clickPlus5.classList.add("pl2")
 }
 else if(ide ===3){
   clickPlus6.classList.add("pl3")}
 })
}}


//---------------------EVENTOS----------------------------//


//aparecer desaparecer ventana carrito

cartBtnOpen.addEventListener("click", e=> cartContainer.classList.remove("hide"))

cartBtnClose.addEventListener("click", e=> cartContainer.classList.add("hide") )

//aparecer desaparecer menu

menuBtnOpen.addEventListener("click", e=> menuContainer.classList.remove("hide"))

menuBtnClose.addEventListener("click", e=> menuContainer.classList.add("hide") )


// evento plus Reflejado en ventana de Carrito 
    
clickPlus.addEventListener("click", ()=> {addProduct(1)} )
clickPlus2.addEventListener("click", ()=> {addProduct(2)} )
clickPlus3.addEventListener("click", ()=> {addProduct(3) })
 

//eliminar TODO

checkBtn.addEventListener("click", ()=> {
  eliminar() })


 
  

  /*let counter=0; 
  let accu = 0;

  clickPlus.addEventListener("click", e=>{
     counter++
     spanCounter.textContent=counter
    addProduct(1)
   
       })

    clickPlus2.addEventListener("click", e=>{
      counter++
      spanCounter.textContent=counter
        addProduct(2)
       
    })
      
        clickPlus3.addEventListener("click", e=>{
          counter++
          spanCounter.textContent=counter
            addProduct(3)
            
        })   
for(let i=0; i<cartProduct.length;i++){
  accu=accu+cartProduct[i].quantity
  if(counter > accu){

    spanCounter.textContent=accu
  }

}*/
        
    
  //AGREGAR A CARRITO 3
/*const getStorageInfo = ()=>{

  let cartProduct = window.localStorage.getItem("cartProduct")
  if(cartProduct){
  
  cartProduct = JSON.parse(cartProduct)
  console.log(cartProduct)
  
  }else{
    window.localStorage.setItem("cartProduct", JSON.stringify([]))
  }
  }
  
  const addProduct = (producto) => {
  let cartActual = JSON.parse(window.localStorage.getItem("cartProduct"))
  
  
    cartActual.push(producto)
    window.localStorage.setItem("cartProducto",JSON,stringify(cartActual))
  }
*/

//MOSTRAR PRODUCTOS EN VENTANA--------------------------------------------------


  /*function showProducts(){

    
    const content = document.getElementById("cart-content2") 
    content.classList.add('cart-content2')
    let cadena =""
    cartProduct.map(product => {
           var ide = product.id
          
           
    cadena +=  `<div class="art-class"><div class="photo" id="cart-content">
    <img class="featured" src="${product.image}" alt="">
    <span class="id">id: ${product.id}</span></div>
    <div class="description2">
    <span>${product.name}</span>

    <div class="line2"><span>stock:${product.quantity}</span>
    <div class="barra2"></div>
    <span class="price2">$${product.price}</span>
    </div>
    <span class="sub">Subtotal:$ ${product.price * product.quantitySelected}</span>
    <div class="plus-minus"><span class="minus" id="minus">-</span>
    <span>${product.quantitySelected} units</span>
    <span class="pl" id="pl">+</span>
    <img class="caneca" id="caneca" src="./images/household_chores_taking_out_trash_garbage_can_icon_133380.svg" alt=""></div>
    </div></div>`
 
   
    content.innerHTML = cadena
    
    })
      } */



 //AGREGAR A CARRITO------------------------------------------------------

/*
let cartProduct =[];
    let acc = 0;     
  function addProduct(itemId){
    
    //condicion para saber si se puede agregar otro producto

  let productSelected = cartProduct.find(product => product.id === itemId)

   if(productSelected){
  let index = cartProduct.indexOf(productSelected)
 
  cartProduct[index].quantitySelected++
  acc = acc + 1
  stockW.textContent = acc
 
      if(cartProduct[index].quantitySelected > cartProduct[index].quantity){
        cartProduct[index].quantitySelected = cartProduct[index].quantity
                       
      }

   }else{
      const item = items.find(item=> item.id ===itemId)
    item.quantitySelected = 1;
    cartProduct.push(item)
    acc  = acc+1
    stockW.textContent = acc
    
   } 
   showProducts()
    console.log(cartProduct)
  }*/





      