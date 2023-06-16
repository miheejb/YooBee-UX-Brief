const addBtn = document.getElementsByClassName('addButton')

for (const i = 0; i < addBtn.length; i++) {
    const button = addBtn[i]
    button.addEventListener('click', addToCartClicked)
    
}
function addToCartClicked(event){
    alert (" item is added in the cart");
    event.preventDefault();
};


function submit(){
    alert (" Thank you for your feedback")
};


function specialNoteRecieved(){
    alert(" Your notes are deliverd to the Chef ")
};


///

 addBtn = document.getElementsByClassName('addButton')

for (const i = 0; i < addBtn.length; i++) {
    const button = addBtn[i]
    button.addEventListener('click', addToMyOrder)
}

function addToMyOrder(){
    const list = document.createElement('li');
    list.textContent = addBtn.parentElement.li
}

//





 
   