import {
    auth,
    createUserWithEmailAndPassword,
} from "./firebase.js"


let signupuserName = document.getElementById("signup-userName");
let signupemail = document.getElementById("signup-email");
let signuppassword = document.getElementById("signup-password");
let signin = document.getElementById("signin")

let signupdata = () => {
    if (signupuserName.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Plzz write the username ",
        });
    } else if (signupemail.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Plzz write the email ",
        });
    } else if (signuppassword.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Plzz write the password ",
        });
    }
    else {
        createUserWithEmailAndPassword(auth, signupemail.value, signuppassword.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("user --->", user)
                Swal.fire({
                    icon: "success",
                    title: "Your sign in has been saved",
                  });
                  location.href = "login.html"
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
       
        
    }

}

 signin && signin.addEventListener("click", signupdata)