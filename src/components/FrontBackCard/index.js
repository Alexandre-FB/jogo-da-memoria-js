import CardGame from "../CardGame";

function FrontBackCard(){
    return /*html*/`
        <article>
            ${CardGame()}
            ${CardGame()}
        </article>
    `;
}

export default FrontBackCard;