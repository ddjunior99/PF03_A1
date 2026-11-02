



function esPinValido(pin){
    if (pin){
        if ((pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin) && !/^(\d)\1+$/.test(pin)){
            return true;
        }
    }
    return false;
};

/*
function esPinValido(pin) {
    if (typeof pin !== 'string') {
        return false;
    }

    const longitudValida = pin.length === 4 || pin.length === 6;
    const soloDigitos = /^\d+$/.test(pin);
    const noRepetidos = !/^(\d)\1+$/.test(pin);

    return longitudValida && soloDigitos && noRepetidos;
}*/

export {
    esPinValido
}

