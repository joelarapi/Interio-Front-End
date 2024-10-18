import { useState, useEffect } from 'react';
import styles from './Login.module.css';
import { Eye, EyeOff } from "lucide-react";


function Login() {
    const [email, setEmail] = useState('');
    const [createEmail, setCreateEmail] = useState('');
    const [createPassword, setCreatePassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isPasswordFilled, setIsPasswordFilled] = useState(false);
    const [isEmailFilled, setIsEmailFilled] = useState(false);
    const [isCreateEmailFilled, setIsCreateEmailFilled] = useState(false);
    const [isCreatePasswordFilled, setIsCreatePasswordFilled] = useState(false);
    const [isConfirmPasswordFilled, setIsConfirmPasswordFilled] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [userType, setUserType] = useState('client');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isFirstNameFilled, setIsFirstNameFilled] = useState(false);
    const [isLastNameFilled, setIsLastNameFilled] = useState(false);
    const [businessName, setBusinessName] = useState('');
    const [location, setLocation] = useState('');
    const [isBusinessNameFilled, setIsBusinessNameFilled] = useState(false);
    const [isLocationFilled, setIsLocationFilled] = useState(false);

    useEffect(() => {
        setIsEmailFilled(email !== '');
        setIsPasswordFilled(password !== '');
        setIsConfirmPasswordFilled(confirmPassword !== '');
        setIsCreatePasswordFilled(createPassword !== '');
        setIsCreateEmailFilled(createEmail !== '');
        setIsFirstNameFilled(firstName !== '');
        setIsLastNameFilled(lastName !== '');
        setIsBusinessNameFilled(businessName !== '');
        setIsLocationFilled(location !== '');
    }, [email, password, businessName,location, confirmPassword, createEmail, createPassword, firstName, lastName]);

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
                                    <span className={styles.left}>Client</span>
                                </div>
                                <div className={`${styles.typeItem} ${userType === 'business' ? styles.selected : ''}`} onClick={() => handleUserType('business')}>
                                    <img src="/Bussiness.png" alt="Business" />
                                    <span className={styles.right}>Business</span>
                                </div>
                            </div>
                            {userType === 'client' ? (<div className={styles.inputGroupClient}>
                                <div className={styles.labelWrapper}>
                                    <label className={`${styles.label} ${firstName ? styles.labelFocused : ''}`}>First
                                        Name</label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                        className={`${styles.input} ${isFirstNameFilled ? styles.filled : ''}`}
                                    />
                                </div>
                                <div className={styles.labelWrapper}>
                                    <label className={`${styles.label} ${lastName ? styles.labelFocused : ''}`}>Last
                                        Name</label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                        className={`${styles.input} ${isLastNameFilled ? styles.filled : ''}`}
                                    />
                                </div>
                            </div>) : (
                                <div className={styles.inputGroupClient}>
                                    <div className={styles.labelWrapper}>
                                        <label className={`${styles.label} ${businessName ? styles.labelFocused : ''}`}>Business
                                            Name</label>
                                        <input
                                            type="text"
                                            value={businessName}
                                            onChange={(e) => setBusinessName(e.target.value)}
                                            required
                                            className={`${styles.input} ${isBusinessNameFilled ? styles.filled : ''}`}
                                        />
                                    </div>
                                    <div className={styles.labelWrapper}>
                                        <label className={`${styles.label} ${location ? styles.labelFocused : ''}`}>Location</label>
                                        <input
                                            type="text"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            required
                                            className={`${styles.input} ${isLocationFilled ? styles.filled : ''}`}
                                        />
                                    </div>
                                </div>
                            )
                            }
                            <div className={styles.inputGroup}>
                                <div className={styles.labelWrapper}>
                                    <label
                                        className={`${styles.label} ${createEmail ? styles.labelFocused : ''}`}>Email</label>
                                    <input
                                        type="email"
                                        value={createEmail}
                                        onChange={(e) => setCreateEmail(e.target.value)}
                                        required
                                        className={`${styles.input} ${isCreateEmailFilled ? styles.filled : ''}`}
                                    />
                                </div>
                            </div>
                            <div className={styles.inputGroup}>
                                <div className={styles.labelWrapper}>
                                    <label
                                        className={`${styles.label} ${createPassword ? styles.labelFocused : ''}`}>Password</label>
                                    <div className={styles.passwordWrapper}>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={createPassword}
                                            onChange={(e) => setCreatePassword(e.target.value)}
                                            required
                                        className={`${styles.input} ${isCreatePasswordFilled ? styles.filled : ''}`}
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
                                className={`${styles.submitButton} ${(isEmailFilled && isPasswordFilled && isLocationFilled && isBusinessNameFilled && isConfirmPasswordFilled && isCreatePasswordFilled && isCreateEmailFilled && isFirstNameFilled && isLastNameFilled) ? styles.active : ''}`}
                                disabled={!(isEmailFilled && isPasswordFilled && isConfirmPasswordFilled && isCreatePasswordFilled && isCreateEmailFilled && isFirstNameFilled && isLastNameFilled && isBusinessNameFilled && isLocationFilled)}
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