//1. create a form with an id of your choice.
//2. create 2 text inputs inside that form. add eventlistener to get the input of each.
// one input should be for the title, one for the body. Create two variables to store the data of each,
// for example, postTitle and postText
//3. use the inputs from step 2 to create an object of this form:
// {body:postText, title: postTitle, userId:11}
//4. create eventlistener for form - submit event - and POST that object from step 3 to the api. Log out the result
//5. BONUS: create a function to display newly-created post on the webpage.

const titleInput = document.getElementById("title-text");
const bodyInput = document.getElementById("body-text");
const postForm = document.getElementById("create-post");
const postContainer= document.getElementById("post-container");
const selectedPost= document.getElementById("selected-post");
const newPostContainer= document.getElementById("new-post-container");

let titleText, bodyText;

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();
        return result;
    } catch (err) {
        console.log(err);
    }
};

function renderTitles(posts) {
    posts.forEach((post) => {
        const onePost = document.createElement("p");
        onePost.innerText = post.title;
        onePost.addEventListener("click",function(){
            selectedPost.innerText = post.body;
        }
        )
        postContainer.appendChild(onePost);
    });
}

const posts = await getPosts();
console.log(posts);
renderTitles(posts);



async function addPost(post) {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method:"POST",
            body:JSON.stringify(post),
            headers: {"Content-type": "application/json; charset=UTF-8" },
        });
        const json = await res.json();
        console.log(json);
        return json;
} catch (err) {
    console.log(err);
}
}

titleInput.addEventListener("input", function(e) {
    titleText = e.target.value;
    console.log(titleText);
});

bodyInput.addEventListener("input", function(e) {
    bodyText = e.target.value;
    console.log(bodyText);
});

postForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    const newPost = { body: bodyText, title: titleText, userId: 11};
    const result = await addPost(newPost);
    console.log(result);
    newPostContainer.innerHTML = JSON.stringify(result);
});




