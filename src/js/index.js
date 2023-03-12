const botoesCarrosel = document.querySelectorAll('.botao'); //buscar os elementos botões.
const imagens = document.querySelectorAll('.imagem');

botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.selecionado'); // indetificar o click no botão.
        botaoSelecionado.classList.remove('selecionado'); // desmarcar o botao selecionado.
        botao.classList.add('selecionado');//marcar botão clicado.
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remover('ativa');// esconder a imagem ativa.
        imagens[indice].classList.add('ativa');//fazer aparecer a imagem selecionado. 
    }) 
})

