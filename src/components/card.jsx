import styleCard from './main/main.module.css';

const Card = () => {

    return (
        <div className={styleCard.card}>
            <figure className={styleCard.cardImage}>
                <img src="/cardimage.png" alt="screen dimension"/>
            </figure>
            <div className={styleCard.cardDesc}>
                <h3>Titolo</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, beatae atque debitis dolor perspiciatis qui provident quidem id tempora laboriosam, saepe, veniam quas a explicabo autem dolores. Debitis repudiandae esse iusto tempora, iure consequatur quod nesciunt illum molestiae ea. A.</p>
                <button className={styleCard.readMore}>leggi di più</button>
            </div>
        </div>
    )

}

export default Card;