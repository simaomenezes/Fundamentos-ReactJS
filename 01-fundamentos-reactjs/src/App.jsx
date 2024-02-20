import {Post} from "./Post";
import { Header } from "./components/Header";

import styles from './App.module.css';

import './global.css'
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Simon Peter" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus labore, nam reprehenderit officia excepturi mollitia. Dignissimos deserunt minima dolore qui nisi quas assumenda ullam consectetur delectus sapiente. Culpa, sequi deleniti." 
          />
          <Post 
            author="Mathew Peter" 
            content="Today I learning about reactjs" 
          />
        </main>
      </div>
    </div>
  )
}