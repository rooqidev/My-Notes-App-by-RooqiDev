    /*Creating toggle effect for Side Manu, Button click! apear Manu. Button click! disappear Manu*/
    let manu = document.querySelector(".manu");
    document.querySelector(".notesmanu").addEventListener("click", () => {
      manu.classList.toggle("active");
    })
    
        /*A function, search_note() is being used to display the saved notes*/
    function search_note() {
      document.querySelector(".Noting").style.display = "none";
      document.querySelector(".All-notes").style.display = "block";
      
      let noTes_list = JSON.parse(localStorage.getItem("noTes_list"));
      
      let notes_li = document.querySelector(".notes-list");
      notes_li.innerHTML = "";
      
      let length = 0;
      for (let key in noTes_list) {
        let div = document.createElement("div");
        div.classname = "note";
        div.innerHTML = `${key} : <button style="padding: 3px 5px; background: linear-gradient(#212121, #151515); border:1px solid linear-gradient(#222222, #696969); margin: 5px; border-radius: 5px; border: none; color: #A39E9E;" onclick="Read('${key}')" >Read</button><button style="padding: 3px 5px; background: linear-gradient(#212121, #151515); border:1px solid linear-gradient(#222222, #696969); border: none;  border-radius: 5px; color: #A39E9E;" onclick="Delete('${key}')" >Delete</button>`;
        notes_li.appendChild(div);
        length++;
      }
      if (length === 0) {
        notes_li.innerHTML = "<b>No Saved Notes</b>";
      }
    }
    
    
    /* A function called create_note() is being used for creating & saving a new Note, with its title in browser storage*/
    function create_note() {
      document.querySelector(".All-notes").style.display = "none";
      document.querySelector(".Noting").style.display = "block";
    }
    create_note();
    
    function saving_note() {
      let note_title = document.getElementById("note-title").value;
      let note = document.getElementById("Note").value;
      
      let noTes_list = JSON.parse(localStorage.getItem("noTes_list")) || {}; // opening existing Email object
      noTes_list[note_title] = note; //adding them to that object
      
      localStorage.setItem("noTes_list", JSON.stringify(noTes_list)); //saving an object
      document.getElementById("note-title").value = "";
      document.getElementById("Note").value = "";
      
    }
    
        /*being used for reading a selected note*/
    function Read(key) {
      let noTes_list = JSON.parse(localStorage.getItem("noTes_list")) || {};
      document.getElementById("note-title").value = key;
      document.getElementById("Note").value = noTes_list[key];
      create_note()
    }
        /* Deleting a particular Note using it title*/
    function Delete(key) {
      let noTes_list = JSON.parse(localStorage.getItem("noTes_list")) || {};
      
      delete noTes_list[key];
      
      localStorage.setItem("noTes_list", JSON.stringify(noTes_list));
      
      search_note();
    }