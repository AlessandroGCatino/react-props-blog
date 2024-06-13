import style from './main.module.css';
import Card from '../card.jsx'

const Main = () => {
    return (
        <div className={style.mainBackground}>
            <Card/>
        </div>
    )
}

export default Main;