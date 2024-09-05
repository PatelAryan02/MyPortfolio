// Close the navbar when a link is clicked
document.querySelectorAll('.nav-link').forEach(function(element) {
    element.addEventListener('click', function() {
      document.querySelector('.navbar-collapse').classList.remove('show');
    });
  });