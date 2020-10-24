const searchInput = document.querySelector('.searchInput'),
    xbtn = document.querySelector(".xbtn"),
    magnifier = document.querySelector('.magnifier'),
    searchText = document.querySelector('searchText');


function searchActive() {
    xbtn.style.display = "block";
}

function deleteInput() {
    xbtn.style.display = "none";
    searchText.style.display = "block";

}

searchInput.addEventListener('auxclick', searchActive());
