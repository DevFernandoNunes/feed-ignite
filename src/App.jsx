import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

// author: {avatar_url: "", name: "",role:""" }
//  publishedAt: Date
//  content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/devfernandonunes.png",
      name: "Fernando Nunes",
      role: "Full-Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraaa" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/devfernandonunes.png",
      name: "Letícia Kammer",
      role: "Analista de Finanças",
    },
    content: [
      { type: "paragraph", content: "Fala galeraaa" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-10 20:30:00"),
  },
];

function App(props) {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar>SideBar</Sidebar>
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                key={post.id}
              />
            );
          })}
        </main>
      </div>
      ,
    </div>
  );
}

export default App;
