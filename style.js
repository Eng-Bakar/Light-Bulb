let light = document.querySelector("#light")
let OnButton = document.querySelector("#OnBtn")
let OffButton = document.querySelector("#OffBtn")

OnButton.addEventListener("click", function(){
    light.style.backgroundColor = "yellow"
    OffButton.style.backgroundColor = ""
    OnButton.style.backgroundColor = "green"

})
OffButton.addEventListener("click", function(){
    light.style.backgroundColor = "white"
    OffButton.style.backgroundColor = "green"
    OnButton.style.backgroundColor = ""

})