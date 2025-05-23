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