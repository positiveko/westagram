// 1. id, pw 에 각각 한 글자 이상 써야 
//버튼이 활성화 되도록 해주세요.
// - 원래 연한 파란색이었다가 -> 활성화 되면 
//파란색으로!

const idInput = document.querySelector('.id'),
    pwInput = document.querySelector('.pw'),
    loginBtn = document.querySelector('.loginBtn');

//if문으로 id와 input에 value가 있을 때
// loginBtn 활성화 disabled
function loginBtnOn() {
if (idInput.value !=='' && pwInput.value !=='') {
    loginBtn.disabled = 'false';
    loginBtn.style.backgroundColor='#469edb';
   } else {
    loginBtn.disabled = 'true';
    loginBtn.style.backgroundColor='#bee1fd'}
   }



function init () {
    loginBtnOn();
    idInput.addEventListener('keyup', loginBtnOn);
    pwInput.addEventListener('keyup', loginBtnOn);
}

init();