// Show-Hide arrow
let arrow = document.getElementById('arrow');

function displayNone() {
    document.removeEventListener('scroll', showArrow);
    arrow.style.display = 'none';
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    setTimeout(function () {
        document.addEventListener('scroll', showArrow);
    }, 1000);
};

function showArrow() {
    if (window.pageYOffset >= 500) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    };
};

if (window.matchMedia("(max-width: 750px)").matches === false) {
    arrow.addEventListener('click', displayNone);
    document.addEventListener('scroll', showArrow);
};

// Resize handling
window.addEventListener('resize', resizeHandler);

function resizeHandler() {
    if (window.matchMedia("(max-width: 750px)").matches) {
        document.removeEventListener('scroll', showArrow);
        arrow.style.display = 'none';
    } else {
        document.addEventListener('scroll', showArrow);
        arrow.addEventListener('click', displayNone);
    };
};

// Contact form validation
document.getElementsByClassName('send')[0].addEventListener('click', submit);

function submit(event) {
    const name = document.getElementsByClassName('name')[0].value;
    const email = document.getElementsByClassName('email')[0].value;
    const message = document.getElementsByClassName('message')[0].value;
    const status = document.getElementsByClassName('status')[0];
    status.innerHTML = '';

    if (name.length >= 2) {
        status.innerHTML += '<div>Name is valid.</div>';
    } else {
        event.preventDefault();
        status.innerHTML += '<div>Name should have at least 3 characters!</div>';
    };

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
        status.innerHTML += '<div>E-mail is valid.</div>';
    } else {
        status.innerHTML += '<div>E-mail is not valid!</div>';
        event.preventDefault();
    };

    if (message.length > 5) {
        status.innerHTML += '<div>Message is valid.</div>';
    } else {
        status.innerHTML += '<div>Message should have at least 5 characters!</div>';
        event.preventDefault();
    };

    if ((name.length >= 2) && (email.length > 5 && email.includes('@') && email.includes('.')) && (message.length > 5)) {
        status.innerHTML = '';
    }
};