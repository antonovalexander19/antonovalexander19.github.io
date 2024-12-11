function find_editf(){
    const item = document.getElementById('new1')
    console.log(item.innerText)
    item.innerHTML=<b>Antonov</b>
}
function find_edits(){
    const item = document.getElementById('new2')
    console.log(item.innerText)
    item.innerHTML=<b>Antonov</b>
}
function find_editt(){
    const item = document.getElementById('new3')
    console.log(item.innerText)
    item.innerHTML=<b>Antonov</b>
}
const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_editf,find_edits,find_editt)