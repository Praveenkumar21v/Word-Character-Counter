let TextArea=document.getElementById('textarea')
let character=document.getElementById('character');
let word=document.getElementById('word')

TextArea.addEventListener("input",()=>{
    character.innerHTML=TextArea.value.length;
    let text=TextArea.value.trim();
    word.innerHTML=text.split(/\s+/g).filter((value)=>value).length
})




