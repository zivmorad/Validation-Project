//event listeners
document.querySelector('#name').addEventListener('blur',validateName);
document.querySelector('#zip').addEventListener('blur',validateZip);
document.querySelector('#email').addEventListener('blur',validateEmail);
document.querySelector('#phone').addEventListener('blur',validatePhone);

function validateName(){
    const name=document.querySelector('#name');
    const re=/^[A-Za-z]{2,10}$/;
    if(!re.test(name.value)){ //check if name is invalide
        name.className='form-control is-invalid';
    } else if (re.test(name.value)){
        name.className='form-control';
    }
}
    
function validateZip(){
    const zipcode=document.querySelector('#zip');
    const re=/^[0-9]{5}(-[0-9]{4})?$/;
    if(!re.test(zipcode.value)){ //check if zipcode is invalide
        zipcode.className='form-control is-invalid';
    } else {
        zipcode.className='form-control';
    }
}

function validateEmail(){
    const email=document.querySelector('#email');
    const re=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(email.value)){ //check if email is invalide
        email.className='form-control is-invalid';
    } else if (re.test(email.value)) {
        email.className='form-control';
    }
}

function validatePhone(){
    const phone=document.querySelector('#phone');
    const re=/^([0-9]{3})\-([0-9]{7})$/;
    if(!re.test(phone.value)){ //check if phone is invalide
        phone.className='form-control is-invalid';
    } else {
        phone.className='form-control';
    }
}
