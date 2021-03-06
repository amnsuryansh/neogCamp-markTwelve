const inputs = document.querySelectorAll('.angle-input');
const isTrianglebtn = document.querySelector('#is-triangle-btn');
const outputE1 = document.querySelector('#output');

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (sumOfAngles === 180) {
        outputE1.innerText = "Yay!, the angles form a triangle";
    } else {
        outputE1.innerText = "Oh oh!, the angles don't form a triangle";
    }

}

isTrianglebtn.addEventListener("click", isTriangle);