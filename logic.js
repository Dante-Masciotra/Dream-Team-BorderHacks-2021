function select(id) {
    var element = document.getElementById(id);
    element.removeAttribute(onclick);
    var att = document.createAttribute("onclick");
    att.value = "deselect(this.id)";
    element.setAttributeNode(att);
    window.parent.document.getElementsByClassName("current")[0].append(element);
}
function deselect(id){
    var element = document.getElementById(id);
    
    element.parentNode.removeChild(element);
}
function removeDupes(){
    var children = window.parent.document.getElementsByClassName("employee");
    for(var i = 0; i < children.length; i++){
        var elements = document.getElementsByClassName("employee");
        for(var j = 0; j < elements.length; j++){
            if (children[i].getElementsByClassName("name")[0].innerHTML == elements[j].getElementsByClassName("name")[0].innerHTML){
                elements[j].parentNode.removeChild(elements[j]);
                break;
            }
        }
    }
}

function sendToFrame(skill){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "form.php?skill="+skill, true);
    xmlhttp.send();

    document.getElementById("suggested").src="form.php?skill="+skill;
    console.log(skill);
    //document.getElementById("suggested").contentWindow.location.reload();
}