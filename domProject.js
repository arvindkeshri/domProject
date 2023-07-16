var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e){
    e.preventDefault();
    //console.log(1);

// Get element value
var newItem = document.getElementById('item').value;

// Create new li element
var li = document.createElement('li');

// Add class
li.className = 'list-group-item';

// Add text node with input value
li.appendChild(document.createTextNode(newItem));

//create Delete button element
var deleteBtn = document.createElement('button');

// add class
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//append text node
deleteBtn.appendChild(document.createTextNode('x'));

//append button to li
li.appendChild(deleteBtn);

// Append li to list
itemList.appendChild(li);
}


function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure')){
            var li = e.target.parentElement; //we are clicking button child but want to delete li parent
            itemList.removeChild(li);

        }
    }
}







