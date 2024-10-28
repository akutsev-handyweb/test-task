"use client"
import { PREFIX } from "@/API/API";
import ProductItem from "@/components/ProductItem/ProductItem";
import { ProductProps } from "@/types/product.interface";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Product (){
    const params = useParams<{id:string}>();
    const [card,setCard] = useState<ProductProps>();
    const getCard = async (id:string) =>{
        try{
            const res = await fetch(`${PREFIX}products/${id}`);
            if (!res.ok){
                return ;
            }
            const  data = await res.json() as ProductProps;
            setCard(data);
        } catch (e){
            console.error(e);
            return;
        }  
    };

    useEffect (()=> {
        getCard(params.id);
    },[card]);
    return(
      <>
      {/* блин непонятный момент почему ругается, буду рад фидбеку с объяснением  */}
        <ProductItem {...card}/>
      </>
    )
  }

  
