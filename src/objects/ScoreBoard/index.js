import './style.css'
import PlayerName from '../../components/PlayerName'
import PlayerScore from '../../components/PlayerScore'
import VsPlayer from '../../components/Vsplayer'
import ArrowDown from '../../components/ArrowDown';

function ScoreBoard(){
    return /*html*/`
        <header class="score-board">
            ${ArrowDown()}
            ${PlayerName("Player1")} 
            ${PlayerScore(1)} 
            ${VsPlayer()} 
            ${PlayerScore(2)} 
            ${PlayerName("Player2")} 
        </header>
    `;
}

export default ScoreBoard