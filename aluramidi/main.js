function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();  
    }
    else{
        console.log('Elemento não encontrado ou Seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla'); //constante com um querySelector que vai selecionar todos os meus elementos e definir uma lista com estes elementos (NodeList)


for (let cont = 0; cont < listaDeTeclas.length; cont++){

    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    //Template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){

        console.log(evento)

        if (evento.code === 'Space' || evento.code === 'Enter'){
           tecla.classList.add('ativa');  
        }

    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}

/* listaDeTeclas[0].onclick = tocaSomPom; <-- desta forma eu acessaria a listaDeTeclas para acessar cada elemento da lista e definir uma ação, porém, novamente precisaria repetir uma vez para cada tecla*/

//Os inputs do Html não possuem classe nem id. Quando eu precisar criar uma lista com elementos que contenham input, eu preciso passar o type

/*para eu definir instruções para um elemento da lista, eu vou ter que indicar o índice com a posição do elemento dentro da minha lista
Isto é o conceito de vetor. Entrando no DevAssistente eu consigo visualizar a minha NodeList e ver o índice de cada elemento dentro da lista, a ordem da lista segue a ordem de declaração dos elementos no arquivo Html
O primeiro elemento da lista tem índice de número 0*/