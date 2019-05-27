const jacks = document.querySelectorAll(".jack")

jacks.forEach(function(jack) { // For the array jacks it's saying where there is a jack insert funcion  
  jack.addEventListener("click", function(d) {// For any box named jack listen for a click
    jack.innerHTML = "X";// add an x

jacks.forEach(function() {
    jack.addEventListener("click", function(d) {
      jack.innerHTML = "O";
    })
  });
})
});

function restart() {
    document.location.href="";
}