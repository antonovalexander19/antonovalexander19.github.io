function find_editf(){
    const item = document.getElementById('newa')
    console.log(item.innerText)
    item.innerHTML="Antonov"
}
function find_edits(){
    const item = document.getElementById('newb')
    console.log(item.innerText)
    item.innerHTML="Alexander"
}
function find_editt(){
    const item = document.getElementById('newc')
    console.log(item.innerText)
    item.innerHTML="Evgenyevich"
    
}
function find_editfo(){
    const item = document.getElementById('newd')
    console.log(item.innerText)
    item.innerHTML="town Yoshkar-Ola, Mary El republic, Russian Federation<"
}
const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_editf)
node_for_click.addEventListener("click",find_edits)
node_for_click.addEventListener("click",find_editt)
node_for_click.addEventListener("click",find_editfo)
