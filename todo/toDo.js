function add() {
    const text = document.getElementById("text").value;
    const list = document.getElementById("list")

    const nameLi = document.createElement("li")
    nameLi.innerText = text
    list.appendChild(nameLi)

    
}