Interactive Personal Blog Platform:
A simple, client-side blog platform built with HTML, CSS, and JavaScript that allows users to create, edit, delete, and manage blog posts directly in their browser.
<img width="1268" alt="image" src="https://github.com/user-attachments/assets/90f63d40-6cd2-44de-8ee0-4d61e6b86bc2" />


Features:
*Create new posts: add blog posts with title and content.
*View all posts: display all created posts in a clean, organized layout.
*Edit posts: click edit to modify existing posts.
*Delete posts: remove posts with confirmation.
*Data persistence: all posts are saved in localStorage and persist between browser sessions.
*Form validation: required field validation with user-friendly error messages.
*Responsive design: works on desktop and mobile devices.

How to Run:
1st Download or clone all project files: *index.html, *styles.css, *script.js
2nd Open index.html in any modern web browser (Chrome, Firefox, Safari, Edge).
3rd Start creating your blog posts.

Project Structure:
personal-blog-platform/
├── index.html      # Main HTML structure
├── styles.css      # CSS styling
├── script.js       # JavaScript functionality
└── README.md       # This file

Development Process:
Some of the challenges I faced and solutions that were create:

DOM Manipulation: Learning to dynamically create and update HTML elements
*Solution: Used createElement() and innerHTML to build post elements

Event Handling: Managing different types of user interactions
*Solution: Used event listeners and event delegation for dynamic content

Form Validation: Providing clear user feedback for invalid inputs
*Solution: Created validation functions with custom error messages

Data Persistence: Saving and loading data without a backend
*Solution: Used localStorage with JSON stringify/parse

Edit Functionality: Switching between create and edit modes
*Solution: Used a global variable to track editing state and modified form behavior

Technical Decisions:
*Functional approach: Broke down functionality into smaller, reusable functions
*Error handling: Added try-catch blocks for localStorage operations
*Security: Implemented HTML escaping to prevent XSS attacks
*User Experience: Added confirmations for destructive actions like deletion

Code Structure
Key Functions:
*loadPostsFromStorage(): Loads saved posts from localStorage
*savePostsToStorage(): Saves current posts to localStorage
*validateForm(): Validates form inputs and displays errors
*createNewPost(): Creates a new blog post
*updatePost(): Updates an existing post
*renderPosts(): Displays all posts on the page
*editPost(): Enters edit mode for a specific post
*deletePost(): Removes a post with confirmation

Data Structure:
Posts are stored as objects with the following properties:
{
    id: "unique_id_string",
    title: "Post Title",
    content: "Post content...",
    timestamp: 1234567890123
}

Features Implemented:
*Create new posts with title and content
*Form validation with error messages
*Display all posts dynamically
*Edit existing posts
*Delete posts with confirmation
*Data persistence with localStorage
*Responsive design
*Timestamp tracking
*Clean, user-friendly interface

Known Issues:
None at this time. All core functionality has been implemented and tested.
Future Enhancements: add search functionality, implement categories/tags, add rich text editing, export posts to file, add dark mode theme, and could implement post sorting options.

Browser Compatibility:
This application works in all modern browsers that support: ES6+ JavaScript features, localStorage API, CSS Flexbox, HTML5 form validation
Tested on Chrome, Firefox, Safari, and Edge.
