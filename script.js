document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    const listStyleSelect = document.getElementById('list-style-select');
    const itemList = document.getElementById('item-list');
    const preferencesForm = document.getElementById('preferences-form');
  
    // Initialize the list with 5 items
    const items = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];
    items.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.textContent = item;
      itemList.appendChild(li);
    });
  
    // Retrieve preferences from localStorage
    const savedPreferences = JSON.parse(localStorage.getItem('preferences'));
    if (savedPreferences) {
      document.body.classList.add(savedPreferences.theme);
      themeSelect.value = savedPreferences.theme;
      listStyleSelect.value = savedPreferences.listStyle;
      itemList.classList.add(savedPreferences.listStyle);
    }
  
    // Save preferences when the form is submitted
    preferencesForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const preferences = {
        theme: themeSelect.value,
        listStyle: listStyleSelect.value,
      };
  
      // Save preferences to localStorage
      localStorage.setItem('preferences', JSON.stringify(preferences));
  
      // Apply preferences
      document.body.className = ''; // Clear previous theme classes
      document.body.classList.add(preferences.theme);
      itemList.className = 'list-group'; // Reset list classes
      itemList.classList.add(preferences.listStyle);
    });
  });
  