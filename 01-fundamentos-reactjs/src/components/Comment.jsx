import { Trash, ThumbsUp } from 'phosphor-react'

import styles from './Comment.module.css'
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);    
    }
    
    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.Comment}>
           <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/625433?s=96&v=4'/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <time title='20 de Janeiro de 2024' dataTime='20224-02-20 11:56:25'>Cerca de há 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}