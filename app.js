const billInput = document.querySelector('.bill input');
const tipOptions = document.querySelector('.tipPercent');
const billSplit_input = document.querySelector('.billSplit input');
const calcResult = document.querySelector('#calc input');
const alertMsg = document.getElementById('tipResult');
const billMsg = document.getElementById('billFinal');
const billSplitMsg = document.getElementById('billSplitTotal');

function billAmount() {
	const bill = billInput.value;
	const tip = tipOptions.value;
	const billSplit = billSplit_input.value;
	const tipPercent = tip / 100;
	const result = bill * tipPercent;
	const billTotal = parseFloat(bill) + parseFloat(result);
	const billSplitTotal = billTotal / parseFloat(billSplit);

	if(bill == '' || tip == '' || billSplit == '') {
		alertMsg.innerHTML = 'Enter all fields';

	} else if (bill <= 0 || bill == '') {
		alertMsg.innerHTML = 'Enter a correct bill amount';
		billMsg.innerHTML = '';
		billSplitMsg.innerHTML = '';
		alertMsg.classList.add('red-glow');
		setTimeout(() => alertMsg.classList.remove('red-glow'), 300);

	} else if(tip == 0) {
		alertMsg.innerHTML = 'Enter tip amount';
		billMsg.innerHTML = '';
		billSplitMsg.innerHTML = '';
		alertMsg.classList.add('red-glow');
		setTimeout(() => alertMsg.classList.remove('red-glow'), 300);

	} else if(billSplit <= 0 || billSplit == '') {
		alertMsg.innerHTML = 'Enter a correct split amount';
		billMsg.innerHTML = '';
		billSplitMsg.innerHTML = '';
		alertMsg.classList.add('red-glow');
		setTimeout(() => alertMsg.classList.remove('red-glow'), 300);

	} else {
		alertMsg.innerHTML = `You should tip: $ ${result}`;
		billMsg.innerHTML = `Final bill is $ ${billTotal}`;
		billSplitMsg.innerHTML = `Final bill per person: $ ${billSplitTotal}`;
	}
}

function main() {
	calcResult.addEventListener('click', billAmount);
}

main();
