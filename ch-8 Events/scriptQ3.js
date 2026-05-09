/* 3} Repeat the above question using event listeners.
*/

document.getElementById("addBtn").addEventListener("click", 
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

});

