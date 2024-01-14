import { auth, onAuthStateChanged, signOut, } from "./firebase.js"

const blogPostsContainer = document.getElementById('blogPosts');
onAuthStateChanged (auth, (user) => {
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
            blogPostsContainer.innerHTML = '<p>Login to view blog posts.</p>'
        }
    }
}
);

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
