const root=window.document;
const headElement=root.head;
const titleElement=headElement.children[2]

function changeTitle( newTitle )  {
return titleElement.innerText=newTitle;
}



titleElement.innerText= changeTitle("Home Page")




// access body
const bodyElement=root.body;

// change background color of body
bodyElement.style.backgroundColor="#aeaeae";

const h2Element= root.createElement("h2");
h2Element.innerText="This is h2 element added by JS";

bodyElement.appendChild(h2Element);


const spanElement= root.createElement("span");
spanElement.innerText="This is span element added by JS";

h2Element.appendChild(spanElement);
const span2Element= root.createElement("span");
span2Element.innerText=" This is second span element added by JS";

h2Element.appendChild(span2Element);


console.log(bodyElement);


// console.dir(titleElement);




// console.dir(titleElement);