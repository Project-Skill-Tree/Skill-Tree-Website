/**
 * @param {String} url - address for the HTML to fetch
 * @return {String} the resulting HTML string fragment
 */
async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}

function burgerMenu() {
  var burgerNav = document.getElementById("burger-nav");
  if (burgerNav) {
    if (burgerNav.style.display === "block") {
      burgerNav.style.display = "none";
    } else {
      burgerNav.style.display = "block";
    }
  }
}

// Call the function to load common HTML partials
document.addEventListener('DOMContentLoaded', loadCommonPartials);
