//using take 2//
//global variables to manage state//
let posts=[];
let currentEditingId=null;

//DOM elements//
const postForm = document.getElementById("post-form");
const titleInput = document.getElementById("post-title");
const contentInput = document.getElementById("post-content");
const titleerror = document.getElementById("content-error");
const submitBtn = document.getElementById("submit-btn");
const cancelEditBtn = document.getElementById("cancel-edit");
const postsContainer = document.getElementById("posts-container");

//initialize the application when the page loads//
document.addEventListener("DOMContentLoaded", function() {
  loadPostsFromStorage();
  renderPosts();
//add event listeners//
postForm.addEventListener("submit", handleFormSumit);
cancelEditBtn.addEventListener("click", cancelEdit);
  
});

//load posts from localStorage//
function loadPostsFromStorage() {
  const storedPosts = localStorage.getItem("blogPosts");
  if (storedPosts) {
    try {
      posts = JSON.parse(storedPosts);
    } catch (error) {
      console.error("Error parsing posts from localStorage:",error);
      posts = [];
    }
  }
}

//save posts to localStorage//
function savePostsToStorage() {
  try  {
    localStorage.setItem("blogPosts", JSON.stringify(posts));
  } catch (error) {
    console.error("Error saving posts to localStorage:", error);
  }
}

//generate a unique ID for posts//
function generateId() {
  return Date.now().toString() + Math.random().toString(36).substring(2);
}

//format timestamp for display//
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString() + "at" + date.toLocaleTimeString();
}

//clear error messages//
function clearErrors(){
  titleError.textContent = "";
  contentError.textContent = "";
}

//Validate form inputs//
function validateForm() {
  clearErrors();
  let isValid: true;
  
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  
  if(!title) {
    titleError.textContent = "Post title is required";
    isValid = false;
  }

  If (!content) {
    contentError.textContent = "Post content is required";
    isValid = false;
  }

  return isValid;

}

//form submission handling (create and edit)//
function handleFormSumit(event){
  event.preventDefault();

  if(!validateForm()) {
    return;
}
const title = titleInput.value.trim();
const content = contentInputInput.value.trim();

if (currentEditingId) {
  //update existing post//
  updatePost(currentEditingId, title, content);
} else {
  //create new post//
  createNewPost(title, content);
}

//clear form and reset state//
clearForm();
renderPosts();
}

//create new post//
function createNewPost(title, content) {
  const newPost = {
    id:generateId(),
    title:title,
    content:content,
    timestamp:Date.now(),
  };

  posts.unshift(newPost); //add to the beginning of the array//
  savePostsToStorage();
}

//update existing post//
function updatePost(id, title, content) {
  const postIndex = posts.findIndex(post => post.id === id);
  if (postIndex !== -1) {
    posts[postIndex].title = title;
    posts[postIndex].content = content;
    posts[postIndex].timestamp = Date.now(); //update timestamp//
    savePostsToStorage();
  }

  //reset editing state//
  currentEditingId = null;
  submitBtn.textContent = "Add Post";
  cancelEditBtn.style.display = "none";
}

//clear the form//
function clearForm() {
  titleInput.value = "";
  contentInput.value = "";
  clearErrors();
}

