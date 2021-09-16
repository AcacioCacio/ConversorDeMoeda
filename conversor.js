console.log("Welcome Alura!");


//Função de Conversão
function Converter() {
    //Inserção do valor da HTML

    var valorConvertido = 0;

    var moeda1 = document.getElementById('moeda1').value

    var moeda2 = document.getElementById('moeda2').value

    if((moeda1 === '') || (moeda2 === '')) {
        alert('Selecione as moedas para converter')
        return false
    }
    var valorElemento = parseFloat(document.getElementById("valor").value);
    
        //switch capturar a moeda escolhida
   switch(moeda1)
    {
        case 'dolar':
            switch(moeda2)
            {
                case 'dolar':
                    valorConvertido = valorElemento * 1;
                    break;
                case 'dolarCanadense':
                    valorConvertido = valorElemento * 1.26;
                    break;
                case 'real':
                    valorConvertido = valorElemento * 5.22;
                    break;
                case 'euro':
                    valorConvertido = valorElemento * 0.85;
                    break;
            }
            break;
        case 'dolarCanadense':
            switch(moeda2)
            {
                case 'dolar':
                    valorConvertido = valorElemento * 0.79;
                    break;
                case 'dolarCanadense':
                    valorConvertido = valorElemento * 1;
                    break;
                case 'real':
                    valorConvertido = valorElemento * 4.13;
                    break;
                case 'euro':
                    valorConvertido = valorElemento * 0.67;
                    break;
            }
            break;
        case 'real':
            switch(moeda2)
            {
                case 'dolar':
                    valorConvertido = valorElemento * 0.19;
                    break;
                case 'dolarCanadense':
                    valorConvertido = valorElemento * 0.24;
                    break;
                case 'real':
                    valorConvertido = valorElemento * 1;
                    break;
                case 'euro':
                    valorConvertido = valorElemento * 0.16;
                    break;
            }
            break;
        case 'euro':
            switch(moeda2)
            {
                case 'dolar':
                    valorConvertido = valorElemento * 1.18;
                    break;
                case 'dolarCanadense':
                    valorConvertido = valorElemento * 1.49;
                    break;
                case 'real':
                    valorConvertido = valorElemento * 6.17;
                    break;
                case 'euro':
                    valorConvertido = valorElemento * 1;
                    break;
            }
            break;
    }

    var elementoValorConvertido = document.getElementById("valorConvertido");

    elementoValorConvertido.innerHTML = valorConvertido;
}