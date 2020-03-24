var ul =document.getElementById('list');
var li;

var addButton =document.getElementById('add');
addButton.addEventListerner('click', addItem);

var removeButton =document.getElementById('remove');
removeButton.addEventListerner('click', removeItem);

function addItem(){
    console.log('add button clicked');
    
}
function removeItem(){
    li =ul.children
    console.log(li);
    
    
}