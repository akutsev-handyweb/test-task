"use client"
import { ArticleProps } from "@/types/article.interface";
import styles from './ArticleItem.module.css';


const ArticleItem = ({ id, name, body, created_at, updated_at }: ArticleProps) => {
  
  return (
      <div>
          <h1>{name}</h1>
          <p>{body}</p>
          <p>Создано: {created_at}</p>
          <p>Обновлено: {updated_at}</p>
      </div>
  );
};

export default ArticleItem;
