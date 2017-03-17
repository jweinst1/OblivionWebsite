/**
 * Script to setup playground for Oblivion Language
 */

var __OblivionTargetSVG = document.getElementById("OblivionTargetSVG");
var __OblivionStdOut = document.getElementById("stdout");
var CODEINPUT = document.getElementById("codeinput");
CODEINPUT.addEventListener("keyup", function (e) {
    var result = Oblivion.Compile(CODEINPUT.value, 2);
    __OblivionTargetSVG.innerHTML = result[1];
    __OblivionStdOut.value = result[0];
});
CODEINPUT.addEventListener("change", function (e) {
    var result = Oblivion.Compile(CODEINPUT.value, 2);
    __OblivionTargetSVG.innerHTML = result[1];
    __OblivionStdOut.value = result[0];
});