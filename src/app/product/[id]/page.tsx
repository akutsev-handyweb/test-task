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
            const res = await fetch(`${PREFIX}articles/${id}`);
            console.log("dddddafrhg");
            if (!res.ok){
                return ;
            }
            const  data = await res.json() as ArticleProps;
            setCard(data);
        } catch (e){
            console.error(e);
            return;
        }  
    };

    useEffect (()=> {
        getCard(params.id);
    },[params.id]);
    return(
      <>
      {/* блин непонятный момент почему ругается, буду рад фидбеку с объяснением  */}
        <ArticleItem {...card}/>
      </>
    )
  }

  
