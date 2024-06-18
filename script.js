const addNotes = document.getElementById('addnotes');
         const newnote = ()=>{
            const notes = document.createElement('div');
            notes.classList.add('notes');
            const htmldata= `<div class="button">
            <button class="edit"><i class="fa fa-pencil" style="font-size:large;color: red; "></i></button>
            <button class="delete"><i class="fa fa-trash" style="font-size:large;color: red; "></i></button>
        </div>
        <div class="main"></div>
        <textarea name="" id="area"></textarea>`;
        notes.insertAdjacentHTML('afterbegin',htmldata);   
        // console.log(notes);  
        const deletenote =notes.querySelector(".delete");
        const editnote =notes.querySelector('.edit');
        const textarea = notes.querySelector('#area');
        const mainDiv= notes.querySelector('.main');
        // console.log(deletenote);
        deletenote.addEventListener('click',()=>{
            notes.remove();
        });
        editnote.addEventListener('click',()=>{
            if(textarea.style.display === 'none')
            {
                textarea.style.display='block';
                mainDiv.style.display='none';
            }
            else
            {
                textarea.style.display='none';
                mainDiv.style.display='block';
                mainDiv.textContent=textarea.value;
            }
        });
        document.body.appendChild(notes);
    }
         addNotes.addEventListener('click', newnote);