document.getElementsByClassName('send')[0].addEventListener('click', submit);

function submit(event) {
    const name = document.getElementsByClassName('name')[0].value;
    const email = document.getElementsByClassName('email')[0].value;
    const message = document.getElementsByClassName('message')[0].value;
    const status = document.getElementsByClassName('status')[0];
    status.innerHTML = '';

    if (name.length >= 2) {
        status.innerHTML += '<div>Name is valid.</div>';
        console.log(status.innerHTML);
    } else {
        event.preventDefault();
        status.innerHTML += '<div>Name should have at least 3 characters!</div>';
        console.log(status.innerHTML);
    }

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
        status.innerHTML += '<div>E-mail is valid.</div>';
        console.log(status.innerHTML);
    } else {
        status.innerHTML += '<div>E-mail is not valid!</div>';
        console.log(status.innerHTML);
        event.preventDefault();
    }

    if (message.length > 5) {
        status.innerHTML += '<div>Message is valid.</div>';
        console.log(status.innerHTML);
    } else {
        status.innerHTML += '<div>Message should have at least 5 characters!</div>';
        console.log(status.innerHTML);
        event.preventDefault();
    }
}