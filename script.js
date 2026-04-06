const expense_name = document.getElementById('expense-name');
const expense_amount = document.getElementById('expense-amount');
const btn = document.getElementById('add-btn');


const expense_list = document.getElementById('expense-list');

const totalamt = document.getElementById('Total');

let amt = Number();

btn.addEventListener('click' , () => {
   if (expense_name.value&& expense_amount.value !== ''){
     let li = document.createElement('li');
     

     li.textContent = `${expense_name.value} - ${expense_amount.value}`;
     console.log(li)

     expense_list.append(li);

     

     amt += Number(expense_amount.value); 

     expense_name.value = '';
     expense_amount.value = '';

     totalamt.textContent= amt;
   }
   else {
    alert('enter your input / amount');
   }
})
