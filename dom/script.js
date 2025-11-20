

const rootDocument= document
// console.dir(rootDocument)
const body= rootDocument.body


const html=rootDocument.children[0]
const head =html.firstChild

const title=head.children[2]
title.textContent="New Title"

// const heade=rootDocument.rootDocument.children[0].children[0]

// add button
const heading=body.children[0]


const btn=document.createElement("a")
const btn1=document.createElement("a")
btn.textContent="Click Me"
btn1.textContent="Click Me1"




body.append(btn)
heading.append(btn1)



console.log(document)

// console.dir(btn)







