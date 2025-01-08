var age = 68
    if (age>=65) {
        console.log ("Voce recebera sua aposentadoria.")
    }
    else if (age<65 && age >=18) {
        console.log ("Voce receberá um salário.")
    }
    else if (age<18) {
        console.log ("Você ainda é menor de idade, precisa focar nos estudos.")
    }
    else {
        console.log ("O valor expresso não faz parte dos numericos.")
    }

var day = 'Domingo'
    switch (day) {
        case 'Segunda':
            console.log ("Comece bem a semana.");
            break;     
        case 'Terça':
            console.log ("Segundo dia da semana."); 
            break;
        case 'Quarta':
            console.log ("Terceiro dia da Semana.");
            break;
        case 'Quinta':
            console.log ("Quarto dia da Semana.");
            break;   
        case 'Sexta':
            console.log ("Quinto dia da Semana.");
            break;
        case 'Sabado':
            console.log ("Sexto dia da Semana.");
            break;
        case 'Domingo':
            console.log ("Descanse e prepare-se para a proxima semana.");
            break;
        default:
            console.log("Esse dia não existe.");
        }