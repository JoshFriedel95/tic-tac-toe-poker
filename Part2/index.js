// console.log("The house always wins!")
const input = document.getElementById("idInput")
const color = document.getElementById("colorInput")
// const reset = document.getElementById("reset")
function setCard(){
    const card = document.getElementById(idInput.value)
    // console.log(card)
    card.style.color = colorInput.value
}

// function myFunction(){
//     document.getElementById("myForm").reset()
// }