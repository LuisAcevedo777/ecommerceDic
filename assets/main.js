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



//cambiar a tema oscuro

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
//aparecer desaparecer ventana carrito

cartBtnOpen.addEventListener("click", e=> cartContainer.classList.remove("hide"))

cartBtnClose.addEventListener("click", e=> cartContainer.classList.add("hide") )

//aparecer desaparecer menu

menuBtnOpen.addEventListener("click", e=> menuContainer.classList.remove("hide"))

menuBtnClose.addEventListener("click", e=> menuContainer.classList.add("hide") )


// evento plus



//conteo de click

const spanCounter = document.querySelector("span.cart-counter");
const clickPlus = document.querySelector("span.plus")
const clickPlus2 = document.querySelector("span.dos")
const clickPlus3 = document.querySelector("span.tres")


let counter=0; 
clickPlus.addEventListener("click", e=>{

      
    counter++
    spanCounter.textContent=`${counter}`;
    console.log(counter);
    
        })
        clickPlus2.addEventListener("click", e=>{

      
            counter++
            spanCounter.textContent=`${counter}`;
            console.log(counter);
            
        })

        clickPlus3.addEventListener("click", e=>{

      
            counter++
            spanCounter.textContent=`${counter}`;
            console.log(counter);
             
        })
              
    
    
   //AGREGAR A CARRITO

   const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: './images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: './images/featured2.png',
      category: 'shirts',
      quantity: 15
     
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: './images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]

  const cartProduct =[];
  

  function addProduct(itemId){
    
    //condicion para saber si se puede agregar otro producto

  let productSelected = cartProduct.find(product => product.id === itemId)

   if(productSelected){
  let index = cartProduct.indexOf(productSelected)

  cartProduct[index].quantitySelected++


   }else{
      const item = items.find(item=> item.id ===itemId)
    item.quantitySelected = 1;
    cartProduct.push(item)

   } 
   showProducts()
    console.log(cartProduct)
  }

  
  clickPlus.addEventListener("click", e=>{
  
    addProduct(1)
    
       })

    clickPlus2.addEventListener("click", e=>{
  
        addProduct(2)
       
    })
      
        clickPlus3.addEventListener("click", e=>{
  
            addProduct(3)
            
        })   

       

    
  function showProducts(){

    
    const content = document.getElementById("cart-content") 
    
    let cadena =""
    cartProduct.forEach(product => {
           var ide = product.id
          
           
    cadena +=  `<div class="photo">
    <img class="featured" src="${product.image}" alt="">
    <span class="id">${product.id}</span></div>
    <div class="description2">
    <span>${product.name}</span>

    <div class="line2"><span>stock:${product.quantity}</span>
    <div class="barra2"></div>
    <span class="price2">$${product.price}</span>
    </div>
    <span class="sub">Subtotal:$ ${product.price * product.quantitySelected}</span>
    <div class="plus-minus"><span class="minus" id="minus">-</span><span>${product.quantitySelected} units</span><span class="pl" id="pl">+</span><img class="caneca" src="./images/household_chores_taking_out_trash_garbage_can_icon_133380.svg" alt=""></div>
    </div>`
    
    content.innerHTML = cadena

    })
      } 
//evento de click plus





      //DOCUMENT LOADED

      const loadComponent = () => {

        const loader = document.getElementById("loader")
       
        
        /*OBLIGARLO A QUE DURE UN POCO MAS:*/
        
        setTimeout(()=>{
        //INSTRUCCIONES
        //LO QUE QUEREMOS LLEVAR A CABO
        loader.classList.add("hide")
        } , 3000)                            
         } 
        document.addEventListener('DOMContentLoaded', ()=>{
    
    
            loadComponent()
        })