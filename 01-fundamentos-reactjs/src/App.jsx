import {Post} from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/625433?s=96&v=4',
      name: 'Lucas Lima',
      role: 'Developer / gamer developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis exercitationem expedita voluptate delectus voluptates architecto libero eligendi at ipsa repellendus facere veritatis, deserunt eaque quasi, commodi ratione fuga culpa? '},
      {type: 'link', content: 'fulano.com/developer'},
    ],
    publishedAt: new Date('2024-02-21 10:01:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/7212526?v=4',
      name: 'Fulano de tal',
      role: 'Gamer develop'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis exercitationem expedita voluptate delectus voluptates architecto libero eligendi at ipsa repellendus facere veritatis, deserunt eaque quasi, commodi ratione fuga culpa? '},
      {type: 'link', content: 'fulano.com/gamer'},
    ],
    publishedAt: new Date('2024-02-21 10:01:00')
  }
];

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}