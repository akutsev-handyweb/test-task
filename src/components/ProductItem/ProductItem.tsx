"use client"
import { ProductProps } from "@/types/product.interface";
import styles from './ProductItem.module.css';


const ProductItem = (params:ProductProps) => {
   
  return (
    <div className={styles.wrapper}>
      <div className={styles.breadcrumbs}>Страница продукта {'>'} Catalog  {'>'} <span className={styles.h2}>{params.title}</span> </div>
      <section className={styles.section}>
        <div className={styles.img} style={{backgroundImage: `url('${params.image}')`}}></div>
          <div className={styles.content}>
              <div className={styles.top}>
                  <h2 className={styles.h2}>{params.title}</h2> 
                  <button className={styles.add_to_favorite}>Add To Favorite</button>
              </div>
              <hr className={styles.line}/>
              <div className={styles.bottom}>
                  <div className={styles.descr_block}>
                      <span className={styles.description_title}>Description</span>
                      <p className={styles.description}>{params.description}</p>
                  </div>

                  <div className={styles.price_block}>
                      <span className={styles.price}>{params.price} $</span>
                      <button>Купить</button>
                  </div>
              </div>
          </div>
      </section>
      


    </div>
  );
};

export default ProductItem;
