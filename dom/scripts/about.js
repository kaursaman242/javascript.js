const root=document


const navbar= root.getElementById("navbar")
navbar.style.backgroundColor="red"

const anchor= Array.from(root.getElementsByClassName("nav-link"))


// anchor[0].setAttribute("href","http://127.0.0.1:5501/home.html")
for(const item of anchor){
item.classList.add("hello")
item.classList.remove("nav-link")


// console.log(item.getAttribute("href"))
}


console.log(anchor)
