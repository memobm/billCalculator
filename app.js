const billInput = document.querySelector('.bill input');
const tipOptions = document.querySelector('.tipPercent');
const calcResult = document.querySelector('#calc input');
const alertMsg = document.getElementById('tipResult');

function tipAmount() {
	const bill = billInput.value;
	const tip = tipOptions.value;

	if(bill == 0 || tip == 0) {
		alertMsg.innerHTML = 'Enter bill and tip amounts';
		alertMsg.classList.add('red-glow');
		setTimeout(() => alertMsg.classList.remove('red-glow'), 300);

	} else {
		const tipPercent = tip / 100;
		const result = bill * tipPercent;

		alertMsg.innerHTML = `You should tip: $ ${result}`;
	}
}

function main() {
	calcResult.addEventListener('click', tipAmount);
}

main();