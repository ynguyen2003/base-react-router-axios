import { useState, useContext } from "react"
import { loginApi } from "../services/UserServices"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const Login = () => {
    const navigate = useNavigate()
    const { loginContext } = useContext(UserContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [loadingAPI, setLoadingAPI] = useState(false)

    // useEffect(() => {
    //     let token = localStorage.getItem("token")
    //     if (token) {
    //         navigate("/")
    //     }
    // }, [])

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Email and Password is required!")
            return
        }
        setLoadingAPI(true)
        let res = await loginApi(email, password)
        if (res && res.token) {
            loginContext(email, res.token)
            navigate("/")
        } else {
            //error
            if (res && res.status === 400) {
                toast.error(res.data.error)
            }
        }
        setLoadingAPI(false)
    }
    const handleGoBack = () => {
        navigate("/")
    }
    return (
        <>
            <div className="login-container col-12 col-sm-4">
                <div className="title">Log in</div>
                <div className="text">Email or Username (eve.holt@reqres.in)</div>
                <input
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <div className="input-password">
                    <input
                        type={isShowPassword === true ? "text" : "password"}
                        placeholder="Password..."
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <i className={isShowPassword === true ? "far fa-eye" : "far fa-eye-slash"}
                        onClick={() => setIsShowPassword(!isShowPassword)}
                    ></i>
                </div>

                <button
                    className={email && password ? "active" : ""}
                    disabled={email && password ? false : true}
                    onClick={() => handleLogin()}
                >
                    {loadingAPI && <i class="fa-solid fa-sync fa-spin"></i>}
                    &nbsp;Login
                </button>
                <div className="back">
                    <i className="fas fa-angle-double-left"></i>
                    <span onClick={() => handleGoBack()}>&nbsp;Go Back</span>
                </div>
            </div>
        </>
    )
}

export default Login