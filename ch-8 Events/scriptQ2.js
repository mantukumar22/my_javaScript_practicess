/* 2} Create a website is capable of storing bookmarks of your favraite websites using href.
*/

function addBookmark(){
  const name = document.getElementById("siteName").value
  const url = document.getElementById("siteUrl").value

  if (!name || !url) {
        alert("Please enter both name and URL");
        return;
      }

  const list = document.getElementById("bookMarklist");
  const li = document.createElement("li");
  li.innerHTML = `<a href="${url}" target="_blank">${name}</a>`;
  list.appendChild(li);

  // Clear the input fields after adding the bookmark
  document.getElementById("siteName").value = "";
  document.getElementById("siteUrl").value = "";

}

/* 3} Repeat the above question using event listeners.
*/
