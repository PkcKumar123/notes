shownotes();

// if users add a note, add it to the local storage
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtxt.value = "";
  console.log(notesobj);
  shownotes();
});

//Function used to show elements from local storage

function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `
        
        <div class="card my-2 mx-2 notecard" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">
            ${element}
            </p>
            <button onclick="deletenote(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
          </div>
        </div>
              `;
  });

  let noteselm = document.getElementById("notes");
  if (notesobj.length != 0) {
    noteselm.innerHTML = html;
  } else {
    noteselm.innerHTML = `Nothing to show ! use "Add a Note" section above to add notes.`;
  }
}

//funtion to delete a note
function deletenote(index) {
  console.log("i am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }

  notesobj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();
}

let search=document.getElementById('searchtxt');
search.addEventListener("input",function(){
    let inputval=search.value.toLowerCase();
    console.log('input event fired!',inputval);
    let notecard=document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element){
          let cardtxt=element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})