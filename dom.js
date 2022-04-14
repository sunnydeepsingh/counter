var value = 3;
var inc = document.getElementById("inc").addEventListener
('click', function(){
    value = value + 1;
    document.getElementById("val").textContent=value;
})

var dec = document.getElementById("dec").addEventListener
('click', function(){
    value = value - 1;
    document.getElementById("val").textContent=value;
})

var res = document.getElementById("res").addEventListener
('click', function(){
    value = 0;
    document.getElementById("val").textContent= value;
})

