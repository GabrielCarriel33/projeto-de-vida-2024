const botoes = document.querySelectorAll(".botao");
const textox = document querySelectorAll(".aba-conteudo");
console.log(botoes);
for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes length;j++){
            botoes[j].classList.remove("ativo");
            textox[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textox[i].classList.add("ativo");
    }
    console.log(i);
}

const contadores = document.querySelectorAll("")
