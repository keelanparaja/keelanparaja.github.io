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
function makeEditable(){
  let tds = document.getElementsByTagName("td");
  let ths = document.getElementsByTagName("th");

  for(var i=0; i < ths.length; i++){
    ths[i].setAttribute("contentEditable","true");
  }
  for(var i=0; i < tds.length; i++){
    tds[i].setAttribute("contentEditable","true");
    
    // remove eventListener from buttons
    tds[i].removeEventListener("click",toggleModal);
  }
}
function saveChanges(){
  /*
    1. Read JSON template file.
    2. Comb table and fill in JSON.
    3. Download JSON for user.
  */
  const loc = "https://keelanparaja.github.io/Jeopardy/board_template.json";
  // use test JSON for now

  //let jsonTemplate = JSON.parse(readFile(loc));
  let changes = addChanges(testJson);
  //saveChanges(JSON.stringify(changes));
}
function readFile(loc){
  let obj = new XMLHttpRequest();
  obj.open("GET", loc, false);
  obj.onreadystatechange = function ()
    {
        if(obj.readyState === 4)
        {
            if(obj.status === 200 || obj.status == 0)
            {
                return obj.responseText;
            }
        }
    }
    obj.send(null);
}
function addChanges(){
  //TODO: create this function to comb jeopardy table and add all values
  // to the JSON template.
}

var testJson = {
  "category_1" : {
      "title" : "",
      "options" : {
          "one" : {
              "title" : "",
              "question": ""    
          },
          "two" : {
              "title" : "",
              "question": ""    
          },
          "three" : {
              "title" : "",
              "question": ""    
          },
          "four" : {
              "title" : "",
              "question": ""    
          },
          "five" : {
              "title" : "",
              "question": ""    
          }    
      }
  },
  "category_2" : {
      "title" : "",
      "options" : {
          "one" : {
              "title" : "",
              "question": ""    
          },
          "two" : {
              "title" : "",
              "question": ""    
          },
          "three" : {
              "title" : "",
              "question": ""    
          },
          "four" : {
              "title" : "",
              "question": ""    
          },
          "five" : {
              "title" : "",
              "question": ""    
          }    
      }
  },
  "category_3" : {
      "title" : "",
      "options" : {
          "one" : {
              "title" : "",
              "question": ""    
          },
          "two" : {
              "title" : "",
              "question": ""    
          },
          "three" : {
              "title" : "",
              "question": ""    
          },
          "four" : {
              "title" : "",
              "question": ""    
          },
          "five" : {
              "title" : "",
              "question": ""    
          }    
      }
  },
  "category_4" : {
      "title" : "",
      "options" : {
          "one" : {
              "title" : "",
              "question": ""    
          },
          "two" : {
              "title" : "",
              "question": ""    
          },
          "three" : {
              "title" : "",
              "question": ""    
          },
          "four" : {
              "title" : "",
              "question": ""    
          },
          "five" : {
              "title" : "",
              "question": ""    
          }    
      }
  },
  "category_5" : {
      "title" : "",
      "options" : {
          "one" : {
              "title" : "",
              "question": ""    
          },
          "two" : {
              "title" : "",
              "question": ""    
          },
          "three" : {
              "title" : "",
              "question": ""    
          },
          "four" : {
              "title" : "",
              "question": ""    
          },
          "five" : {
              "title" : "",
              "question": ""    
          }    
      }
  }
};