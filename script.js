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

