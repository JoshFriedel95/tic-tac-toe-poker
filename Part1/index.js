// console.log(document)
const game = [null, null, null, null, null, null, null, null, null]
console.log(game)
function play(clickedId) {
    const player = document.getElementById("player")
    const clicked = document.getElementById(clickedId)
    const topLeft = game[0]
    const topCenter = game[1]
    const topRight = game[2]
    const midLeft = game[3]
    const midCenter = game[4]
    const midRight = game[5]
    const botLeft = game[6]
    const botCenter = game[7]
    const botRight = game[8]
    const winning = [
        [0, 1, 2]
        [3, 4, 5]
        [6, 7, 8]
        [0, 3, 6]
        [1, 4, 7]
        [2, 5, 8]
        [0, 4, 8]
        [2, 4, 6]
    ]
    if (player.innerText === "X") {
        player.innerText = "O"
        clicked.innerText = "X"
        game[clickedId] = "X"
    } else {
        player.innerText = "X"
        clicked.innerText = "O"
        game[clickedId] = "O"
    }
    console.log(game)
    winning.forEach((ele, index) => {
        console.log(ele)
        if (game[ele[0]] === game[ele[1]] === game[ele[2]]) {
            alert(`${player} WON!`)
        }
        // ele.forEach((el, i) =>{
        //     game[el]
        // })
    })

    //     if(topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
    //     alert(`${topLeft} WON!`)
    //     return
    // }
    //      if(midLeft !== undefined && midLeft === midCenter && midLeft === midRight){
    //     alert(`${midLeft} WON!`)
    //     return
    // }
    //     if(botLeft !== undefined && botLeft === botCenter && botLeft === botRight){
    //     alert(`${botLeft} WON!`)
    //     return
    // }
    //     if(topLeft !== undefined && topLeft === midCenter && topLeft === botRight){
    //     alert(`${topLeft} WON!`)
    //     return
    // }
    //     if(botLeft !== undefined && botLeft === midCenter && botLeft === topRight){
    //     alert(`${botLeft} WON!`)
    //     return
    // }
    //     if(topLeft !== undefined && topLeft === midLeft && topLeft ===botLeft){
    //     alert(`${topLeft} WON!`)
    //     return
    // }
    //     if(topCenter !== undefined && topCenter === midCenter && topCenter === botCenter){
    //     alert(`${topCenter} WON!`)
    //     return
    // }
    //     if(topRight !== undefined && topRight === midRight && topRight === botRight){
    //     alert(`${topRight} WON!`)
    // }
    let gameFull = true
    for (let i = 0; i <= 8; i++) {
        if (game[i] === undefined) {
            gameFull = false
        }
    }
    if (gameFull === true) {
        alert(`CAT GAME`)
    }








}



//     if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
//         alert(`${topLeft} is the winner`);
//         return;
//       }
//       if (midLeft !== undefined && midLeft === midCenter && midLeft === midRight) {
//         alert(`${middleLeft} is the winner`);
//         return;
//       }
//       if (botLeft !== undefined && botLeft === botCenter && botLeft === botRight) {
//         alert(`${bottomLeft} is the winner`);
//         return;
//       }
//       if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
//         alert(`${topLeft} is the winner`);
//         return;
//       }
//       if (topCenter !== undefined && topCenter === midCenter && topCenter === botCenter) {
//         alert(`${topCenter} is the winner`);
//         return;
//       }
//       if (topRight !== undefined && topRight === midRight && topRight === botRight) {
//         alert(`${topRight} is the winner`);
//         return;
//       }
//       if (topLeft !== undefined && topLeft === midCenter && topLeft === botRight) {
//         alert(`${topLeft} is the winner`);
//         return;
//       }
//       if (botLeft !== undefined && botLeft === midCenter && botLeft === topRight) {
//         alert(`${bottomLeft} is the winner`);
//         return;
//       }
//       let gameFull = true;
//   for (let i = 0; i <= 8; i++) {
//     if (game[i] === undefined) {
//       gameFull = false;
//     }
//   }
//   if (gameFull === true) {
//     alert("Cat Game");
//     }
//     }
