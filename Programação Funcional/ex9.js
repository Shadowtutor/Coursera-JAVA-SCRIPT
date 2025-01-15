// Task 1: Build a function-based console log message generator
function consoleStyler() {
    return "Olá Gilvan!";
    
}
var msn = consoleStyler();

console.log(msn);

// Task 2: Build another console log message generator
function celebrateStyler() {
    return "Parabens para voce! Por ter chego ate aqui, muitos ja teriam desistido."
}
var aniversario = celebrateStyler()
console.log(aniversario);

// Task 3: Run both the consoleStyler and the celebrateStyler functions
function uniao(a,b) {
    return a +" "+ b;
}
var mensagem = uniao(msn,aniversario);
console.log(mensagem);

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate() {
    return "Continue se esforçando meu filho! Tenho orgulho de você e no homem que se tornou."
}
var qap = styleAndCelebrate()
console.log (qap)