/* ANIMATION ON SCROLL */

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }

        else {
            sec.classList.remove('show-animate');
        }
    })
}

/* NAVBAR */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. 
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active")
    }))

/* SLIDER */

const wrapper = document.querySelector('.wrapper')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'

  console.log(startX)
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }

  this.scrollLeft += startX - e.clientX
})





/* CONTACT FORM */

function sendEmail(){
    sendEmail.send({
        Host : "smtp.yourisp.com",
        Username : "d.niemyska@gmail.com",
        Password : "password",
        To : "dniemy12@gmail.com",
        From : document.getElementById("email").value,
        Subject : "Nowa wiadomość z formularza kontaktowego",
        Body : "Name: " + document.getElementById("name").value 
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Numer telefonu: " + document.getElementById("phone").value
            + "<br> Wiadomość: " + document.getElementById("message").value
    }).then(
            message => alert("Wiadomość została wysłana.")
        );
    }


    