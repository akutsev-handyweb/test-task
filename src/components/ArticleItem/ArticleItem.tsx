"use client"
import { ArticleProps } from "@/types/article.interface";
import styles from './ArticleItem.module.css';


const ArticleItem = (params:ArticleProps) => {
   
  return (
    <div className={styles.wrapper}>
      <div className={styles.breadcrumbs}>Страница продукта {'>'} Catalog  {'>'} <span className={styles.h2}>{params.name}</span> </div>
      <section className={styles.section}>
        <div className={styles.img} style={{backgroundImage: `url('`}}></div>
          <div className={styles.content}>
              <div className={styles.top}>
                  <h2 className={styles.h2}>{params.name}</h2> 
                  <button className={styles.add_to_favorite}>Add To Favorite</button>
              </div>
              <hr className={styles.line}/>
              <div className={styles.bottom}>
                  <div className={styles.descr_block}>
                      <span className={styles.description_title}>Description</span>
                      <p className={styles.description}>{params.body}</p>
                  </div>

                  <div className={styles.price_block}>
                      <span className={styles.price}>{params.created_at}</span>
                      <span className={styles.price}>{params.updated_at}</span>

                      
                  </div>
              </div>
          </div>
      </section>
      


    </div>
  );
};

export default ArticleItem;
