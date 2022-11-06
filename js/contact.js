const toggleBtn = document.querySelector('.topnav_ct_btn');
const menu = document.querySelector('.topnav_ct_list');

toggleBtn.addEventListener('click', () => {

    menu.classList.toggle('active');
});