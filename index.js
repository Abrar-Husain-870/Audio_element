
//this section will detect that which key has been pressed: 
document.addEventListener("keypress",function(event){
    makesound(event.key);
});

//this function is used to produce sound: 
function makesound(key){
    switch (key) {
        case "z":
            var b2 = new Audio('Sounds/B2.mp3');
            b2.play();
            break;
        case "x":
            var c3 = new Audio('Sounds/C3.mp3');
            c3.play();
            break;

        case "c":
            var e3 = new Audio('Sounds/E3.mp3');
            e3.play();
            break;

        case "v":
            var f3 = new Audio('Sounds/F3.mp3');
            f3.play();
            break;
        case "b":
        var d3 = new Audio('Sounds/D3(2).mp3');
        d3.play();
        break;            
    
        default:
    }
}