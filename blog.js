import {
    collection,
    addDoc,
    db,
    onSnapshot,
    getDocs,
    deleteDoc,
} from "./firebase.js"

// References to HTML elements
const blogPostsContainer = document.getElementById('blogPosts');
const blogForm = document.getElementById('blogForm');
const blogTitleInput = document.getElementById('blogTitle');
const blogContentInput = document.getElementById('blogContent');
const contentButton = document.getElementById('button');

const getdata = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
            blogPostsContainer.innerHTML += `
                <div class="card" style="margin-top:20px;">
                    <div class="card-header">
                        Your Post
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${doc.data().postTitle}</h5>
                        <p class="card-text">${doc.data().post}</p>
                        <button type="button" class="btn btn-outline-primary" >delete</button>
                        <button class="editbtn btn-outline-primary">edit</button>
                    </div>
                </div>
                `;

            console.log(`${doc.id} => ${doc.data().post}`);
        });
    } catch (error) {
        console.error("Error getting documents: ", error);
    }
};

getdata()

const uploadPost = () => {

    if (blogTitleInput.value && blogContentInput.value !== "") {
        blogPostsContainer.style = "none";
        try {
            const docRef = addDoc(collection(db, "posts"), {
                postTitle: blogTitleInput.value,
                post: blogContentInput.value,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Plzz write the title & post content ",
        });
    }


}

contentButton.addEventListener("click", uploadPost)



