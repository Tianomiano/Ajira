// JavaScript to handle the modal
document.getElementById("registration-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the default anchor behavior
  
    var modal = document.getElementById("registration-modal");
    modal.style.display = "block";
  });
  
  document.addEventListener("click", function(event) {
    var modal = document.getElementById("registration-modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  