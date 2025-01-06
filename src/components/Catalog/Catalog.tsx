"use client";
import { PREFIX } from '@/API/API';
import styles from './Catalog.module.css';
import {ArticleProps} from '@/types/article.interface';
import { useEffect, useState } from 'react';
import CardItem from '../CardItem/CardItem';

const Catalog = () => {
    const [cards, setCards] = useState<ArticleProps[]>([]);
    

    const getArticles = async () => {
        try {
            const res = await fetch(`${PREFIX}/articles`);
            if (!res.ok) {
                return;
            }
            const data = await res.json() ;
            
            data.map(i =>{
                // console.log(i.data);
                setCards(i.data);
            })

            
        } catch (e) {
            console.error(e);
            return;
        }
    };

    useEffect(() => {
        getArticles();
    }, []);

    

    return (
        <section className={styles.all}>
            <div className={styles.right}>
            <span>Main {'>'} Catalog
                
            </span>
            <h1>Каталог товаров</h1>
            

            <div className={styles.cards}>
                
                    {cards.length > 0 ? (
                        cards.map(c => (
                            <CardItem
                                key={c.id}
                                id={c.id}
                                name={c.name}
                                body={c.body}
                                created_at={c.created_at}
                                updated_at={c.updated_at}
                            />
                            
                        ))
                    ) : (
                        <p>Нет доступных карточек.</p> // Сообщение, если карточек нет
                    )}
                </div>
            </div>
            
        </section>
    );
};


export default Catalog;



// [{"current_page":1,
//     "data":[
//         {"id":2,"name":"Article 1","body":"This is the content of article 12.","created_at":"2024-12-13T10:16:50.000000Z","updated_at":"2024-12-20T14:11:21.000000Z"},
//         {"id":3,"name":"Article 2","body":"This is the content of article 2.","created_at":"2024-12-13T10:16:50.000000Z","updated_at":"2024-12-13T10:16:50.000000Z"},
//         {"id":5,"name":"Article 4","body":"This is the content of article 4.","created_at":"2024-12-13T10:16:50.000000Z","updated_at":"2024-12-13T10:16:50.000000Z"},
//         {"id":7,"name":"Article 111","body":"ggsvfcgb sdhjv rytgcvbdrg","created_at":"2024-12-20T08:25:39.000000Z","updated_at":"2024-12-20T08:25:39.000000Z"},
//         {"id":8,"name":"Article 154","body":"ggsvfcgb sdhjv rytgcvbdrg","created_at":"2024-12-20T08:26:02.000000Z","updated_at":"2024-12-20T08:26:02.000000Z"}],
//     "first_page_url":"http:\/\/127.0.0.1:8000\/api\/articles?page=1",
//     "from":1,
//     "last_page":1,
//     "last_page_url":"http:\/\/127.0.0.1:8000\/api\/articles?page=1",
//     "links":
//         [{"url":null,"label":"&laquo; Previous","active":false},
//             {"url":"http:\/\/127.0.0.1:8000\/api\/articles?page=1","label":"1","active":true},
//             {"url":null,"label":"Next &raquo;","active":false}],
//     "next_page_url":null,
//     "path":"http:\/\/127.0.0.1:8000\/api\/articles",
//     "per_page":15,"prev_page_url":null,
//     "to":5,"total":5}]