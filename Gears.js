const scrollTopValue = 100;

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 80px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > scrollTopValue || document.documentElement.scrollTop > scrollTopValue) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Unwrapper
function toggleUnwrapper(unwrapperId, buttonUnwrapText = "Unwrap", buttonWrapText = "Wrap") {
    const unwrapper = document.getElementById(unwrapperId);
    const button = unwrapper.querySelector('.unwrapper-toggle-button');
    const content = unwrapper.querySelector('.unwrapper-content');

    // Toggle the collapsed class
    content.classList.toggle('unwrapper-collapsed');

    // Change button text based on the state
    if (content.classList.contains('unwrapper-collapsed')) {
        button.textContent = buttonUnwrapText;
    } else {
        button.textContent = buttonWrapText;
    }
}