import {
    collection,
    addDoc,
    db,
    onSnapshot
} from "./firebase.js"

// References to HTML elements
const blogPostsContainer = document.getElementById('blogPosts');
const blogForm = document.getElementById('blogForm');
const blogTitleInput = document.getElementById('blogTitle');
const blogContentInput = document.getElementById('blogContent');
const contentButton = document.getElementById('button');


const uploadPost = () => {

    if (blogTitleInput.value && blogContentInput.value !== "") {
        blogPostsContainer.innerHTML += `
        <div class="card">
  <div class="card-header">
    Your Post
  </div>
  <div class="card-body">
    <h5 class="card-title">${blogTitleInput.value}</h5>
    <p class="card-text">${blogContentInput.value}</p>
  </div>
</div>`
try 
{
        const docRef = addDoc(collection(db, "posts"), {
            postTitle: blogTitleInput.value,
            post: blogContentInput.value,
        });

        console.log("Document written with ID: ", docRef.id);


    } catch (e) {
        console.error("Error adding document: ", e);
    }}

    else {
        Swal.fire({
            icon: "error",
            title: "Plzz write the password ",
        });
    }
    blogPostsContainer.style = "none";

  
}  


contentButton.addEventListener("click", uploadPost)