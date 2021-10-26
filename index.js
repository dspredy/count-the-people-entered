//doucument.getElementById("count-el").innerText=5


// intialize the count as 0
// listen for clicks on the increment button
//increase the count variable when the button is clicked
// change the count-el in the html to reflect the new count


//camelCase
let countEl=document.getElementById("count-el") //pass in arguments

let saveEl=document.getElementById("save-el")

let count = 0

function increment()
{
	  count = count + 1
	  countEl.innerText=count
	  
}


// create a function , save(), which logs out the count when it's called 


function save()
{
	dashseparator=" - "
	show=count+dashseparator
	saveEl.textContent += show //u can use innerText
	countEl.textContent=0
	count=0
}
console.log("let count the number of people came to school")





