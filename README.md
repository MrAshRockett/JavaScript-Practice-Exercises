# JavaScript Practice Exercises
Go through all these tasks and complete them using JS. Go through them in order as they are intended to get harder as you go on.

These exercise are designed to be ran within the browser console. You can open the console by pressing `F12` and then clicking on the `Console` tab. Majority of the tasks can be done just in the console but there is some exercise that may require you to edit the html file. Majority of the the html code has been provided for you but you may need to add some.

Most of them require some form of user input, it is up to you to decide how you want to get that input. You can use `prompt()` or `window.prompt()` or `document.getElementById()` or `document.querySelector()` or creating your own input field. It is recommended that you use `prompt()` as it is the easiest to use.

```javascript
const name = prompt('What is your name?');
// This will open a prompt window and store the input in the name variable
```

Though these exercise were created to be ran in the browser console, you can also run them in node.js by using `node` in the terminal and then pasting the code in.

## Running each task

Each task has their own js file. In the index.html file there is a script tag that links to each of the js file for each task. All of them are commented out. To run each task, uncomment the script tag for the task you want to run and then refresh the page. You can then run the code in the console.

The intention is that most of the tasks should just run when the page is loaded. However, some might require you to interact with the page. For example, you might need to click a button to run the code.

Most of the outputs should be displayed in the console.

## Tasks

1. Create an script which ask you your age to see if someone is old enough to by alcohol
2. Create a script which calculates how old someone is based on their birth year
   - Redo task #1 but this time use the age calculated in task #2
3. Create a to do list from a prompt. You only need to add items to the list, you don't need to edit or remove them. HTML is required for this one and a ul element with the id of `toDoList` has been provided for you. A button with the id of `toDoListButton` has also been provided for you. You can use this button to add items to the list.
4. Find the biggest number in an array. Create a script that prompts for a new number and which then gets added to the above array and find the biggest number again
5. Create an odd and even number checker based on user input
6. Create an script that asks you to list 10 celebrities with 1 prompt per name. You only need to add names to the list, you don't need to edit or remove them. HTML is required for this one and a ul element with the id of `celebrityNames` has been provided for you. The prompt should keep asking for names until 10 names have been entered without you having to press the button multiple times (a button isn't required so it isn't provided but you can add one if you want to)
7. Create an script that calculates the average number from an array based on user input
8. Create a script that asks for 4 people. And then asks for their ages and finds the oldest and youngest age. As well as the average age
9. Create a script which is going to act as a calculator. You should be asked for 3 prompts which will then output the end calculation. It should be able to do all 4 mathematical options
10. Create a password checker from a prompt which will check to see is a password is strong enough. Min 5 characters, max 20, 1 number
