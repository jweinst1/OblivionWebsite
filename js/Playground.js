/**
 * Script to setup playground for Oblivion Language
 */

var __OblivionTargetSVG = document.getElementById("OblivionTargetSVG");
var CODEINPUT = document.getElementById("codeinput");
CODEINPUT.addEventListener("keyup", function (e) {
    __OblivionTargetSVG.innerHTML = Oblivion.Compile(CODEINPUT.value);
});
CODEINPUT.addEventListener("change", function (e) {
    __OblivionTargetSVG.innerHTML = Oblivion.Compile(CODEINPUT.value);
});