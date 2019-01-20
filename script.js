(function () {

    function displayErrors(errors, form) {

        let p = document.createElement("p");
        p.className = "errors";
        p.innerHTML = errors.join("<br>");

        form.insertBefore(p, form.children[1]);
    }

    function isEmail(text) {
        return text.indexOf("@") !== -1;
    }

    function isNotEmpty(text) {
        return text !== "";
    }

    let form = document.querySelector("#contact"),
        emailField = form.querySelector("input[name='email']"),
        nameField = form.querySelector("input[name='name']"),
        phoneField = form.querySelector("input[name='phone']");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var errors = [];

        if (!isNotEmpty(nameField.value)) {
            errors.push("Please enter your name.");
            nameField.classList.add("invalid");
        } else {
            nameField.classList.remove("invalid");
        }

        if (!isEmail(emailField.value)) {
            errors.push("Please enter a valid email address.");
            emailField.classList.add("invalid");
        } else {
            emailField.classList.remove("invalid");
        }

        if (!isNotEmpty(phoneField.value)) {
            errors.push("Please enter you phone number.");
            phoneField.classList.add("invalid");
        } else {
            phoneField.classList.remove("invalid");
        }

        // console.log(errors);
        if (errors.length) {
            displayErrors(errors, form);
        } else {
            form.submit()
        }

    }, false);
})();