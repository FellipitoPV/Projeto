function changeHeaderText(){var e=document.querySelector("header h1");e&&(e.textContent="Texto Atualizado!")}function addListItem(){var e,t=document.getElementById("dynamic-list");t&&((e=document.createElement("li")).textContent="Novo item "+(t.children.length+1),t.appendChild(e))}document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("change-text-btn"),e=(e&&e.addEventListener("click",changeHeaderText),document.getElementById("add-item-btn"));e&&e.addEventListener("click",addListItem)});