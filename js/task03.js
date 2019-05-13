// Create a to do list from a prompt

function addToList(){
    var item = prompt("Add an item to the list");
    document.getElementById('toDoList').innerHTML += '<li>'+item+'</li>';
};
