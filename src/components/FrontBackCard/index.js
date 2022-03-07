import "./style.css";
import CardGame from "../CardGame";

function FrontBackCard(){
    return /*html*/`
        <article class="front-back-card">
            <div class="card -back">
                ${CardGame()}
            </div>
            <div class="card -front">
                ${CardGame("javascript", "Logo do Javascript")}
            </div>
        </article>
    `;
}

export default FrontBackCard; 