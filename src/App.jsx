import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import style from './App.module.css'

export function App() {

  return (
      <div>
        <Header />

        <div className={style.wrapper}>
          <Sidebar />
          <main>
            <Post 
              author="Danilo Santos"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nemo sunt assumenda temporibus consequuntur architecto, neque placeat facilis inventore, reprehenderit esse quod explicabo, laboriosam error ab pariatur molestias commodi distinctio?"
            />

            <Post 
              author="Linkya"
              content="Não sou pobre"
            />
          </main>
        </div>
      </div>
  )
}
