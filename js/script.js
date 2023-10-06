let _inpName = document.getElementById('inpName');
let _inpNum = document.getElementById('inpNumber');
let _number = document.getElementById('number');

_inpName.addEventListener('input', (e) => {
    document.getElementById('name').innerHTML = e.target.value;
});

_inpNum.addEventListener('input', _addnumber);

function _addnumber(e) {
    let inputNumber = e.target.value;
    let formattedNumber = "";

    inputNumber = inputNumber.replace(/\s/g, "").replace(/\D/g, "");

    for (let i = 0; i < 16; i++) {
        if (i < inputNumber.length) {
            formattedNumber += inputNumber[i];
        } else {
            formattedNumber += "#";
        }

        if ((i + 1) % 4 === 0 && i < 15) {
            formattedNumber += " ";
        }
    }

    e.target.value = formattedNumber;
    _number.innerText = formattedNumber;
}

_inpNum.addEventListener('keydown', (e) => {
    if (e.keyCode === 8) {
        e.preventDefault();

        let inputNumber = _inpNum.value.replace(/\s/g, "").replace(/\D/g, "");

        if (inputNumber.length > 0) {
            inputNumber = inputNumber.substring(0, inputNumber.length - 1);
        }

        let formattedNumber = "";

        for (let i = 0; i < 16; i++) {
            if (i < inputNumber.length) {
                formattedNumber += inputNumber[i];
            } else {
                formattedNumber += "#";
            }

            if ((i + 1) % 4 === 0 && i < 15) {
                formattedNumber += " ";
            }
        }

        _inpNum.value = formattedNumber;
        _number.innerText = formattedNumber;
    }
});


//end of name and number input


let _expiration = document.getElementById('expiration'); 
let _date = document.getElementById('date'); 

_expiration.addEventListener('input', (e) => {
    let inputDate = e.target.value;
    let formattedDate = "";

    inputDate = inputDate.replace(/\s/g, "").replace(/\D/g, "")

    for (let i=0; i<4; i++) {
        if(i < inputDate.length && (inputDate[0] < 1) ) {
            formattedDate += inputDate[i]
            if(i === 1) {
                formattedDate += "/"
            }
        }
    }

    e.target.value = formattedDate;
    _date.innerText = formattedDate;
});

_expiration.addEventListener('keydown', (e) => {
    if (e.keyCode === 8) { // Backspace key
        e.preventDefault();

        let inputDate = _expiration.value.replace(/\s/g, "").replace(/\D/g, "");

        if (inputDate.length > 0) {
            inputDate = inputDate.substring(0, inputDate.length - 1);
        }

        let formattedDate = "";

        for (let i = 0; i < inputDate.length; i++) {
            formattedDate += inputDate[i];
            if (i === 1 && inputDate.length > 1) {
                formattedDate += "/";
            }
        }

        _expiration.value = formattedDate;
        _date.innerText = formattedDate;
    }
});

//end of expiration

const cvv2Input = document.getElementById('cvv2');

// Get the card elements
const cardFront = document.querySelector('.card');
const cardBack = document.querySelector('.cardback');

cvv2Input.addEventListener('focus', function () {
  cardFront.style.transform = 'rotateY(180deg)';
  cardBack.style.transform = 'rotateY(0deg)';
});

cvv2Input.addEventListener('blur', function () {
  cardFront.style.transform = 'rotateY(0deg)';
  cardBack.style.transform = 'rotateY(180deg)';
});

const cardBackCVV2 = document.getElementById('CVV2');

cvv2Input.addEventListener('input', function () {
  const cvv2Value = this.value.replace(/\D/g, '');
  const limitedCVV2Value = cvv2Value.slice(0, 4);
  this.value = limitedCVV2Value;
  cardBackCVV2.textContent = limitedCVV2Value.replace(/\d/g, '*');
});

cvv2Input.addEventListener('blur', function () {
  if (this.value === '') {
    cardBackCVV2.textContent = '';
  }
});




