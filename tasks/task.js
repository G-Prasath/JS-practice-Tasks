const inputBox = document.getElementById('input_btn');
const listContainer = document.querySelector('.todo__list');

function addTask() {
    if(inputBox.value === ''){
        inputBox.setAttribute('placeholder', 'Enter Any Task ...');
        inputBox.classList.add('placeholder-color')
    }else{
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.innerHTML = inputBox.value;
        li.appendChild(p);
        listContainer.appendChild(li);

        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
}, false)


function saveData(){
    localStorage.setItem('Data', listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem('Data')
}
showData()