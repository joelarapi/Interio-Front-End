import { useState, useEffect } from 'react';
import styles from './Login.module.css';
import {Eye,EyeOff} from "lucide-react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordFilled, setIsPasswordFilled] = useState(false);
    const [isEmailFilled, setIsEmailFilled] = useState(false);

    useEffect(() => {
        setIsEmailFilled(email !== '');
        setIsPasswordFilled(password !== '');
    },[email, password]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }


    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img
                   src=""
                    alt="login"
                    className={styles.image}
                />
            </div>
            <div className={styles.formContainer}>
                <div className={styles.formWrapper}>
                    <h2 className={styles.title}>Login</h2>
                    <p className={styles.registerText}>Don't have an account? <span>Register here</span></p>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={`${styles.input} ${isEmailFilled ? styles.filled : ''}`}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Password</label>
                            <div className={styles.passwordWrapper}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className={`${styles.input} ${isPasswordFilled ? styles.filled : ''}`}
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className={styles.passwordToggle}
                                >
                                    {showPassword ? <Eye size={30} /> : <EyeOff size={30} />}
                                </button>
                            </div>
                        </div>
                        <div className={styles.forgotPassword}>
                            <span>Forgot password?</span>
                        </div>
                        <button
                            type="submit"
                            className={`${styles.submitButton} ${(isEmailFilled && isPasswordFilled) ? styles.active : ''}`}
                            disabled={!(isEmailFilled && isPasswordFilled)}
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;