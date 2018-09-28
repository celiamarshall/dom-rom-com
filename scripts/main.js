let heading = document.querySelector('h1')
// console.log(heading)

// const tableRows = document.querySelectorAll('tr')
// console.log(tableRows)

heading.textContent = "DOM Romantic Comedies"

//document.querySelector('h1').textContent = "DOM Romantic Comedies"

// const rows1 = document.querySelectorAll('tbody tr')
// for (row of rows1){
//     console.log(row.children[1].textContent)
// }

// const rows2 = document.querySelectorAll('tr > td:nth-child(2)')
// for (row of rows2){
//     console.log(row.textContent)
// }

// const column4 = document.querySelectorAll('tr > td:nth-child(4)')
// for (row of column4){
//     numOfActors = (row.textContent.match(/,/g) || []).length + 1

//     const newStr = `${row.textContent} (${numOfActors})`
//     row.textContent = newStr
// }

// const listOfActors = document.querySelectorAll('tr > td:nth-child(4)')
// console.log(listOfActors)
// for (const actors of listOfActors){
//     const numberOfActors = actors.textContent.split(',').length

//     const newString = `${actors.textContent} (${numberOfActors})`
//     actors.textContent = newString
// }

const jumbotron = document.querySelector('.jumbotron')
jumbotron.classList.remove('bg-dark')
jumbotron.classList.add('bg-warning')
