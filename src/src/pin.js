



function esPinValido(pin){
    if (pin){
        if ((pin.length == 4 || pin.length == 6) && /^\d+$/ && !/^(\d)\1+$/){
            return true;
        }
    }
    return false;
};




export {
    esPinValido
}

