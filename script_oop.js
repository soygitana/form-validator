(function () {

    function Validator(form) {

        this.form = form;
        this.emailField = form.querySelector("input[name='email']"),
            this.nameField = form.querySelector("input[name='name']"),
            this.phoneField = form.querySelector("input[name='phone']");

        this.form.addEventListener("submit", this.validate.bind(this), false);
    }

    Validator.prototype.displayErrors = function () {


        var p = this.form.querySelector(".form-errors");

        if (!p) {
            p = document.createElement("p");
        }

        p.className = "form-errors";
        p.innerHTML = this.errors.join("<br>");

        this.form.insertBefore(p, this.form.children[1]);
    }

    Validator.prototype.isEmail = function (text) {
        return text.indexOf("@") !== -1;
    }

    Validator.prototype.isNotEmpty = function (text) {
        return text !== "";
    };


    Validator.prototype.validate = function (e) {
        e.preventDefault();

        this.errors = [];

        if (!this.isNotEmpty(this.nameField.value)) {
            this.errors.push("Please enter your name.");
            this.nameField.classList.add("invalid");
        } else {
            this.nameField.classList.remove("invalid");
        }

        if (!this.isEmail(this.emailField.value)) {
            this.errors.push("Please enter a valid email address.");
            this.emailField.classList.add("invalid");
        } else {
            this.emailField.classList.remove("invalid");
        }

        if (!this.isNotEmpty(this.phoneField.value)) {
            this.errors.push("Please enter you phone number.");
            this.phoneField.classList.add("invalid");
        } else {
            this.phoneField.classList.remove("invalid");
        }

        // console.log(errors);
        if (this.errors.length) {
            this.displayErrors();
        } else {
            this.form.submit()
        }


    }

    var form1 = new Validator(document.querySelector("#contact"));

})();