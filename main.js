var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]"); // Поиск по атрибуту
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var user = document.querySelector(".user-block");


link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show"); // Без точки! Мы оперируем только названием классов
    user.classList.add("modal-content");

    if  (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    user.classList.remove("modal-content");
});

form.addEventListener("submit", function (event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

//События keydown/keyup происходят при нажатии/отпускании клавиши
//   и позволяют получить её скан-код в свойстве keyCode
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) { //27 кейкод клавиши Esc
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
            user.classList.remove("modal-content");
        }
    }
});