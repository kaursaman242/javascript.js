const rootDocument=document
const html=rootDocument.children[0]
const head=html.children[0]
const title=head.children[2]
title.textContent="Home"
const body=html.children[1]

const navElement= rootDocument.createElement("nav")
navElement.style.height="100px"
navElement.style.width="100%"
navElement.style.backgroundColor="teal"

body.append(navElement)

const ulElement= rootDocument.createElement("ul")
ulElement.style.display="flex"  
ulElement.style.listStyle="none"
ulElement.style.justifyContent="space-around"
ulElement.style.alignItems="center"
ulElement.style.backgroundColor="yellow"
//add list item
const liElement1= rootDocument.createElement("li")
const liElement2= rootDocument.createElement("li")
const liElement3= rootDocument.createElement("li")


liElement1.textContent="home"
liElement2.textContent="about"
liElement3.textContent="contact"

navElement.append(ulElement)
ulElement.append(liElement1)
ulElement.append(liElement2)
ulElement.append(liElement3)




