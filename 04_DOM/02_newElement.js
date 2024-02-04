const parent=document.querySelector('.parent')
// console.log(parent)
// console.log(parent.children)  //It gives HTML Collection
// console.log(parent.children[0])
// console.log(parent.children[1])

for (let i = 0; i < parent.children.length; i++) {
    // console.log(parent.children[i]); //It gives hole div
    // console.log(parent.children[i].innerHTML); 
    
}


//Go from parents to child
// console.log(parent.children[0].style.color="orange")
// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)


//go from child to parents
const dayone = document.querySelector(".day")
console.log(dayone)
console.log(dayone.parentElement)   //To track parents
console.log(dayone.nextElementSibling)   //To track siblings


console.log("Nodes: ",parent.childNodes)

const div=document.createElement("div")
console.log(div)
div.className = 'main'
div.id = "myid"
div.setAttribute('title','generated title')
div.style.backgroundColor='violet'
div.innerText='Chai aur Code'

document.body.appendChild(div)











