// Código de Cuadrados //
console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();


// Código de Triángulos //
console.group("Triángulos");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return(base * altura) / 2;
}
console.groupEnd();


// Código de Círculos //
console.group("Círculos");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}
// PI
const PI = Math.PI;
console.log("PI es: " + PI);
// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// Área
function areaCirculo(radio) {
    return(radio * radio) * PI;
}
console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const resultSquare = document.getElementById("resultSquare");
    resultSquare.innerText = "El perimetro del cuadrado es: " + perimetro + "cm";
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    const resultSquare = document.getElementById("resultSquare");
    resultSquare.innerText = "El área del cuadrado es: " + area + "cm^2";
}
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTrianguloLado1");
    const input2 = document.getElementById("inputTrianguloLado2");
    const input3 = document.getElementById("inputBaseTriangulo");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    const resultTriangle = document.getElementById("resultTriangle");
    resultTriangle.innerText = "El perimetro del triángulo es: " + perimetro + "cm";
}
function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputBaseTriangulo");
    const input2 = document.getElementById("inputAlturaTriangulo");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const area = areaTriangulo(value1, value2);
    const resultTriangle = document.getElementById("resultTriangle");
    resultTriangle.innerText = "El área del triángulo es: " + area + "cm^2";
}
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);
    const perimetro = perimetroCirculo(value);
    const resultCircle = document.getElementById("resultCircle");
    resultCircle.innerText = "El perimetro del circulo es: " + perimetro + "cm";
}
function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);
    const area = areaCirculo(value);
    const resultCircle = document.getElementById("resultCircle");
    resultCircle.innerText = "El área del circulo es: " + area + "cm^2";
}
