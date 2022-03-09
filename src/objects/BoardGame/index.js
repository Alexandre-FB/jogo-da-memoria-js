import FrontBackCard from '../../components/FrontBackCard';
import cards from './cards.js';
import './style.css';

function BoardGame(amountCards) {

    const flipAndHideCards = ($activeCards) => {
        $activeCards.forEach((card) => card.classList.remove('-active'));
    }

    const changeArrowPlayer = (currentPlayer, $arrowDown) => {
        $arrowDown.setAttribute("data-currentPlayer", currentPlayer == 1 ? 2 : 1);
    }

    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector('.board-game');
        const $arrowDown = document.querySelector('.arrow-down');
        const $activeCards = $boardGame.querySelectorAll('.front-back-card.-active');

        if ($activeCards.length == 2) {
            setTimeout(() => {
                const currentPlayer = $arrowDown.getAttribute("data-currentPlayer");
                flipAndHideCards($activeCards);
                changeArrowPlayer(currentPlayer, $arrowDown);
                
            }, 1000);
        }

        console.log($activeCards.length)
   };

    const $htmlCards = cards.map((card)=>FrontBackCard(card.icon, card.altIcon));

    return /*html*/`
        <section class="board-game" onclick="boardGame.handleClick()">
            ${$htmlCards.join([""])}
        </section>`; 
}



export default BoardGame;