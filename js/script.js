const imagens = [
    {"id": 1, "src": "/imagens/ifsp-guarulhos.jpg", "alt": "Logo do IFSP Guarulhos"},
    {"id": 2, "src": "/imagens/if-logo.png", "alt": "Logo do IF"},
    {"id": 3, "src": "/imagens/campus-guarulhos.jpg", "alt": "Foto do Câmpus Guarulhos"}
]

function girarCarrossel(direcao) {
    const container = document.getElementById('carrossel-img');
    const imagem = container.getElementsByTagName('img');
    
    let idAtual = 0;

    //Encontra o id da imagem atual
    for (let i = 0; i < imagens.length; i++) {
        if (imagem[0].src.includes(imagens[i].src)) {
            idAtual = i;
            break;
        }
    }

    imagem[0].src = imagens[(idAtual + direcao + imagens.length) % imagens.length].src;
}

function expandirMultimidia() {
    const container = document.getElementById('multimidia');
    const outros = container.querySelector('.outros');
    const btnExpandir = container.querySelector('.btn-expandir');

    btnExpandir.innerText = btnExpandir.innerText === 'Ver mais' ? 'Ver menos' : 'Ver mais';
    outros.style.display = outros.style.display === 'none' ? 'flex' : 'none';
}