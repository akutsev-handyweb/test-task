"use client"
import { PREFIX } from "@/API/API";
import ArticleItem from "@/components/ArticleItem/ArticleItem";
import { ArticleProps } from "@/types/article.interface";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Product (){
    const params = useParams<{id:string}>();
    const [card,setCard] = useState<ArticleProps>();
    const getCard = async (id:string) =>{
        try{
            const res = await fetch(`${PREFIX}/articles/${id}`);
           
            if (!res.ok){
                return ;
            }
            const  data = await res.json() as ArticleProps;
            setCard(data.article);
        } catch (e){
            console.error(e);
            return;
        }  
    };
    useEffect(() => {
        if (params.id) { // Проверка на наличие id
            getCard(params.id);
        }
    }, [params.id]);

    return (
        <>
          {card ? <ArticleItem {...card} /> : <p>Загрузка...</p>} {/* Обработка состояния загрузки */}
        </>
      );
  }

  
