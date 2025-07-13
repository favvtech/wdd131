"use strict"
// temples.js

// Function to update footer with current year and last modified date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('last-modified').textContent = lastModified.toLocaleDateString(undefined, options);
}

// Function to toggle navigation menu on mobile
function toggleMenu() {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    
    // Toggle display
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        hamburger.innerHTML = '&#9776;'; // Hamburger icon
    } else {
        nav.style.display = 'block';
        hamburger.innerHTML = '&times;'; // 'X' icon
    }
}

// Event Listener for DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    updateFooter();

    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', toggleMenu);
});
function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}
// const mod = new Date(document.lastModified);

// // Convert to 12-hour format
// let hours = mod.getHours();
// const minutes = mod.getMinutes();
// const seconds = mod.getSeconds();
// const period = hours >= 12 ? "PM" : "AM";

// hours = hours % 12;
// hours = hours ? hours : 12; // convert 0 to 12 for midnight

// const text = "Last Modification: " +
//   mod.getDate() + "/" +
//   (mod.getMonth() + 1) + "/" +
//   mod.getFullYear() + " " +
//   hours + ":" +
//   minutes + ":" +
//   seconds + " " + period;

// document.getElementById("lastModified").textContent = text;

// // Auto-fill the current year in your copyright
// document.getElementById("currentyear").textContent = new Date().getFullYear();

// // Function to toggle navigation menu on mobile
// function toggleMenu() {
//     const nav = document.querySelector('nav');
//     const hamburger = document.querySelector('.hamburger');
    
//     // Toggle display
//     if (nav.style.display === 'block') {
//         nav.style.display = 'none';
//         hamburger.innerHTML = '&#9776;'; // Hamburger icon
//     } else {
//         nav.style.display = 'block';
//         hamburger.innerHTML = '&times;'; // 'X' icon
//     }
// }

// // Event Listener for DOM Content Loaded
// document.addEventListener('DOMContentLoaded', () => {
//     updateFooter();

//     const hamburger = document.querySelector('.hamburger');
//     hamburger.addEventListener('click', toggleMenu);
// });
// function showModal() {
//     const modal = document.getElementById('modal');
//     modal.classList.add('show');
// }

// function closeModal() {
//     const modal = document.getElementById('modal');
//     modal.classList.remove('show');
// }