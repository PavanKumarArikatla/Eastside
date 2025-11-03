import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import BackButton from "../reusedComponents/BackButton";

export default function Login(){
    return(
        <div className={styles.main}>
            <BackButton />
            <div className={styles.login}>
                <img src="Login1.jpg" alt="Login image" />
                <div>
                    <h1>Create an account</h1>
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className={styles.btn}><b>Create account</b></button>
                </div>
            </div>
        </div>
    )
}