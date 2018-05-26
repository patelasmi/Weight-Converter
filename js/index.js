document.getElementById("output").style.visibility = "hidden";
document.getElementById("wgt-input").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  document.getElementById("grams-op").innerHTML = lbs / 0.0022046;
  document.getElementById("kilograms-op").innerHTML = lbs / 2.2046;
  document.getElementById("ounces-op").innerHTML = lbs * 16;
});
