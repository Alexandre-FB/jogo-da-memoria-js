import FrontBackCard from '../../components/FrontBackCard';
import cards from './cards.js';
import './style.css';

function BoardGame(amountCards) {
   
    const $htmlCards = cards.map((card)=>FrontBackCard(card.icon, card.altIcon));

    return /*html*/`
        <section class="board-game">
            ${$htmlCards.join([""])}
        </section>`; 
}

export default BoardGame;