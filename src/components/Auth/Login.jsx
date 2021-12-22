import React from "react";
import { useAuth } from "../../contexts/authContext";
import "./Login.css";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    authWithGoogle,
  } = useAuth();
  return (
    <>
      <section className="login">
        <div className="login-container">
          {/* <label className="auth-label">Email</label> */}
          <input
            className="auth-input"
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <p className="error-msg">{emailError}</p>

          {/* <label className="auth-label">Password</label> */}
          <input
            className="auth-input"
            type="password"
            autoFocus
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <p className="error-msg">{passwordError}</p>

          <div className="btn-container">
            {hasAccount ? (
              <>
                <button className="auth-btn" onClick={handleLogin}>
                  Войти
                </button>
                <p className="auth-text">
                Нет аккаунта? Вы можете <span
                    className="auth-span"
                    onClick={() => setHasAccount(!hasAccount)}
                  >создать его</span> бесплатно.
                </p>
              </>
            ) : (
              <>
                <button className="auth-btn" onClick={handleSignUp}>
                  Создать
                </button>
                <p className="auth-text">
                  Есть аккаунт?
                  <span
                    className="auth-span"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Войти
                  </span>
                </p>
              </>
            )}
          </div>
          <p style={{textAlign: 'center', color: '#8F98A0'}}>Войти с помощью
          <img className="google-logo" onClick={authWithGoogle} src="https://cdn-icons-png.flaticon.com/512/2875/2875404.png" alt="google" /></p>
        </div>
      </section>
    </>
  );
};

export default Login;
