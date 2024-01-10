import { auth, onAuthStateChanged, signOut, } from "./firebase.js"


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user ", user)
        if (location.pathname !== "/blog.html") {
            window.location.href = "/blog.html"
        }
        const uid = user.uid;
        // ...
    } else {
        if(location.pathname !== "/index.html"){
            window.location.href = "/index.html";
           }

     }
});

let logoutbtn = document.getElementById("logoutbtn");
const logOut = () =>{
    signOut(auth).then(() => {
//   location.href = "/login.html"
}).catch((error) => {
  // An error happened.
});
}
 logoutbtn && 
 logoutbtn.addEventListener("click",logOut)
