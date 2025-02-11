import styles from "../page.module.css";
import Form from "next/form";


export default function FormComponent() {

    return (
        <div className={styles.page}>
            <Form action={'/submit'}>
                <input type='text' name={'name'}/>
                <button>send</button>
            </Form>
        </div>
    );
}
