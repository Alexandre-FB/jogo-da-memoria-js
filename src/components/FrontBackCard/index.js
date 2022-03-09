import "./style.css";
import CardGame from "../CardGame";



function FrontBackCard(icon, altIcon){
    let contadorCartasViradas=0;

    window.frontBackCard = {};
    window.frontBackCard.handleClick = (event) => {
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.front-back-card');
        $cardFrontBack.classList.toggle('-active');
    }
   
    return /*html*/`
        <article class="front-back-card" onclick="frontBackCard.handleClick(event)">
            <div class="card -back">
                ${CardGame()}
            </div>
            <div class="card -front">
                ${CardGame(icon, altIcon)}
            </div>
        </article>
    `;
}

export default FrontBackCard; 