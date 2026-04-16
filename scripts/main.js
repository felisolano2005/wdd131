const calcBtn = document.getElementById('calcBtn');
const result = document.getElementById('result');

if (calcBtn) {
  calcBtn.addEventListener('click', () => {
    const tuition = Number(document.getElementById('tuition').value);
    const housing = Number(document.getElementById('housing').value);

    const total = tuition + housing;
    result.textContent = `Total cost: $${total}`;
  });
}

const addBtn = document.getElementById('addItem');
const list = document.getElementById('list');

if (addBtn) {
  let items = JSON.parse(localStorage.getItem('items')) || [];

  const render = () => {
    list.innerHTML = '';
    items.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = item;
      li.addEventListener('click', () => {
        items.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(items));
        render();
      });
      list.appendChild(li);
    });
  };

  render();

  addBtn.addEventListener('click', () => {
    const value = document.getElementById('itemInput').value;
    if (value) {
      items.push(value);
      localStorage.setItem('items', JSON.stringify(items));
      render();
    }
  });
}

const form = document.getElementById('appForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('formMsg').textContent = `Form submitted successfully!`;
  });
}