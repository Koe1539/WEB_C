'use strict';

const loginId = document.getElementById('LOGIN_ID');
const loginPw = document.getElementById('LOGIN_PW');
const loginPWCH = document.getElementById('LOGIN_PW_CH');
const loginBtn = document.getElementById('LOGIN_BTN');
const PW_CH_Text = document.getElementById('PW_CH_Text');

const UserID = loginId.value;
const UserPW = loginPw.value;

function color() {
  if (loginId.value.length > 0 && loginPw.value.length >= 5) {
    loginBtn.style.cursor = 'pointer';
    loginBtn.style.backgroundColor = '#1a1b1c';
    loginBtn.disabled = false;
  } else {
    loginBtn.style.cursor = '';
    loginBtn.style.backgroundColor = '#8b8b8b';
    loginBtn.disabled = true;
  }
}

function moveToLogin() {
  location.href = './login.html';
}

function PW_CH() {
  if (loginPw.value != loginPWCH.value) {
    PW_CH_Text.style.color = 'red';
    PW_CH_Text.innerText = '비밀번호가 일치하지 않습니다.';
  } else if (loginPw.value.length < 5 && loginPWCH.value.length < 5) {
    PW_CH_Text.style.color = 'red';
    PW_CH_Text.innerText = '비밀번호가 5자리 이하입니다.';
  } else {
    PW_CH_Text.style.color = 'green';
    PW_CH_Text.innerText = '비밀번호가 일치합니다.';
    loginBtn.addEventListener('click', moveToLogin);
  }
}

loginId.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);
loginPWCH.addEventListener('keyup', PW_CH);
