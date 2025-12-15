/* 

Desenvolvido dia 15/12/2025 por Samuel Mioni

Objetivo:

    Given the speed you are traveling in miles per hour (MPH), 
    and a speed limit in kilometers per hour (KPH), determine 
    whether you are speeding and if you will get a warning or 
    a ticket.

Link do desafio:
- https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-15

*/

function speedCheck(speedMph, speedLimitKph) {
    let CarSpeedKph = speedMph * 1.60934;
    let speedLimitWarn = speedLimitKph - 5;
    let speedLimitTicket = speedLimitKph + 5;

    if (CarSpeedKph <= speedLimitKph) {
        speedMph = "Not Speeding";

        console.log(`Velocidade do Carro: ${CarSpeedKph} km/h\n
        Velocidade Limite: ${speedLimitKph} km/h\n\n
        Resultado: ${speedMph}\n\n`);
    }
    else if (CarSpeedKph > speedLimitTicket) {
        speedMph = "Ticket";

        console.log(`Velocidade do Carro: ${CarSpeedKph} km/h\n
        Velocidade Limite: ${speedLimitKph} km/h\n\n
        Resultado: ${speedMph}\n\n`);
    }
    else if (CarSpeedKph > speedLimitWarn) {
        speedMph = "Warning";

        console.log(`Velocidade do Carro: ${CarSpeedKph} km/h\n
        Velocidade Limite: ${speedLimitKph} km/h\n\n
        Resultado: ${speedMph}\n\n`);
    }
    return speedMph;
}

speedCheck(30, 70);
speedCheck(40, 60);
speedCheck(40, 65);
speedCheck(60, 90);
speedCheck(65, 100);
speedCheck(88, 40);

