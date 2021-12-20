import { useState, useRef, useContext } from "react"

import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import NotificationContext from "../../store/notification-store"

import Button from "../common/ui/inputs/Button"

import styled from "styled-components"
import { useForm } from "react-hook-form"

const AuthWrapper = styled.div`
  h1 {
    margin: 0;
    text-align: center;
  }
  height: 100%;
  .form-group {
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    width: 94%;
    label {
      font-size: 12px;
      color: var(--col-brand);
      font-weight: 500;
      margin: 3px 0;
    }
    input {
      height: 34px;
      border: none;
      /* outline: 1px solid var(--col-brand); */
      outline: none;
      padding: 0 1rem;
      border-radius: 4px;
    }
    .error-message {
      font-size: 12px;
      color: var(--col-warning);
      font-weight: 500;
      margin-top: 4px;
    
    }
  }
  .action-buttons {
    display: flex;
    flex-direction: column;
    width: 94%;
    margin: 0 auto;
    margin-top: 2rem;
    span {
      font-size: 13px;
      margin-top: 12px;
      color: var(--col-teal);
      /* text-decoration: underline; */
      cursor: pointer;
    }
  }
`

const createUser = async (email, password) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!")
  }

  return data
}

function AuthForm({ setShowModal }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const notificationCtx = useContext(NotificationContext)

  const router = useRouter()

  const emailInputRef = useRef<HTMLInputElement>()
  const passwordInputRef = useRef<HTMLInputElement>()

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState)
  }

  const submitHandler = async (data) => {
    const enteredEmail = data.email
    const enteredPassword = data.password

    if (isLogin) {
      notificationCtx.showNotification({
        title: "Logging in...",
        message: "Logging in",
        status: "pending",
      })
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      })
      if (!result.error) {
        notificationCtx.showNotification({
          title: "Logged IN",
          message: "Logged In",
          status: "success",
        })
        router.replace("/profile")
        setShowModal(false)
      } else {
        notificationCtx.showNotification({
          title: "Error",
          message: result?.error,
          status: "error",
        })
        console.log(result)
      }
    } else {
      try {
        notificationCtx.showNotification({
          title: "Signing in...",
          message: "Signing in",
          status: "pending",
        })
        const result = await createUser(enteredEmail, enteredPassword)
        console.log(result)
        if (!result.error) {
          notificationCtx.showNotification({
            title: "Signed IN",
            message: "Signed In",
            status: "success",
          })
          // router.replace("/profile")
          setIsLogin(true)
        }
      } catch (error) {
        console.log(error)
        notificationCtx.showNotification({
          title: "Error",
          message: error?.message,
          status: "error",
        })
      }
    }
  }

  return (
    <AuthWrapper>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="error-message">This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
           {errors.password && <span className="error-message">This field is required</span>}
        </div>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="re-password"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && <span className="error-message">This field is required</span>}
          </div>
        )}
        <div className="action-buttons">
          {/* <button>{isLogin ? "Login" : "Create Account"}</button> */}
          <Button type="primary" text="Login" size="small" />
          <span className="toggle-link" onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </span>
        </div>
      </form>
    </AuthWrapper>
  )
}

export default AuthForm
