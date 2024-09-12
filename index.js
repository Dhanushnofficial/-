function toggle_Function() {
    let element = document.body;
    element.classList.toggle("dark");
}

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_mennu');

toggleBtn.onclick = function(event) {
    event.stopPropagation(); // Prevent click event from bubbling to the document
    if (dropdownMenu) {
        dropdownMenu.classList.toggle('open');
        const isOpen = dropdownMenu.classList.contains('open');
        toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
}

// Close the menu when clicking outside or on a menu item
document.addEventListener('click', function(event) {
    if (dropdownMenu && dropdownMenu.classList.contains('open')) {
        const isClickInside = dropdownMenu.contains(event.target) || toggleBtn.contains(event.target);
        if (!isClickInside) {
            dropdownMenu.classList.remove('open');
            toggleBtnIcon.classList = 'fa-solid fa-bars';
        }
    }
});

// Close the menu when clicking on a menu item
const menuItems = dropdownMenu.querySelectorAll('li');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        dropdownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    });
});
