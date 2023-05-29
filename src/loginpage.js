function makeHttpRequest(url, method, data) {
    return fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .catch(error => console.error('Error:', error));
}
  
  function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
  
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
  
    if (type === "success") {
      messageElement.classList.add("form__message--success");
    } else if (type === "error") {
      messageElement.classList.add("form__message--error");
    }
  }
  
  function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    const errorElement = inputElement.parentElement.querySelector(".form__input-error-message");
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
  
  function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    const errorElement = inputElement.parentElement.querySelector(".form__input-error-message");
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
  
    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        const usernameInput = loginForm.querySelector("input[type='text']");
        const passwordInput = loginForm.querySelector("input[type='password']");

        const loginData = {
            username: usernameInput.value,
            password: passwordInput.value,
        };
        console.log(loginData);
  
      makeHttpRequest('http://localhost:5000/validate', 'POST', loginData)
        .then(response => {
          console.log(response)
          console.log(loginData)
          if (response === true) {
            // Successful login
            setFormMessage(loginForm, "success", "Login successful");
          } else {
            // Invalid credentials
            setFormMessage(loginForm, "error", "Invalid username/password combination");
          }
        })
        .catch(error => {
          console.error('Error:', error);
          setFormMessage(loginForm, "error", "An error occurred during login");
        });
    });
  });
  
  
  
/*
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
*/
