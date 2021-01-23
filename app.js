//Selectors
const addBtn = document.getElementById("add-contact-button")

const tableName = document.getElementById('name-input')
const tableEmail = document.getElementById('email-input')
const tablePosition = document.getElementById('position-input')
const tableOffice = document.getElementById('office-input')
const table = document.getElementById('contacts')

//Events
addBtn.addEventListener('click', addContact)

//Functions
function addContact(event) {

    const newContact = document.createElement('tr')
    newContact.classList.add('new-contact')

    const newName = document.createElement('td')
    newName.innerText = tableName.value 
    newName.classList.add('new-contact-name')
    newContact.appendChild(newName)

    const newEmail = document.createElement('td')
    newEmail.innerText = tableEmail.value
    newEmail.classList.add('new-contact-email')
    newContact.appendChild(newEmail)

    const newPosition = document.createElement('td')
    newPosition.innerText = tablePosition.value
    newPosition.classList.add('new-contact-position')
    newContact.appendChild(newPosition)

    const newOffice = document.createElement('td')
    newOffice.innerText = tableOffice.value
    newOffice.classList.add('new-contact-office')
    newContact.appendChild(newOffice)

    // Adds new contact to the table
    table.appendChild(newContact)

    // Clears each input after entering contact
    tableName.value = ''
    tableEmail.value = ''
    tableOffice.value = ''
    tablePosition.value = 'select'
}






















