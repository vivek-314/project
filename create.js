function toggleMenu() {
    const menu = document.getElementById('navbarSupportedContent');
    menu.classList.toggle('open');
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          }
        
        
      }
    }
  }


const blogForm = document.getElementById('blogForm');
const blogContainer = document.getElementById('blogContainer');

// Handle form submission
blogForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get title and content from form inputs
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create a new blog post
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');

    // Add title and content to the blog post
    blogPost.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;

    // Append the blog post to the blog container
    blogContainer.appendChild(blogPost);

    // Clear the form inputs
    blogForm.reset();
});


