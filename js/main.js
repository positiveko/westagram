const search = document.querySelector('.search'),
    searchInput = document.querySelector('.searchInput'),
    xbtn = document.querySelector(".xbtn"),
    magnifier = document.querySelector('.magnifier'),
    searchText = document.querySelector('.searchText');

const commentForm = document.querySelector('.commentForm'),
    commentInput = document.querySelector('.commentInput'),
    addBtn = document.querySelector('.addBtn'),
    commentList = document.querySelector('.comment'),
    commentArea = document.querySelector('.commentArea');

// 만약 search를 클릭하면, 돋보기 좌측 보내기, 검색 텍스트 없애기,
// 엑스버튼 뜨게하기, 인풋바 활성화하기,
// 엑스버튼 클릭하면 돋보기 센터, 인풋바 없애기, 

function searchActive() {
    xbtn.style.display = 'block';
    searchInput.classList.toggle('active');
    magnifier.classList.toggle('active');
    search.style.justifyContent = 'space-between';
}

function searchInactive() {
    xbtn.style.display = 'none';
    searchInput.classList.toggle('active');
    magnifier.classList.toggle('active');
    search.style.justifyContent = 'center';
}

// 받은 comment 추가하기
function makeCmt(cmt) {
    if (cmt.trim() === '') {
        return;
    }
    let codeblock = `<div class="commentSet">
    <span class="userId">edie_ko</span>
    <span class="userComment">${cmt}</span>
    </div>
    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="smallHeart" class="smallHeart">`
    let cmtSet = document.createElement('div');
    cmtSet.className = 'comment';
    cmtSet.innerHTML = codeblock;
    commentArea.appendChild(cmtSet);
}

// 코멘트 폼으로 comment 받기
function submitCmt(event) {
    event.preventDefault();
    const cmt = commentInput.value;
    makeCmt(cmt);
    commentInput.value='';
}


search.addEventListener('click', searchActive);
searchInput.addEventListener('blur', searchInactive);
xbtn.addEventListener('click', searchInactive);


commentForm.addEventListener('submit', submitCmt);
addBtn.addEventListener('click', submitCmt);

