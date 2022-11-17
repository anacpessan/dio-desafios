function calcularImc (peso, altura){
    const imc = peso /Math.pow (altura,2);
    return (imc);
}

function classificacao (imc){
    if (imc < 20){
        return'Muito Abaxo do Peso'
    } else if (imc >=20 && imc <25 ){
        return 'Peso Normal'
    } else if (imc >= 25 && imc < 30){
        return 'Acima do Peso'
    } else if (imc <= 30 && imc <34) {
        return'Obeso'
    }else if (imc > 34){
        return 'Muito Obeso'
    }
    
}

function main() {
    const peso = 69;
    const altura = 1.71;
    const imc = calcularImc (peso, altura);
    console.log (classificacao (imc));
}

main ();