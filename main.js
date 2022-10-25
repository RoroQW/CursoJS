
let savedPIN = '1234';

function login() {
    
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {

        let userPIN = prompt('Por favor, ingresá tu PIN. Tenés ' + (i + 1) + ' oportunidades.');

        if (userPIN === savedPIN) {

            alert('Ingreso exitoso. Bienvenido/a!');
            ingresar = true;
            break;

        } else {

            alert('PIN erróneo. Te quedan ' + i + ' intentos.');

        }

    }

    return ingresar;

}


if (login()) {
    //"Aqui se accede" a la info de la cuenta
    let saldo = 30000000;

    let opcion = prompt('Por favor, elegí una opción: \n1- Consulta de saldo. \n2 - Retirar dinero. \n3 - Depósito. \nPresioná X para finalizar.');

    while (opcion != 'X' && opcion != 'x') {

        switch (opcion) {

            case '1':
                alert('Tu saldo es $ ' + saldo);
                break;

            case '2':
                let retiro = parseInt(prompt('Por favor, ingresá cantidad a retirar'));
                if (retiro <= saldo) {
                    saldo -= retiro;
                    //saldo = saldo-retiro;
                    alert('Retiro exitoso! Tu nuevo saldo es $ ' + saldo);
                } else {
                    alert('Fondos insuficientes');
                }
                break;

            case '3':
                let deposito = parseInt(prompt('Ingresa monto a depositar'));
                saldo += deposito;
                // Esto es equivalente a la linea anterior
                //saldo = saldo+deposito;
                alert('Depósito exitoso! Tu nuevo saldo es $ ' + saldo);
                break;

            default:
                alert('Elegiste una opción inválida');
                break;

        }

        opcion = prompt('Por favor, elegí una opción: \n1- Consulta de saldo. \n2 - Retirar dinero. \n3 - Depósito. \n Presioná X para finalizar.');

    }

} else {
    //aviso de bloqueo de tarjeta
    alert('Por tu seguridad, retendremos tu tarjeta. Concactate con nosotros por favor.');

}

alert('Muchas gracias!');