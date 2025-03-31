// ¡Buena suerte!
const btnCompute = document.getElementById('btn');
const bmiResult = document.getElementById('bmi-result');

function calculateBMI(){
    const inputHeight = Number(document.getElementById('height').value);
    const inputWeight = Number(document.getElementById('weight').value);
    const calculatedBMI = inputWeight / ((inputHeight / 100) ** 2);
    const message = document.getElementById('weight-condition');

    bmiResult.value = calculatedBMI.toFixed(2);

    if (calculatedBMI < 18.5 ) { message.textContent = 'Low weight'; }
    else if (calculatedBMI > 18.5 && calculatedBMI < 24.9) {
        message.textContent = 'Normal weight';
    }
    else if (calculatedBMI > 24.9 && calculatedBMI < 30) {
        message.textContent = 'Overweight';
    } else if (bmiValue >= 30) {
        weightConditionEl.innerText = "Obesity";
      }
}

btnCompute.addEventListener('click', calculateBMI);