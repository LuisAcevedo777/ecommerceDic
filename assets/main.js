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

const eliminar = document.getElementById("cart-content")
const caneca = document.getElementById("caneca")

//conteo de click

const spanCounter = document.querySelector("span.cart-counter");
const clickPlus = document.querySelector("span.plus")
const clickPlus2 = document.querySelector("span.dos")
const clickPlus3 = document.querySelector("span.tres")

const clickPlus4 = document.querySelector("span.pl")

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
  } , 0)                            
   } 
  document.addEventListener('DOMContentLoaded', ()=>{


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



 //AGREGAR A CARRITO------------------------------------------------------


const cartProduct =[];
         
  function addProduct(itemId){
    
    //condicion para saber si se puede agregar otro producto

  let productSelected = cartProduct.find(product => product.id === itemId)

   if(productSelected){
  let index = cartProduct.indexOf(productSelected)

  cartProduct[index].quantitySelected++
 
      if(cartProduct[index].quantitySelected > cartProduct[index].quantity){
        cartProduct[index].quantitySelected = cartProduct[index].quantity
       
            
      }

   }else{
      const item = items.find(item=> item.id ===itemId)
    item.quantitySelected = 1;
    cartProduct.push(item)

   } 
   showProducts()
    console.log(cartProduct)
  }


//MOSTRAR PRODUCTOS EN VENTANA--------------------------------------------------


  function showProducts(){

    
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
      } 







//---------------------FUNCTIONS----------------------------//




//aparecer desaparecer ventana carrito

cartBtnOpen.addEventListener("click", e=> cartContainer.classList.remove("hide"))

cartBtnClose.addEventListener("click", e=> cartContainer.classList.add("hide") )

//aparecer desaparecer menu

menuBtnOpen.addEventListener("click", e=> menuContainer.classList.remove("hide"))

menuBtnClose.addEventListener("click", e=> menuContainer.classList.add("hide") )


// evento plus


let counter=0; 

  

function sum(e){
  counter = counter+1
  spanCounter.textContent = counter
 addProduct(e)

  }

  function min(e){
    counter = counter-1
    spanCounter.textContent = counter
    addProduct(e)

    }

    
clickPlus.addEventListener("click", ()=> sum(1) )
clickPlus2.addEventListener("click", ()=> sum(2) )
clickPlus3.addEventListener("click", ()=> sum(3) )
    

  

 
  

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
        
       

    
  


      