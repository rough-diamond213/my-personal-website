document.addEventListener('DOMContentLoaded', () => {
    const currentTime = document.getElementById('currentTime');
    const currentDay = document.getElementById('currentDay');

    function updateTimeAndDay() {
        const now = new Date();
        currentTime.textContent = now.toUTCString().split(' ')[4];
        currentDay.textContent = now.toLocaleString('en-us', { weekday: 'long' });
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});

let menuList = document.querySelector('#menu-list');
let menuBar = document.querySelector('.menu-bar');

menuList.style.maxHeight = "0px";

menuBar.addEventListener('click', (e)=>{

    if (menuList.style.maxHeight == '0px'){

     menuList.style.maxHeight = '400px';

    }else {

        menuList.style.maxHeight = '0px';

    }
});


