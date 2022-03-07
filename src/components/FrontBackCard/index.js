import CardGame from "../CardGame";

function FrontBackCard(){
    return /*html*/`
        <article>
            ${CardGame()}
            ${CardGame("javascript", "Logo do Javascript")}
        </article>
    `;
}

export default FrontBackCard;