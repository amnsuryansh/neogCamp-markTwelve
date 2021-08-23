const inputs = document.querySelectorAll('.side-input');
const areaBtn = document.querySelector('#triangle-area-btn');
const outputE1 = document.querySelector('#output');

function calculateArea() {

    const firstSide = Number(inputs[0].value);
    const secondSide = Number(inputs[1].value);
    const thirdSide = Number(inputs[2].value);

    const s = (firstSide + secondSide + thirdSide) / 2;

    if ((firstSide + secondSide > thirdSide) && (secondSide + thirdSide > firstSide) && (thirdSide + firstSide > secondSide)) {
        const underRoot = s * (s - firstSide) * (s - secondSide) * (s - thirdSide);
        const area = Math.sqrt(underRoot);
        outputE1.innerText = "Area of a triangle using heron's formula is " + area + " units";
    }
    else {
        outputE1.innerText = "Enter valid side lengths such that each side lengths";
    }
}

areaBtn.addEventListener("click",calculateArea);

