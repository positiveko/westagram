//8시 30분까지 인풋바 완성
// 그 후 댓글 기능 활성화
// 그 후 로그인해서 페이지 연결까지 시킬 것


const search = document.querySelector('.search'),
    searchInput = document.querySelector('.searchInput'),
    xbtn = document.querySelector(".xbtn"),
    magnifier = document.querySelector('.magnifier'),
    searchText = document.querySelector('.searchText');


function searchActive() {
    magnifier.classList.toggle('active');
    searchInput.classList.toggle('active');
    xbtn.classList.toggle('active');
    searchText.classList.toggle('active');
}