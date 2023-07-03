// Disable right-click
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable copying
document.addEventListener('keydown', function (e) {
  // Check if Ctrl/Cmd key is pressed
  if ((e.ctrlKey || e.metaKey) && e.keyCode === 67) {
    e.preventDefault();
  }
});
// Example JavaScript code
// You can modify and extend this based on your requirements

// Get all the paragraphs in the article
const paragraphs = document.querySelectorAll('article p');

// Add a click event listener to each paragraph
paragraphs.forEach(paragraph => {
  paragraph.addEventListener('click', () => {
    // Toggle the class 'highlight' to the clicked paragraph
    paragraph.classList.toggle('highlight');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('body'); // Ganti dengan elemen atau kelas yang ingin Anda lindungi

  for (var i = 0; i < elements.length; i++) {
      elements[i].style.webkitUserSelect = 'none'; // Untuk browser berbasis WebKit
      elements[i].style.userSelect = 'none'; // Standar CSS
  }
});

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});