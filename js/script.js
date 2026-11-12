const imagens = [
    {"id": 1, "src": "/imagens/ifsp-guarulhos.jpg", "alt": "Logo do IFSP Guarulhos"},
    {"id": 2, "src": "/imagens/if-logo.png", "alt": "Logo do IF"},
    {"id": 3, "src": "/imagens/campus-guarulhos.jpg", "alt": "Foto do Câmpus Guarulhos"},
    {"id": 4, "src": "https://static.wikia.nocookie.net/shrek/images/3/39/Shrek.jpg/revision/latest/scale-to-width-down/181?cb=20161007174028&path-prefix=pt-br", "alt": ""},
    {"id": 5, "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kiqlN2Qx1rIh5gE22zpn3ytW08K74oSmOon-iTTdMgMcRR_eOroIBZ8j&s=10", "alt": ""},
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

const noticias = [
    {"id": 1, "titulo": "IFSP Guarulhos", "descricao": "O Instituto Federal de São Paulo - Câmpus Guarulhos, funcionou normalmente nessa semana.", "alt": "Evento de integração", "src": "/imagens/campus-guarulhos.jpg"},
    {"id": 2, "titulo": "Estudante destaque", "descricao": "O estudante bacharelando em Engenharia da Computação, Gatheus Malvão, recebeu o prêmio de garoto de programa destaque, derrotando seu colega Diovani Gias.", "alt": "Estudante destaque", "src": "/imagens/campus-guarulhos.jpg"},
    {"id": 3, "titulo": "Manchete", "descricao": "Conteúdo detalhado da notícia.", "alt": "Título da notícia", "src": "/imagens/campus-guarulhos.jpg"}
]

function carregarNoticias() {
    const container = document.getElementById('noticias-container');
    noticias.forEach(noticia => {
        const card = document.createElement('div');
        card.classList.add('noticia');
        card.innerHTML = `
            <div class="noticia-img">
                <img src="${noticia.src}" alt="${noticia.alt}">
            </div>
            <div class="noticia-content">
                <h2>${noticia.titulo}</h2>
                <p>${noticia.descricao}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', carregarNoticias);
} else {
    carregarNoticias();
}
