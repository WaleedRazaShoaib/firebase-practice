
let loginuserName = document.getElementById("login-userName");
let loginemail = document.getElementById("login-email");
let loginpassword = document.getElementById("login-password");
let loggin = document.getElementById("loggin")

let logindatasave = () => {
    if (loginuserName.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Plzz write the username ",
        });
    }else if (loginemail.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Plzz write the email ",
        });
    }else if (loginpassword.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Plzz write the password ",
        });
    }
    else {
        console.log("user ", loginuserName.value)
        console.log("user ", loginemail.value)
        console.log("user ", loginpassword.value)
    }
    

    loginuserName.value = "";
    loginemail.value = "";
    loginpassword.value = "";
    
}


loggin.addEventListener("click", logindatasave)