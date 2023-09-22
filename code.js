// commenter la sélection: ctrl+k+c


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countElement = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countElement.innerText = count
}

function save () {
    let NewSave = "" + count + " - "
    saveEl.textContent += NewSave
    count = 0
    countElement.innerText = count
}

