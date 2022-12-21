'use strict';

const loginId = document.getElementById('LOGIN_ID');
const loginPw = document.getElementById('LOGIN_PW');
const loginBtn = document.getElementById('LOGIN_BTN');

function color() {
  if (loginId.value.length > 0 && loginPw.value.length >= 5) {
    loginBtn.style.backgroundColor = '#1a1b1c';
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = '#8b8b8b';
    loginBtn.disabled = true;
  }
}

function moveToMain() {
  location.href = './index.html';
}

loginId.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);
loginBtn.addEventListener('click', moveToMain);
