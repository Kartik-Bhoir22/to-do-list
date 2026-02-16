const input_wins = document.getElementById('win-input');
const addbtn = document.getElementById('add-wins')
const listContainer = document.querySelector('.win_list');

let storage_box = JSON.parse(localStorage.getItem('lists')) || [];

storage_box.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    listContainer.appendChild(li);
});

addbtn.addEventListener('click' , () => {
   const inputs = input_wins.value.trim();

   if(inputs === '') return;

   storage_box.push(inputs);

   localStorage.setItem('lists' , JSON.stringify(storage_box));

   const li = document.createElement('li');
   li.textContent = inputs;
   listContainer.appendChild(li);
   
   input_wins.value = '';
});