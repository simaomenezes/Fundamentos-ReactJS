import {Post} from "./Post";

export function App() {
  return (
    <div>
      <Post 
        author="Simon Peter" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus labore, nam reprehenderit officia excepturi mollitia. Dignissimos deserunt minima dolore qui nisi quas assumenda ullam consectetur delectus sapiente. Culpa, sequi deleniti." 
      />

      <Post 
        author="Mathew Peter" 
        content="Today I learning about reactjs" 
      />
    </div>
  )
}