import styles from "../styles/Footer.module.css"
import Image from 'next/image'
import Link from 'next/link';

export function Footer() {
    return (
        <div className={styles.main}>
            <div>
                <Image src="/images/logo/simple-white.png" alt="Logo of Kitti Subject Reviews" width="50" height="50" />
            </div>
            <div className={styles.column}>
                <h4>Reviews</h4>
                <Link href="/add-review">Post Review</Link>
                <Link href="/reviews">Browse</Link>
            </div>
            <div className={styles.column}>
                <h4>Follow</h4>
                <Link href="/add-review">Instagram</Link>
                <Link href="/reviews">Facebook</Link>
                <Link href="/reviews">Discord</Link>
                <Link href="/reviews">Twitter</Link>
            </div>
        </div>
    )
}