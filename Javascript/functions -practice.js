// dom manipulation - Document (html file that you load up in the browser)
//  Object( this is created as an object type by the browser) 
// Model(tree representation of the html file)
// select an element and save the refrence to a variable
// const a= document.querySelector("a");
// change the text content of the element
// a.textContent = "Landing page or Entrance";

// create a new node- you need a parent to add the node to
// const section = document.querySelector("section");

// const newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new paragraph created by javascript";
// section.appendChild(newParagraph);

// removal of a nodes
// section.removeChild(newParagraph);
// newParagraph.remove();

// manipulating of styles
// a.style.backgroundColor = "grey";
// a.style.padding = "10px";

// Events- things happening within the application you have set up
//  to react to an event, you need to set up an event listener

// const btn = document.querySelector("button"); 
// function callMe(e) {
//     document.body.style.backgroundColor = "blue";
//     console.log(e);
// }
// btn.addEventListener("click", callMe);

// btn.removeEventListener("click", callMe);

// prevent default behavior of an element
// a.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("You clicked on the link but the default behavior is prevented");

// });

// arrays in javascript ia a collection of list of items that 
// are stored in a single variable

// const sample=["check", "trust", "headache", "peace", "joy"];
// accessing an item in the array
// console.log(sample.length);

// array is an indexed collection with its first item at index 0 and the last item at index length-1
// console.log(sample[4]);

// console.log(sample.indexOf("headache"));

// end of array manipulation
// sample.push("God is good");
// console.log(sample);

// start of array manipulation
// sample.unshift("God is great"); 
// console.log(sample);

// removing an item from the end of the array
// sample.pop();


// removing an item from the beginning of the array

// sample.shift();
// console.log(sample);


// step 1

const btn = document.querySelector("button");
const input = document.querySelector("input")
const list = document.querySelector("ul")
const p = document.querySelector(".summary")

const shoppingList = [];

// step 2
function addItemToList(e) {


// step 3
e.preventDefault();

// step4
const inputValue= input.value.trim();
// if empty- stop working
if(!inputValue) return;
shoppingList.push(inputValue);

// step5
input.value = "";

// step6
const li = document.createElement("li");
const span = document.createElement("span");
const button = document.createElement("button")

// step7
span.textContent = inputValue;
button.textContent = 'delete';
li.append(span, button);

// step8
list.append(li);

// step9
if(shoppingList.length === 0) {
    p.textContent = "shopping list is empty";
    }
    else{
    
        p.textContent= `You have ${shoppingList.length} items
        in list`
    }

    // step10
    button.addEventListener("click", function() {
        const index = shoppingList.indexOf(span.textContent);
        shoppingList.splice(index, 1);
        li.remove();
        if(shoppingList.length === 0) {
            p.textContent = "Shopping list is empty";
        }
        else{
            p.textContent = `You have ${shoppingList.length} items 
            in list`
        }
    })
    // step11
    input.focus();
    
}




btn.addEventListener("click", addItemToList )