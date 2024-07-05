
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu()   {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu()    {
    hamburger.classList.remove("active");
    navMenu.classList.toggle("active");
}

let datePopup = document.getElementById("date-popup");
let roomPopup = document.getElementById("room-popup");
let ratesPopup = document.getElementById("rates-popup");

function dateOpenPopup()    {
    datePopup.classList.add("date-open-popup");
}
function dateClosePopup()    {
    datePopup.classList.remove("date-open-popup");
}

function roomOpenPopup()    {
    roomPopup.classList.add("room-open-popup");
}
function roomClosePopup()    {
    roomPopup.classList.remove("room-open-popup");
}

function ratesOpenPopup()    {
    ratesPopup.classList.add("rates-open-popup");
}
function ratesClosePopup()    {
    ratesPopup.classList.remove("rates-open-popup");
}


const picker = new easepick.create({
    element: "#datepicker",
    css: [
        "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"
    ],
    zIndex: 10,
    grid: 2,
    calendars: 2,
    inline: true,
    plugins: [
        "RangePlugin"
    ]
})


let coorgDiv = document.getElementById("coorg-div");
let coorgText = document.getElementById("coorg-text");

coorgDiv.addEventListener('mouseenter', () => coorgText.classList.add("hover-country-text"));
coorgDiv.addEventListener('mouseleave', () => coorgText.classList.remove("hover-country-text"));

let darjeelingDiv = document.getElementById("darjeeling-div");
let darjeelingText = document.getElementById("darjeeling-text");

darjeelingDiv.addEventListener('mouseenter', () => darjeelingText.classList.add("hover-country-text"));
darjeelingDiv.addEventListener('mouseleave', () => darjeelingText.classList.remove("hover-country-text"));


let sikkimDiv = document.getElementById("sikkim-div");
let sikkimText = document.getElementById("sikkim-text");

sikkimDiv.addEventListener('mouseenter', () => sikkimText.classList.add("hover-country-text"));
sikkimDiv.addEventListener('mouseleave', () => sikkimText.classList.remove("hover-country-text"));


let dehradunDiv = document.getElementById("dehradun-div");
let dehradunText = document.getElementById("dehradun-text");

dehradunDiv.addEventListener('mouseenter', () => dehradunText.classList.add("hover-country-text"));
dehradunDiv.addEventListener('mouseleave', () => dehradunText.classList.remove("hover-country-text"));


let discountDiv = document.getElementById("discount-div");
let discountText = document.getElementById("discount-text");

discountDiv.addEventListener('mouseenter', () => discountText.classList.add("hover-experience-text"));
discountDiv.addEventListener('mouseleave', () => discountText.classList.remove("hover-experience-text"));

let pointsDiv = document.getElementById("points-div");
let pointsText = document.getElementById("points-text");

pointsDiv.addEventListener('mouseenter', () => pointsText.classList.add("hover-experience-text"));
pointsDiv.addEventListener('mouseleave', () => pointsText.classList.remove("hover-experience-text"));

let parkingDiv = document.getElementById("parking-div");
let parkingText = document.getElementById("parking-text");

parkingDiv.addEventListener('mouseenter', () => parkingText.classList.add("hover-experience-text"));
parkingDiv.addEventListener('mouseleave', () => parkingText.classList.remove("hover-experience-text"));

let plangDiv = document.getElementById("plan-div");
let planText = document.getElementById("plan-text");

plangDiv.addEventListener('mouseenter', () => planText.classList.add("hover-experience-text"));
plangDiv.addEventListener('mouseleave', () => planText.classList.remove("hover-experience-text"));

let firstTimeDiv = document.getElementById("first-time-div");
let firstTimeText = document.getElementById("first-time-text");

firstTimeDiv.addEventListener('mouseenter', () => firstTimeText.classList.add("hover-experience-text"));
firstTimeDiv.addEventListener('mouseleave', () => firstTimeText.classList.remove("hover-experience-text"));

let membersDiv = document.getElementById("members-div");
let membersText = document.getElementById("members-text");

membersDiv.addEventListener('mouseenter', () => membersText.classList.add("hover-experience-text"));
membersDiv.addEventListener('mouseleave', () => membersText.classList.remove("hover-experience-text"));



function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
 