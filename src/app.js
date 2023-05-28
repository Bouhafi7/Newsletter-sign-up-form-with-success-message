let contanier = document.querySelector('.container');
let btnSubmit = document.querySelector('input[type="submit"]');
let emailInput = document.querySelector('input[type="email"]');
let emailErr = document.querySelector('.email-err');

let subContainer = document.querySelector('.subsribing-container');
let emailSub = document.querySelector('.email');
let dismissBtn = document.querySelector('.subsribing-container button');

btnSubmit.addEventListener('click', (e) => {
    submit(e);
});

emailInput.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') submit(e);
});

const submit = (e) => {
    e.preventDefault();
    let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ig;
    if (regex.test(emailInput.value)) {
        inputValid();
    } else if (emailInput.value == '') {
        emailErr.innerText = 'Email required';
        inputNotValid();
    } else {
        emailErr.innerText = "Valid email required";
        inputNotValid();
    }
}

const inputValid = () => {
    contanier.classList.add('hide');
    subContainer.classList.add('show');
    emailErr.classList.remove('notValid');
    emailInput.classList.remove('notValid');
    emailSub.innerText = emailInput.value;
    emailInput.value = '';
}

const inputNotValid = () => {
    emailErr.classList.add('notValid');
    emailInput.classList.add('notValid');
}

dismissBtn.onclick = () => {
    contanier.classList.remove('hide');
    subContainer.classList.remove('show');
}