// 그 후 댓글 기능 활성화 (로컬에 저장해서 새로고침해도 나오도록)
// 그 후 로그인해서 페이지 연결까지 시킬 것(패스워드 틀릴 경우 체크)

//# 메인 페이지
// 1. 댓글 input 창에 엔터치거나 "게시" 누르면 댓글 추가되도록
// - createElement로 요소 생성해서, input에 입력한 값이 
// 추가 되어야합니다.

const search = document.querySelector('.search'),
    searchInput = document.querySelector('.searchInput'),
    xbtn = document.querySelector(".xbtn"),
    magnifier = document.querySelector('.magnifier'),
    searchText = document.querySelector('.searchText');

// 만약 search를 클릭하면, 돋보기 좌측 보내기, 검색 텍스트 없애기,
// 엑스버튼 뜨게하기, 인풋바 활성화하기,
// 엑스버튼 클릭하면 돋보기 센터, 인풋바 없애기, 

function searchActive() {
    searchText.style.display = 'none';
    xbtn.style.display = 'block';
    searchInput.display = 'none';
    magnifier.classList.toggle('active');
    this.classList.add('inactive');
};

search.addEventListener('click', searchActive);