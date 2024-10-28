import Link from 'next/link';
import styles from './Header.module.css'
import Image from 'next/image';

const Header =() => {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.top_header}>
                <Image src="/logo.png" alt="logo" width={116} height={57}/>
                <input type="text" />
                <div>
                    Favorite
                </div>
            </div>
            <hr className={styles.line}/>
            <ul className={styles.ul}>
                <Link href="/">Main page</Link>
                <Link href="/">Delivery</Link> 
                <Link href="/">Contact</Link> 
                <Link href="/">Blog</Link> 
            </ul>
            <hr className={styles.line}/>
            
        </header>
        </>
    );
}
export default Header;
