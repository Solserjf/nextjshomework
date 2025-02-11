import styles from "./page.module.css";
import {Menu} from "@/menu/Menu";

export default function Home() {
    return (
        <div className={styles.page}>
            <div>
                <Menu/>
            </div>
        </div>
    );
}
