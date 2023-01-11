import styles from "../styles/Footer.module.css"
import Image from 'next/image'
import Link from 'next/link';

export function Footer() {
    return (
        <div className={styles.main}>
            <div>
            <Image src="/images/logo/simple-white.png" alt="Logo of Kitti Subject Reviews" width="50" height="50" />
                    
            </div>
        </div>
    )
}