function esPinValido(pin){
    if (pin){
        if ((pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin) && !/^(\d)\1+$/.test(pin)){
            return true;
        }
    }
    return false;
};

export {
    esPinValido
}


