const rootElement = document.documentElement;
const firstChild = rootElement.firstChild; //First child of the root element
console.log(firstChild); // Second Comment

const firstElementChild = rootElement.firstElementChild; //First element child of the root element
console.log(firstElementChild); //<head>...</head>
const lastChild = rootElement.lastChild; //Last child of the root element

console.log(lastChild); // Second Comment
const lastElementChild = rootElement.lastElementChild; //Last element child of the root element
console.log(lastElementChild); //<body>...</body>

const previousLastChild = lastChild.previousSibling; //Previous sibling of the last child
console.log(previousLastChild); //#text
const previousLastElementChild = lastElementChild.previousElementSibling; //Previous element sibling of the last child
console.log(previousLastElementChild); //<head>...</head>

const bodyChildNodes = document.body.childNodes; //Child nodes of the body element
console.log(bodyChildNodes.length); //8
const bodyChildren = document.body.children; //Children of the body element
console.log(bodyChildren.length); //3

const body = document.body;
console.log(body.parentElement); //HTML element
console.log(body.parentNode); //HTML element

const divElement = document.getElementById("dom-01");
const divAttrs = divElement.attributes; //get all attributes of current node
console.log(divAttrs.length); //2
for (let i = 0; i < divAttrs.length; i++) {
  console.log(divAttrs[i].name); //id , style
  console.log(divAttrs[i].value); // dom-01, color:red
  console.log(divAttrs[i]); //id='dom-01', style='color:red'
}
//know your attribute name and get its value
console.log(divElement.getAttribute("id")); //dom-01
console.log(divElement.getAttribute("style")); //color:red
//call attribute's parent
console.log(divElement.attributes[0].parentElement); //null
console.log(divElement.attributes[0].parentNode); //null
console.log(divElement.attributes[0].ownerElement); //<div>...</div>

const pNewNode = document.createElement("p");
const bodyElement = document.body;
bodyElement.appendChild(pNewNode);
