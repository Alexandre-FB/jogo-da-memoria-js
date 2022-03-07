import "./style.css"; 

function CardGame(imagemDaCarta="brain", altDaImagem="Carta com ícone de cérebro") {
    return /*html*/`
        <article class="card-game">
            <img class="card-img" src="src/img/${imagemDaCarta}.png" alt=${altDaImagem}>
        </article>
    `
}

export default CardGame;