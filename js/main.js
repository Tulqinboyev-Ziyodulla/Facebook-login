const main = document.querySelector(".main__box")
const form = document.querySelector(".form")
 const main__up = document.querySelector(".main__up")
 const main__name = document.querySelector(".input")
 const card__btn = document.querySelector(".card__btn")

 card__btn.addEventListener("click", ()=>{
    alert("John Doe")
 })

 main__up.addEventListener("click", ()=>{
    alert("John Doe")
})

function toggleShow (){
    main.classList.toggle("show")
}