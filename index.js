/* aqui estou guardando em uma variável o elemento display*/
let display = document.getElementById("display");

/*aqui vou guardar em um array os valores de todos os botões */
let buttons = Array.from(document.getElementsByClassName("button"));

/* agora estou pegando o evento do clique e guardando em uma outra variável */

buttons.map( button => {
    button.addEventListener('click', (e) => {
        /* console.log('clicked'); //toda vez que eu clico, aparece no console
        console.log(e); //aqui ele confere que o clique É um evento
        console.log(e.target); //aqui ele identifica qual é o valor do botão
        console.log(e.target.innerText); //aqui ele simplesmente já mostra direto o valor do botao
        */
      
       switch(e.target.innerText){  //agora eu vou decidir o que acontece em cada botão que eu clicar
        case'C':
        display.innerText= ''; //quando clicar no C, o valor do display vai ser anulado
        break; //a função para de funcionar depois disso, senão ele ia zerar e manter a letra C porque ia continuar para a função debaixo,o default
        case '&larr':
        if(display.innerText){ //ele só apaga o ultimo numero se houve algum numero
            display.innerText = display.innerText.slice(0, -1) //quando clicar na seta, ele apaga o ultimo texto digitado
        }    
        break;
        case '=':
            try{
                display.innerText = eval(display.innerText) //função inbuild do javascript que pega uma string e executa como se fosse javascript
            } catch{
                display.innerText = 'Error!';
            }
            break;
        default:
               display.innerText += e.target.innerText;  //agora eu quero pegar o valor do innerText e jogar no display
       }
    })
})
