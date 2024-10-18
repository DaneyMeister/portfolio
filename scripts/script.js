/* 
    Student Name: Allein Dane G. Maninang
    File Name: script.js
    Date: September 28, 2024
*/

// Humburger Menu Function
let isSidebarVisible = false;

function toggleSidebar() {
    if (isSidebarVisible) {
        hideSidebar();
    } else {
        showSidebar();
    }
    isSidebarVisible = !isSidebarVisible;
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const menu = document.querySelector('.menu-icon img');

    sidebar.style.display = 'flex';
    menu.src = "images/icons/close.png";
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const menu = document.querySelector('.menu-icon img');

    sidebar.style.display = 'none';
    menu.src = "images/icons/burger-bar.png";
}
