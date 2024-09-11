const avanca = document-querySelectorAll('.bnt-proximo');

avanca.forEach(button => {
    button.addeventListener('click', function(){
    const atual = document.querySelectorAll('.ativo');
    const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

    atual.classList.remove('ativo');
    document.getElementById(proximopasso).classList.add('ativo');
    })
})