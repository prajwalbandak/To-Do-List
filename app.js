let addtodo = document.getElementById("addtodo");
let todocontainer = document.getElementById("todoc");
let inputField = document.getElementById("inputfield");


addtodo.addEventListener('click',function(){
        var paragraph = document.createElement('p');
        paragraph.innerText = inputField.value;
        paragraph.classList.add("paragraph-styling");
        todocontainer.appendChild(paragraph);
        inputField.value = "";
        paragraph.addEventListener('click',function(){
            paragraph.style.textDecoration = "line-through";
        })
        paragraph.addEventListener('dblclick',function(){
            todocontainer.removeChild(paragraph);
        })
});