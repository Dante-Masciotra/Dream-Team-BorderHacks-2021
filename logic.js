
function select(id) {
    var element = document.getElementById(id);
    element.removeAttribute(onclick);
    var att = document.createAttribute("onclick");
    att.value = "deselect(this.id)";
    element.setAttributeNode(att);
    var img = element.getElementsByClassName("personality-content");
    img[2].remove()
    img[4].remove()
    window.parent.document.getElementsByClassName("current")[0].append(element);
}
function deselect(id){
    //Grab the elements
    var element1 = document.getElementsByClassName("checked")[0];
    var element2 = document.getElementById(id);
    if(element1 == null){
        //Get rid of the last element
        element2.classList.add("checked");
        document.getElementById("suggested").contentWindow.location.reload();
        return;
    }
    //Check if the element was already clicked
    if (element1.getAttribute('id') == id){
        document.getElementById("suggested").contentWindow.location.reload();
    
        element1.parentNode.removeChild(element1);
    }

    //Get rid of the last element
    element1.classList.remove("checked");
    element2.classList.add("checked");
    document.getElementById("suggested").contentWindow.location.reload();
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
    var elements = document.getElementsByClassName("employee");
    for (var j = 0; j < elements.length; j++){
        //Switch For Brigs
        var personas = elements[j].getElementsByClassName("personality-content");
        var flag = window.parent.document.getElementsByClassName("checked")[0];
        if (flag == null)
            return;
        switch(flag.getElementsByClassName("personality-content")[1].innerHTML){
            case "S":
                switch(personas[1].innerHTML){
                    case "M":
                        personas[2].src="cross-mark.png";
                        break;
                    case "P":
                        personas[2].src="circle.png";
                        break;
                    case "C":
                        personas[2].src="circle.png";
                        break;
                }
                break;
            case "M":
                switch(personas[1].innerHTML){
                    case "S":
                        personas[2].src="cross-mark.png";
                        break;
                    case "P":
                        personas[2].src="circle.png";
                        break;
                    case "C":
                        personas[2].src="circle.png";
                }
                break;
            case "P":
                switch(personas[1].innerHTML){
                    case "C":
                        personas[2].src="cross-mark.png";
                        break;
                    case "M":
                        personas[2].src="circle.png";
                        break;
                    case "S":
                        personas[2].src="circle.png";
                }
                break; 
            case "C":
                switch(personas[1].innerHTML){
                    case "P":
                        personas[2].src="cross-mark.png";
                        break;
                    case "M":
                        personas[2].src="circle.png";
                        break;
                    case "S":
                        personas[2].src="circle.png";
                }
                break;
        }        
        switch(flag .getElementsByClassName("personality-content")[4].innerHTML){
            case "INFP":
                switch(personas[4].innerHTML){
                    case "ENFJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ENTJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ISFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ESFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ISTP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ESTP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ISFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ESFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ISTJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ESTJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                }
                break;
            case "ENFP":
                switch(personas[4].innerHTML){
                    case "INFJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "INTJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ISFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ESFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ISTP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ESTP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ISFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ESFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ISTJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ESTJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                }
                break;
            case "INFJ":
                switch(personas[4].innerHTML){
                    case "ENFP":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ENTP":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ISFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ESFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ISTP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ESTP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ISFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ESFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ISTJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ESTJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                }
                break;
            case "ENFJ":
                switch(personas[4].innerHTML){
                    case "INFP":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ISFP":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ESFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ISTP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ESTP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ISFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ESFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ISTJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ESTJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                }
                break;
            case "INTJ":
                switch(personas[4].innerHTML){
                    case "ENFP":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ENTP":
                        //blue
                        personas[5].src="circle.png";
                        break;
                }
                break;
            case "ENTJ":
                switch(personas[4].innerHTML){
                    case "INFP":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "INTP":
                        //blue
                        personas[5].src="circle.png";
                        break;
                }
                break;
            case "INTP":
                switch(personas[4].innerHTML){
                    case "ENTJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ESTJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                }
                break;
            case "ENTP":
                switch(personas[4].innerHTML){
                    case "INFJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "":
                        //blue
                        personas[5].src="circle.png";
                        break;
                }
                break;
            case "ISFP":
                switch(personas[4].innerHTML){
                    case "ENFJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ESFJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ESTJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "INFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ENFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "INFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                }
                break;
            case "ESFP":
                switch(personas[4].innerHTML){
                    case "ISFJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ISTJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "INFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ENFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "INFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ENFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;  
                }  
                break;
            case "ISTP":
                switch(personas[4].innerHTML){
                    case "ESFJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ESTJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "INFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ENFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "INFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ENFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                }
                break;
            case "ESTP":
                switch(personas[4].innerHTML){
                    case "ISFJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ISTJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "INFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ENFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "INFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ENFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                }
                break;
            case "ISFJ":
                switch(personas[4].innerHTML){
                    case "ESFP":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ESTP":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "INFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ENFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "INFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ENFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                }
                break;
            case "ESFJ":
                
                break;
            case "ISTJ":
                switch(personas[4].innerHTML){
                    case "ISFP":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ISTP":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "INFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ENFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "INFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ENFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                }
                break;
            case "ESTJ":
                switch(personas[4].innerHTML){
                    case "ISFP":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ISTP":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "ENTJ":
                        //blue
                        personas[5].src="circle.png";
                        break;
                    case "INFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ENFP":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "INFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                    case "ENFJ":
                        //red
                        personas[5].src="cross-mark.png";
                        break;
                }
                break;
        }
    }  
}