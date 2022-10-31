import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import style from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/olinadss.png',
      name: 'Danilo dos Santos',
      role: 'Developer full stack junior',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},     
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}        
    ],
    publishedAt: new Date('2022-10-30 18:15:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Vinizbjj.png',
      name: 'Vinícius',
      role: 'Developer full stack junior em formação',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},     
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}        
    ],
    publishedAt: new Date('2022-10-31 18:39:20')
  }
]

export function App() {

  return (
      <div>
        <Header />

        <div className={style.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
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
