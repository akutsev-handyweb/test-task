import Link from 'next/link';
import styles from './CardItem.module.css';
import { ArticleProps } from '@/types/article.interface';


function CardItem(props: ArticleProps){
	return (
		<Link href = {`/article/[id]`} as={`/article/${props.id} `}  className={styles['link']}>
        
			<div className={styles.card} style={{backgroundImage: `url('')`}} >
					<div className={styles.top_content}>
						<p className={styles.category}>
							{}
						</p>
						<h3 className={styles.card_title}>
							{props.name}
							
						</h3>
					</div>
					<span className={styles.price}>
						{} 
					</span>
			</div>
		</Link>
	);
}

export default CardItem;