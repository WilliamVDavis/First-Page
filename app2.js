const jacks = document.querySelectorAll(".jack")

jacks.forEach(function(jack) {
  jack.addEventListener("click", function(d) {
    jack.innerHTML = "X";
  })
});

