import Link from 'next/link';
import styles from './CardItem.module.css';
import { ProductProps } from '@/types/product.interface';


function CardItem(props: ProductProps){
	return (
		<Link href = {`/product/[id]`} as={`/product/${props.id} `}  className={styles['link']}>
        
			<div className={styles.card} style={{backgroundImage: `url('${props.image}')`}} >
					<div className={styles.top_content}>
						<p className={styles.category}>
							{props.category}
						</p>
						<h3 className={styles.card_title}>
							{props.title}
						</h3>
					</div>
					<span className={styles.price}>
						{props.price} $
					</span>
			</div>
		</Link>
	);
}

export default CardItem;