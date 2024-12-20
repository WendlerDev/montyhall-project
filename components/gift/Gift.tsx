import styles from "../gift/gift.module.css"

export default function Gift() {
    return (
        <div className={styles.gift}>
            <div className={styles.top}>
                <div className={styles.strapBow2}></div>
            </div>
            <div className={styles.body}></div>
            <div className={styles.strapBow1}></div>


        </div>
    )
}