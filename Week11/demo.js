const rootNode = window.document;
const rootNodeChilds = rootNode.childNodes;
console.log(rootNode);
console.log(rootNodeChilds);

const rootElement = document.documentElement;
console.log(rootElement);

rootNodeChilds.forEach((node) => {
  console.log(
    `node type: ${node.nodeType}, node name: ${node.nodeName}, node value: ${node.nodeValue}`
  );
});

const rootNodeChildren = rootNode.children;
console.log(rootNodeChildren);
Array.from(rootNodeChildren).forEach((node) => {
  console.log(
    `node type: ${node.nodeType}, node name: ${node.nodeName}, node value: ${node.nodeValue}`
  );
});

const headNode = document.head;
console.log(headNode);
headNode.childNodes.forEach((node) => {
  console.log(
    `node type: ${node.nodeType}, node name: ${node.nodeName}, node value: ${node.nodeValue}`
  );
});

//common properties: node type, node name, node value
console.log(rootNode.nodeType);
console.log(rootNode.nodeName);
console.log(rootNode.nodeValue);
console.log(rootElement.nodeType);
console.log(rootElement.nodeName);
console.log(rootElement.nodeValue);

if (rootElement.nodeType === Node.ELEMENT_NODE) {
  console.log("Root element is an element node");
}
const head = document.head;
const body = document.body;
console.log(head);
console.log(body);
