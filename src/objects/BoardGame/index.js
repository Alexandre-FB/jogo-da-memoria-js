import FrontBackCard from '../../components/FrontBackCard';
import './style.css';

function BoardGame(amountCards) {
   
    return /*html*/`
        <section class="board-game">
            ${FrontBackCard().repeat(amountCards)}
        </section>`; 
}

export default BoardGame;