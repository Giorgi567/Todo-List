let Maininput = document.querySelector(`.Main-input`)
let submit = document.querySelector(`.Main-btn`)
let list = document.querySelector(`.Listbruh`)

// 
submit.addEventListener(`click`, function(e) {
     e.preventDefault()
 
    let creatdiv = document.createElement(`div`)
    creatdiv.classList.add(`todo`)
    
  
    let newdiv = document.createElement(`div`)  
    newdiv.classList.add(`todo-item`)
    newdiv.innerText = Maininput.value
    creatdiv.appendChild(newdiv)
 

    let edit = document.createElement(`button`)
    edit.classList.add(`editstyle`)
    edit.innerText = `Edit`
    creatdiv.appendChild(edit)
    
    edit.addEventListener("click", function() {
        if (edit.innerText.toLowerCase() == `edit`) {
            newdiv.contentEditable = true;
            
            edit.innerText = `Save`
            
        }
        else {
            newdiv.contentEditable = false;
            console.log(`boi`)
            edit.innerText = `Edit`            
            
        }

    
    } );
    let del = document.createElement(`button`)
    del.innerHTML = `Delete`
    del.classList.add(`delstyle`)
    creatdiv.appendChild(del)
    list.appendChild(creatdiv)
    Maininput.value = ``
    
    del.addEventListener(`click`, function() {
        creatdiv.remove()
    })

})