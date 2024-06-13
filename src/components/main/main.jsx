import style from './main.module.scss';
import Card from '../card.jsx'
import {posts} from '../../db/postDb.js'

const Main = () => {
    return (
        <div className={style.mainBackground}>
            {posts.map(post => 
            ( post.published &&
            <Card 
                key={`cards${post.id}`}
                title={post.title} 
                image={post.image} 
                content={post.content}
                tags = {post.tags}
                published={post.published}
            />))}
            {/* <Card/> */}
        </div>
    )
}

export default Main;