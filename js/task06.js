// Create an script that lists everyone in the class from a prompt, 1 prompt per name
var numberOfStudents = parseInt(prompt("How many students are there in the class"));
console.log(numberOfStudents);

var list = document.getElementById('studentsNames');

for (var i = 0; i < numberOfStudents; i++) {
    var name = prompt('what is student #'+(i+1)+' name');
    list.innerHTML += '<li>'+name+'</li>';
}
