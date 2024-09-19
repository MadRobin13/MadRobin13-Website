function scrollFunction(b) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      b.style.display = "block";
    } else {
      b.style.display = "none";
    }
  }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

export {
    scrollFunction,
    topFunction
}