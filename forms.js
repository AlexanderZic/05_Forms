// TODO when I submit my form, add the pizza from the user into the table body. This will be in the format of:
//? | 2 | Matt | Medium | Pepperoni |

// grab some information from my webpage
let form = document.querySelector('form');//<form>
let table = document.querySelector('tbody'); //<tbody>

//keep track of whatever order number I am on, starting from 1 when the page loads
let currentOrder = 1; // will increment this by 1 each time we add a new order

function displayOrder(event){
  //by defualt, the submet event on a form refreshes the page
  event.preventDefualt(); // this method stops the default behavior of the event
  console.log(event);
  console.log(event.target); //this is the element bring targeted by the event which is happening (form element)
  console.log(form);
}

// listen for when the form is submitted
form.addEventListener('submit', displayOrder);