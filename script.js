const input_wins = document.getElementById('win-input');
const addbtn = document.getElementById('add-wins')
const listContainer = document.querySelector('.win_list');
/** change theme */
const changetheme = document.getElementById('theme-changer').addEventListener('click', () =>{

    let theme = document.body;
    theme.classList.toggle('dark-mode');
})
/** restore on list on refresh */
let storage_box = JSON.parse(localStorage.getItem('lists')) || [];

storage_box.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    listContainer.appendChild(li);
});

/** input lists to localstorage */
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