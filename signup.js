let signupuserName = document.getElementById("signup-userName");
let signupemail = document.getElementById("signup-email");
let signuppassword = document.getElementById("signup-password");
let signin = document.getElementById("signin")
 
let signupdata =  () => {
        if (signupuserName.value.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Plzz write the username ",
            });
        }
        else {
           console.log("user ", signupuserName.value)
        }
        if (signupemail.value.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Plzz write the email ",
            });
        }
        else {
            console.log("user ", signupemail.value)
        }
    
        if (signuppassword.value.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Plzz write the password ",
            });
        }
        else {
            console.log("user ", signuppassword.value)
        }

        
        
        
        // if (signupuserName.value && signupemail.value && signuppassword.value) {
            
            //     Swal.fire({
        //         icon: "success",
        //         title: "Your Sign up has been saved",
        //     });
        // }
    }
    
    signin.addEventListener("click",signupdata)