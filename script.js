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
  guestForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = guestNameInput.value.trim();
    const category = guestCategorySelect.value;
    
    if (!name) return;
    
    if (guests.length >= MAX_GUESTS) {
      alert(`Sorry, the guest list is limited to ${MAX_GUESTS} people.`);
      return;
    }
    const newGuest = {
      id: Date.now(),
      name,
      category,
      attending: true,
      timestamp: new Date().toLocaleString()
    };

    guests.push(newGuest);
    saveGuests();
    renderGuestList();
    
    guestNameInput.value = '';
    guestNameInput.focus();
  });
