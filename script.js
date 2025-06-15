document.addEventListener('DOMContentLoaded', function() {
  const guestForm = document.getElementById('guest-form');
  const guestNameInput = document.getElementById('guest-name');
  const guestCategorySelect = document.getElementById('guest-category');
  const guestList = document.getElementById('guest-list');
  
  let guests = [];
  const MAX_GUESTS = 10;

  if (localStorage.getItem('guests')) {
    guests = JSON.parse(localStorage.getItem('guests'));
    renderGuestList();
  }
