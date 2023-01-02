const data = {
    'firstname': /^[a-zA-Z-]+$/,
    'lastname': /^[a-zA-Z-]+$/,
    'email': /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    'password': /^[A-Za-z]\w{7,14}$/
};

const button = document.querySelector(".request__btn");

const validateInput = (fieldName) => {
    const input = document.querySelector(`#${fieldName}`);
    const iconFieldName = document.querySelector(`.icon-${fieldName}`);
    const messageFieldName = document.querySelector(`.error-${fieldName}`);
    const regex = data[fieldName];
    
    if (!input.value.match(regex)) {
        iconFieldName.style.display = "block";
        messageFieldName.style.display = "block";
        input.style.border = "1px solid var(--red)";
        input.style.color = "var(--red)";
        input.classList.add("in-error");
    } else {
        iconFieldName.style.display = "none";
        messageFieldName.style.display = "none";
        input.style.border = "1px solid var(--border)";
        input.style.color= "var(--dark-blue)";
        input.classList.remove("in-error");
    }
}

button.addEventListener("click", (e) => {
    for (const [key] of Object.entries(data)) {
        validateInput(key);
    }
});