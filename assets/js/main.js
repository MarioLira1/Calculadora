const form = document.querySelector('#formularios')
// selecionando um parte do documento do html no caso o form, formulario.

form.addEventListener('submit', function (event) {
    event.preventDefault();
// isso aqui é para voce clicar em enviar e não ir parar em uma pagina nada com nada
    const inputVtotal = event.target.querySelector('#Vtotal');
    const inputtotal = event.target.querySelector('#total');
// capturei o valor inputado
  const Vtotal = Number(inputVtotal.value);
  const total = Number(inputtotal.value);
// lembrando sempre de colocar o .value na frente da trasição;
// passando os input para numero

    if (!Vtotal){
        setResultado('Valor errado',false)
        return
    }
    
    if (!total){
        setResultado('Valor errado',false)
        return
    }

// preciso criar um função que guarde os valores:
const porcento = getporcento(Vtotal,total);

const msg = `Apos Analise o Valor é de: ${porcento}$`
setResultado(msg, true);
console.log(msg)
})

function getporcento (Vtotal,total){
    const porcento = Vtotal * total  / 100
    return porcento.toFixed(0);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

// função que valida o input, para verificar se esta correto ou nao
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    // Zerando o resultado apos consulta
    const p = criaP();
    // inserindo o paragrafo
    if (isValid){
    p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')

    }
    
    p.innerHTML = msg
    resultado.appendChild(p);
    // AQUI ELE RETORNA O VALOR EM TELA
}
