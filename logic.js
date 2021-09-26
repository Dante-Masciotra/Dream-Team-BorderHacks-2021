
function select(id) {
    var element = document.getElementById(id);
    element.removeAttribute(onclick);
    var att = document.createAttribute("onclick");
    att.value = "deselect(this.id)";
    element.setAttributeNode(att);
    window.parent.document.getElementsByClassName("current")[0].append(element);
}
function deselect(id){
    if ("del" != id){
        document.getElementById(id).removeAttribute;
    }

    document.getElementById("suggested").contentWindow.location.reload();
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
}

function checkCompatability(){
    var elements = document.getElementsByClassName("personality-content");
    for (var j = 0; j < children.length; j++){
        //Switch For Brigs
        switch(true){
            case "INFP":
                break;
            case "ENFP":
                break;
            case "INFJ":
                break;
            case "ENFJ":
                break;
            case "INTJ":
                break;
            case "ENTJ":
                break;
            case "INTP":
                break;
            case "ENTP":
                break;
            case "ISFP":
                break;
            case "ESFP":
                break;
            case "ISTP":
                break;
            case "ESTP":
                break;
            case "ISFJ":
                break;
            case "ESFJ":
                break;
            case "ISTJ":
                break;
            case "ESTJ":
                break;
        }
    }  
}