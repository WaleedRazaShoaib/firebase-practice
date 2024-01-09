import {
    collection,
    addDoc,
    db,

} from "./firebase.js"

let editor = document.getElementById("editor")
let main = document.getElementById("main");
let quillPost = document.getElementById("quillPost");


var toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
];

var quill = new Quill("#editor", {
    theme: "snow",
    placeholder: "Write Blog...",
    modules: {
        toolbar: toolbarOptions,
    },
});




// AND IF CONDITION IS NOT RUNING ELSE CONDITION RUN
// else {
//     Swal.fire({
//         icon: "error",
//         title: "First You Add The Todo",
//         text: "Add First todo",
//     });
// }

var postcontent = "";

const Blogwork = () => {

    var postcontent = quill.root;
    main.innerHTML =
        `
        <div class="col " style = "margin-top:3%; ;">
    <div class="card h-100" style = "background-color:  #008CBA;">
             <h5 class="card-title" style = "padding-top: 10px; padding-left: 10px">YOUR POST</h5>
            <p class="card-text">${postcontent.innerHTML}</p>
        </div>
    </div>` + main.innerHTML;
    console.log(postcontent.innerText)

    if (postcontent.innerText.trim() !== "") {
        const addquill = async () => {
            try {
                const docRef = await addDoc(collection(db, "Blogs"), {
                    blog: postcontent.innerHTML
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
        Swal.fire({
            icon: "success",
            title: "Your post has been saved",
        });

        addquill()
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Create the post",
        });
    }



    quill.root.innerHTML = "";
}
quillPost.addEventListener("click", Blogwork)