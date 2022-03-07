import "./style.css";
import CardGame from "../CardGame";

function FrontBackCard(){
    return /*html*/`
        <article class="front-back-card">
            <div class="back-card">
                ${CardGame()}
            </div>
            <div class="front-card">
                ${CardGame("javascript", "Logo do Javascript")}
            </div>
        </article>
    `;
}

export default FrontBackCard;