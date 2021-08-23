const sides = document.querySelectorAll('.side-input');
const hypoBtn = document.querySelector('#hypo-btn');
const outputE1 = document.querySelector('#output');

function calcSumOfSides(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

function calculateHypo() {
    /*let a = sides[0];
    let b = sides[1];
    const c = Math.sqrt((a * a) + (b * b));*/
    const sumOfSquares = calcSumOfSides(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypo = Math.sqrt(sumOfSquares);
    outputE1.innerText = "The Length Of Hypotenuse is " + lengthOfHypo;
    
}

hypoBtn.addEventListener("click",calculateHypo);