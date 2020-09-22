function lm35(min, max) {
    min = typeof min == 'undefined' ? 35 : min;
    max = typeof max == 'undefined' ? 60 : max;
    
    let random = Math.random() * (max - min) + min;

    return random
}

function trc5000() {
    min = 0;
    max = 1;
    
    let random = Math.random() * (max - min) + min;
    
    if (random >= 0.7) {
        return 1
    } else if (random <= 0.7) {
        return 0
    }
}

function ldr(){
    min = 0;
    max = 1023

    let random = Math.floor(Math.random()*(max-min+1)+min);

    return random
}

function dht11(options){

    //  minHumidity = options.minHumidity;

    //  minTemperature = options.minTemperature;

    // if (minHumidity < 20 || maxHumidity > 100) {
    //     throw new Error('Os valores minímos e máximos para umidade são 20% e 100% respectivamente.')
    // }

    // if (minTemperature < 0 || maxTemperature > 50) {
    //     throw new Error('Os valores minímos e máximos para temperatura são 0 e 50 respectivamente.')
    // }

    // minTemperature = typeof minTemperature == 'undefined' ? 18 : minTemperature;
    // maxTemperature = typeof maxTemperature == 'undefined' ? 25 : maxTemperature;

    minHumidity = typeof minHumidity == 'undefined' ? 40 : minHumidity; // muda aqui o minimo da umidade
    maxHumidity = typeof maxHumidity == 'undefined' ? 90 : maxHumidity; // muda aqui o maximo da umidade

    let randomHumidity = Math.floor(Math.random()*(maxHumidity-minHumidity)+minHumidity);
    
   // let randomTemperature = Math.random() * (maxTemperature - minTemperature) + minTemperature;
    
    return randomHumidity

    
}


module.exports = {lm35, trc5000, ldr, dht11};
