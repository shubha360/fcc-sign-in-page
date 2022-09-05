const googleButton = document.querySelector("#button-google");
const githubButton = document.querySelector("#button-github");
const emailButton = document.querySelector("#button-email");

const emailInput = document.querySelector("input[type='email']");

const errorMsg = document.querySelector("#error-msg")

googleButton.addEventListener('click', (event) => {
    event.preventDefault();
});

githubButton.addEventListener('click', (event) => {
    event.preventDefault();
});

emailButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (!emailInput.validity.valid) {

        console.log("alright");

        emailInput.style.border = "1px solid #a94442";

        const errorP = document.createElement("p");
        errorP.textContent = "The email you entered is not valid. Please check and try again.";

        errorMsg.appendChild(errorP);
    } else {

        console.log("not alright");

        emailInput.value = "";
        emailInput.setAttribute("placeholder", "Type the sign in code we emailed you here");
        emailButton.textContent = "Submit the sign in code and sign in to freeCodeCamp";
    }
});