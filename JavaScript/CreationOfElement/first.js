// //Creating an element 
// function add(content){
//     let ele = document.createElement('li');
//     ele.innerHTML = content;

//     const parent = document.getElementById("root");
//     //parent.appendChild(ele);

//     //This can add multiple elements to end
//     parent.append(ele, "added");
// }

// add("SQL");
// add("React")

// //Creating a text node(without HTML tag)
// const text = document.createTextNode("Hello I am text added");
// const parent2 = document.getElementById("root");
// parent2.append(text);

// //Creating a attribute Node (id , class are attributes of ul)

// //Accessing first child
// const ele2 = document.createAttribute("id");
// ele2.value = "first";

// const li1 = document.querySelector('li');
// li1.setAttributeNode(ele2);

// //Accessing second children
// console.log(parent2.children)
// console.log(parent2.children[1]);

// const ele3 = document.createAttribute("id");
// ele3.value = "second"
// parent2.children[1].setAttributeNode(ele3);


// //Accessing attributes
// const ele5 = document.getElementById("root");
// console.log(ele5.getAttribute("class"));

// ele5.setAttribute("class", "List");
// console.log(ele5.getAttribute("class"));

// ele5.removeAttribute("class");
// console.log(ele5.getAttribute("class"));


//ADD nodes to the DOM

const parent  = document.getElementById("root");

// const ele = document.createElement('li');
// ele.innerHTML = "React";

// //To add at first
// parent.prepend(ele);
// //To add at last
// //parent.append(ele);

// const child = parent.children[3];
// //Before a particular(child2 - here) node
// parent.insertBefore(ele, child);

// //Replace a particular child
// //parent.replaceChild(ele, child);

// // parent.innerHTML = "React"

// //Adds to last (similarly as strings)
// parent.innerHTML += "<li>React</li>";

const ele2 = document.createElement('div');
ele2.innerHTML = "Hello Hi";

// For insertAdjacentHTML() and insertAdjacentElement()
/* beforebegin: Before the element itself
    afterbegin: Inside the element, before its first child
    beforeend : Inside the element, after its last child
    afterend  : After the element itself
*/

// parent.insertAdjacentElement("beforebegin", ele2);
//parent.insertAdjacentElement("afterbegin", ele2);
//parent.insertAdjacentElement("beforeend", ele2);
//parent.insertAdjacentElement("afterend", ele2);

//parent.insertAdjacentHTML("afterbegin", ele2);

//Remove child - deleting node or modify

document.querySelector('li').remove();

// removeChild(node) - to remove a particular child from parent
const child = parent.children[2];
parent.removeChild(child);
