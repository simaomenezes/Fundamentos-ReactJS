import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/625433?s=96&v=4'/>
                    <div className={styles.authorInfo}>
                        <strong>Fulano de tal</strong>
                        <span>Web Develop</span>
                    </div>
                </div>

                <time title='20 de Janeiro de 2024' dataTime='20224-02-20 11:56:25'>Públicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um projeto no meu portifa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis exercitationem expedita voluptate delectus voluptates architecto libero eligendi at ipsa repellendus facere veritatis, deserunt eaque quasi, commodi ratione fuga culpa? </p>
                <p><a href=''>fulano.com/developer</a></p>
                <p>
                    <a href=''>#reactjs</a>
                    <a href=''>#developer</a>
                    <a href=''>#gamer</a>
                </p>
            </div>
        </article>
    )
}