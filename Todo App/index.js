var data = document.getElementById('data')
var addbtn = document.getElementById('addbtn')
var listitem = document.getElementById('listitem')

function adddata(){
if(data.value === ''){
    alert("Write here Something")
}
else{
    // Create List Item 
    const li = document.createElement('li')
    li.innerHTML = data.value;
    listitem.appendChild(li)
    // Create close button using unicode 
    const span = document.createElement('span')
    span.innerHTML = "\u00d7"
    li.appendChild(span)
    span.classList.add('close')
    // Use addEventListener for remove item when click on it 
    span.addEventListener('click', function(){
        li.remove()
    })
    // Create Edit button using unicode 
    const editbtn = document.createElement('button')
    editbtn.innerHTML = "Edit"
    li.appendChild(editbtn)
    editbtn.classList.add("editbtn")
    // Use addEventListener for edit list item when click on edit button 
    editbtn.addEventListener('click', function(){
        const editdata = prompt("Edit the tsak:", li.firstChild.textContent)
        if(editdata !== null){
            li.firstChild.textContent = editdata;
        }
    })
    data.value = ''
}}
