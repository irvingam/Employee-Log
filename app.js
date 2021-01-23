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

    // Establishes new row for contact
    const newContact = document.createElement('tr')
    newContact.classList.add('new-contact')

    // Name text value
    const newName = document.createElement('td')
    newName.innerText = tableName.value 
    newName.classList.add('new-contact-name')
    newContact.appendChild(newName)

    // Email text value
    const newEmail = document.createElement('td')
    newEmail.innerText = tableEmail.value
    newEmail.classList.add('new-contact-email')
    newContact.appendChild(newEmail)

    // Position select value
    const newPosition = document.createElement('td')
    newPosition.innerText = tablePosition.value
    newPosition.classList.add('new-contact-position')
    newContact.appendChild(newPosition)

    // Office text value
    const newOffice = document.createElement('td')
    newOffice.innerText = tableOffice.value
    newOffice.classList.add('new-contact-office')
    newContact.appendChild(newOffice)

    // Establishes area for buttons to be inserted
    const actionArea = document.createElement('td')
    actionArea.classList.add('action-area')
    newContact.appendChild(actionArea)

    // Edit info button
    const editButton = document.createElement('button')
    editButton.innerHTML = '<i class="fas fa-user-edit"></i>'
    editButton.classList.add('editBtn')
    actionArea.appendChild(editButton)

    // Delete contact button
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fas fa-user-times"></i>'
    deleteButton.classList.add('deleteBtn')
    actionArea.appendChild(deleteButton)

    // Adds new contact to the table
    table.appendChild(newContact)

    // Clears each input after entering contact
    tableName.value = ''
    tableEmail.value = ''
    tableOffice.value = ''
    tablePosition.value = 'select'
}






















