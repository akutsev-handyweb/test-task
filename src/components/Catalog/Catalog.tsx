"use client";
import { PREFIX } from '@/API/API';
import styles from './Catalog.module.css';
import {ProductProps} from '@/types/product.interface';
import { useEffect, useState } from 'react';
import CardItem from '../CardItem/CardItem';

const Catalog = () => {
    const [cards, setCards] = useState<ProductProps[]>([]);
    const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const getCards = async () => {
        try {
            const res = await fetch(`${PREFIX}products`);
            if (!res.ok) {
                return;
            }
            const data = await res.json() as ProductProps[];
            setCards(data);

            const categories = Array.from(new Set(data.map(card => card.category)));
            setUniqueCategories(categories);
        } catch (e) {
            console.error(e);
            return;
        }
    };

    useEffect(() => {
        getCards();
    }, []);

    const sortCards = (direction: 'asc' | 'desc') => {
        const sortedCards = [...cards].sort((a, b) => {
            return direction === 'asc' ? a.price - b.price : b.price - a.price;
        });
        setCards(sortedCards);
    };

    const toggleSortDirection = () => {
        const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(newDirection);
        sortCards(newDirection);
    };

    const filteredCards = cards.filter(card => {
        return selectedCategories.length === 0 || selectedCategories.includes(card.category);
    });

    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prev => 
            prev.includes(category) 
                ? prev.filter(cat => cat !== category) 
                : [...prev, category]
        );
    };

    return (
        <section className={styles.all}>

        <CategoryFilter
            categories={uniqueCategories}
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}/>

            <div className={styles.right}>
            <span>Main {'>'} Catalog</span>
            <h1>Каталог товаров</h1>
            
            <button className={styles.sort_btn} onClick={toggleSortDirection}>
                Price ({sortDirection === 'asc' ? 'по возрастанию' : 'по убыванию'})
            </button>

            <div className={styles.cards}>
            {filteredCards.map(c => (
                <CardItem
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    price={c.price}
                    category={c.category}
                    description={c.description}
                    image={c.image}
                />
            ))}
            </div>
            </div>
            
        </section>
    );
};

const CategoryFilter = ({ categories, selectedCategories, onCategoryChange }: {
    categories: string[],
    selectedCategories: string[],
    onCategoryChange: (category: string) => void
}) => {
    return (
        <div className={styles.category_filter}>
            <span>Фильтр по категориям</span>

            <div className={styles.labels}>
            {categories.map(category => (
                <label className={styles.label} key={category}>
                    <input 
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => onCategoryChange(category)}
                    />
                    {category}
                </label> 
            ))}
            </div>
        </div>
    );
};

export default Catalog;
