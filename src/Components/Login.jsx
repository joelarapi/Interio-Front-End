import { useState, useEffect } from 'react';
import styles from './Login.module.css';
import { Eye, EyeOff } from "lucide-react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isPasswordFilled, setIsPasswordFilled] = useState(false);
    const [isEmailFilled, setIsEmailFilled] = useState(false);
    const [isFullNameFilled, setIsFullNameFilled] = useState(false);
    const [isConfirmPasswordFilled, setIsConfirmPasswordFilled] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [userType, setUserType] = useState('');

    useEffect(() => {
        setIsEmailFilled(email !== '');
        setIsPasswordFilled(password !== '');
        setIsFullNameFilled(fullName !== '');
        setIsConfirmPasswordFilled(confirmPassword !== '');
    }, [email, password, fullName, confirmPassword]);

    const toggleFormType = () => {
        setIsRegister(!isRegister);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleUserType = (type) => {
        setUserType(type);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    return (
        <div className="outerContainer">
        <div className={styles.container}>
            <div className={`${styles.imageContainer} ${isRegister ? styles.loginBackground : styles.signupBackground}`}>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.formWrapper}>
                    <h2 className={styles.title}>{isRegister ? 'Log in' : 'Create an account'}</h2>
                    <p className={styles.registerText}>{isRegister ? 'Don\'t have an account?  ' : 'Already have an account?  '}
                        <span onClick={toggleFormType}>
                            {isRegister ? 'Register here' : 'Login here'}
                        </span>
                    </p>
                    {isRegister ? (
                        <form onSubmit={handleSubmit} className={`${styles.form} ${styles.login}`}>
                            <div className={styles.inputGroup}>
                                <div className={styles.labelWrapper}>
                                <label className={`${styles.label} ${email ? styles.labelFocused : ''}`}>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className={`${styles.input} ${isEmailFilled ? styles.filled : ''}`}
                                />
                                </div>
                            </div>
                            <div className={styles.inputGroup}>
                                <div className={styles.labelWrapper}>
                                <label className={`${styles.label} ${password ? styles.labelFocused : ''}`}>Password</label>
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
                            </div>
                            <div className={styles.forgotPassword}>
                                <span>Forgot password?</span>
                            </div>
                            <button
                                type="submit"
                                className={`${styles.submitButton} ${styles.loginButton} ${(isEmailFilled && isPasswordFilled) ? styles.active : ''}`}
                                disabled={!(isEmailFilled && isPasswordFilled)}
                            >
                                Continue
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.type}>
                                <div className={`${styles.typeItem} ${userType === 'client' ? styles.selected : ''}`} onClick={() => handleUserType('client')}>
                                    <img src="/Client.png" alt="Client" />
                                    <span>Client</span>
                                </div>
                                <div className={`${styles.typeItem} ${userType === 'business' ? styles.selected : ''}`} onClick={() => handleUserType('business')}>
                                    <img src="/Bussiness.png" alt="Business" />
                                    <span>Business</span>
                                </div>
                            </div>
                            <div className={styles.inputGroup}>
                                <div className={styles.labelWrapper}>
                                <label className={`${styles.label} ${fullName ? styles.labelFocused : ''}`}>Full Name</label>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                    className={`${styles.input} ${isFullNameFilled ? styles.filled : ''}`}
                                />
                                </div>
                            </div>
                            <div className={styles.inputGroup}>
                                <div className={styles.labelWrapper}>
                                <label className={`${styles.label} ${email ? styles.labelFocused : ''}`}>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className={`${styles.input} ${isEmailFilled ? styles.filled : ''}`}
                                />
                                </div>
                            </div>
                            <div className={styles.inputGroup}>
                                <div className={styles.labelWrapper}>
                                <label className={`${styles.label} ${password ? styles.labelFocused : ''}`}>Password</label>
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
                            </div>
                            <div className={styles.inputGroup}>
                                <div className={styles.labelWrapper}>
                                <label className={`${styles.label} ${confirmPassword ? styles.labelFocused : ''}`}>Confirm password</label>
                                <div className={styles.passwordWrapper}>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        className={`${styles.input} ${isConfirmPasswordFilled ? styles.filled : ''}`}
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleConfirmPasswordVisibility}
                                        className={styles.passwordToggle}
                                    >
                                        {showConfirmPassword ? <Eye size={30} /> : <EyeOff size={30} />}
                                    </button>
                                </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className={`${styles.submitButton} ${(isEmailFilled && isPasswordFilled && isFullNameFilled && isConfirmPasswordFilled) ? styles.active : ''}`}
                                disabled={!(isEmailFilled && isPasswordFilled && isFullNameFilled && isConfirmPasswordFilled)}
                            >
                                Continue
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;