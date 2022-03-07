import './style.css';

function PlayerScore(points){
    return /*html*/ `
        <ol class="player-score" data-points="${points}">
            <li class="pointer -a${points}"></li>
            <li class="pointer -b${points}"></li>
            <li class="pointer -c${points}"></li>
        </ol>
    `
}

export default PlayerScore