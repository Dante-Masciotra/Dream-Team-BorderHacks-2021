function select(id) {
    var element = document.getElementById(id);
    element.removeAttribute(onclick);
    var att = document.createAttribute("onclick");
    att.value = "deselect(this.id)";
    element.setAttributeNode(att);
    document.getElementsByClassName("current")[0].append(element);
}
function deselect(id){
    var element = document.getElementById(id);
    element.removeAttribute(onclick);
    var att = document.createAttribute("onclick");
    att.value = "select(this.id)";
    element.setAttributeNode(att);
    document.getElementsByClassName("suggested")[0].append(element);
}