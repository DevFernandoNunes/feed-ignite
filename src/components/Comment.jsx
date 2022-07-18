import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likesCount, setLikesCount] = useState(0);

  const hadleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikesComment = () => {
    setLikesCount((state) => {
      return state + 1;
    });
  };

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/95880342?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fernando Nunes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca há 1h atrás
              </time>
            </div>

            <button onClick={hadleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikesComment}>
            <ThumbsUp />
            Aplaudir <span>{likesCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
