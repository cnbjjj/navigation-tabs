'use strict';

function switchTab(nav, index) {
    const currentTab = document.querySelector('nav > .selected');
    if (nav === currentTab)
        return;
    currentTab.classList.toggle('selected');
    nav.classList.toggle('selected');
    const allTabContent = document.querySelectorAll('section > div');
    allTabContent.forEach((content, contentIndex) => {
        if (content.classList.contains('selected') || contentIndex === index) {
            content.classList.toggle('selected');
        }
    });
}

const navs = document.querySelectorAll("nav > div");
navs.forEach((nav, index) => nav.addEventListener('click', () => switchTab(nav, index)));

