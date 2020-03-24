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
    for (let index = 0; index < array.length; index++) {
        while(li[index] && li[index].childrean[0].checked){
        ul.removeChild(li[index])
    } 
  }
}
