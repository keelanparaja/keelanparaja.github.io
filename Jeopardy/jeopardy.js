var modal = document.querySelector('.modal');

// add the event listener to all table cells
let btns = document.getElementsByTagName("td");

for(var i = 0; i < btns.length; i++){
   btns[i].addEventListener('click', toggleModal);
}

function attachModalListeners(modalElm) {
  modalElm.querySelector('.close_modal').addEventListener('click', toggleModal);
  modalElm.querySelector('.overlay').addEventListener('click', toggleModal);
}

function detachModalListeners(modalElm) {
  modalElm.querySelector('.close_modal').removeEventListener('click', toggleModal);
  modalElm.querySelector('.overlay').removeEventListener('click', toggleModal);
}

function toggleModal() {
  // change color of button after click
  if(this.tagName == "TD"){
    this.style.backgroundColor = "#f47a60";
  }
  var currentState = modal.style.display;

  // If modal is visible, hide it. Else, display it.
  if (currentState === 'none') {
    modal.style.display = 'block';
    attachModalListeners(modal);
  } else {
    modal.style.display = 'none';
    detachModalListeners(modal);  
  }
}
