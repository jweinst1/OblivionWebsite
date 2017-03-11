/**
 * Script to setup playground for Oblivion Language
 */

var __OblivionTargetSVG = document.getElementById("OblivionTargetSVG");
var CODEINPUT = document.getElementById("codeinput");
CODEINPUT.addEventListener("onkeyup", function () {
    __OblivionTargetSVG.outerHTML = Oblivion.Compile(CODEINPUT.value);
});