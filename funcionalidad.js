var operandoa;
var operandob;
var operador;

function init() {
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('sumar');
    var restar = document.getElementById('restar');
    var multiplicar = document.getElementById('multiplicar');
    var dividir = document.getElementById('dividir');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
    }
    multiplicar.onclick = function(e) {
        //resultado.textContent = resultado.textContent + "*";
        operandoa = resultado.textContent;
        operador = "*";
        limpiar();
    }
    dividir.onclick = function(e) {
        //resultado.textContent = resultado.textContent + "/";
        operandoa = resultado.textContent;
        operador = "/";
        limpiar();
    }
    sumar.onclick = function(e) {
        //resultado.textContent = resultado.textContent + "+";
        operandoa = resultado.textContent;
        operador = "+";
        limpiar();
    }
    restar.onclick = function(e) {
        //resultado.textContent = resultado.textContent + "-";
        operandoa = resultado.textContent;
        operador = "-";
        limpiar();
    }
    reset.onclick = function(e) {
        //resultado.textContent = "";
        resetear();
    }
    igual.onclick = function(e) {
        //resultado.textContent = eval(resultado.textContent);
        operandob = resultado.textContent;
        resolver();
    }
}

function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function limpiar() {
    resultado.textContent = "";
}

function resolver() {
    var res = 0;
    switch (operador) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}