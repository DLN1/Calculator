const btn7 = document.getElementById("btn-7")

function dis(val) {
    document.getElementById("display").value+=val
}

function solve() {
    let x = document.getElementById("display").value 
    let y = eval(x)
    document.getElementById("display").value = y
}

function clr() {
    document.getElementById("display").value = ""
}

function del() {
   
}

const app = document.getElementById("app")




