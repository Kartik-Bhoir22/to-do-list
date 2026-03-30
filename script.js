const input = document.getElementById('input');
const btn = document.querySelector('.btn');
const taskbox = document.querySelector('.task-list');

let edittarget = null;

function createTask() {
    if (input.value !== ''){

        let li = document.createElement('li');

        if(edittarget) {
            edittarget.firstChild.textContent = input.value;
            edittarget = null ;
            btn.textContent = 'add';
            input.value = '';
            return
        }

        
        
        let p = document.createElement('p');
        p.textContent = input.value;
        
        let delbtn = document.createElement('button');
        delbtn.textContent = 'delete';

        

        delbtn.addEventListener('click' , function () {
            p.remove();
            li.remove();
        });

        let editbtn = document.createElement('button');
        editbtn.textContent = 'edit';

        editbtn.addEventListener('click', () => {
            input.value = p.firstChild.textContent;
            edittarget = p;
            btn.textContent = 'save';
            input.focus();
            
        });
        p.appendChild(editbtn);
        p.appendChild(delbtn);

        li.appendChild(p);

        taskbox.appendChild(li);

        input.value = '';
    

        
    }
    else{
        alert('enter a input')
    }
}

