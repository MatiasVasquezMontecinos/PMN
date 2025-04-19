import { SignUp } from "app/components/login/Signup"
import styles from "./login.module.sass"

export default function Login() {
    return (
        <div className={styles.LoginMain}>
            <SignUp/>
        </div>
    )
}