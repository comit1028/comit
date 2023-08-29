// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("btn");

// Get the <span> element that closes the modal
var closeModal = document.getElementsByClassName("close-modal");

const overlay = document.querySelector(".overlay");

// When the user clicks the button, open the modal
btn[0].onclick = function () {
    modal[0].style.display = "block";
    overlay.classList.remove("modal-hidden");
};

btn[1].onclick = function () {
    modal[1].style.display = "block";
    overlay.classList.remove("modal-hidden");
};

btn[2].onclick = function () {
    modal[2].style.display = "block";
    overlay.classList.remove("modal-hidden");
};

btn[3].onclick = function () {
    modal[3].style.display = "block";
    overlay.classList.remove("modal-hidden");
};
btn[4].onclick = function () {
    modal[4].style.display = "block";
    overlay.classList.remove("modal-hidden");
};

btn[5].onclick = function () {
    modal[5].style.display = "block";
    overlay.classList.remove("modal-hidden");
};

// When the user clicks on <closeModal> (x), close the modal
closeModal[0].onclick = function () {
    modal[0].style.display = "none";
    overlay.classList.add("modal-hidden");
};

closeModal[1].onclick = function () {
    modal[1].style.display = "none";
    overlay.classList.add("modal-hidden");
};

closeModal[2].onclick = function () {
    modal[2].style.display = "none";
    overlay.classList.add("modal-hidden");
};

closeModal[3].onclick = function () {
    modal[3].style.display = "none";
    overlay.classList.add("modal-hidden");
};
closeModal[4].onclick = function () {
    modal[4].style.display = "none";
    overlay.classList.add("modal-hidden");
};

closeModal[5].onclick = function () {
    modal[5].style.display = "none";
    overlay.classList.add("modal-hidden");
};

overlay.onclick = function () {
    modal[0].style.display = "none";
    modal[1].style.display = "none";
    modal[2].style.display = "none";
    modal[3].style.display = "none";
    modal[4].style.display = "none";
    modal[5].style.display = "none";
    overlay.classList.add("modal-hidden");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
