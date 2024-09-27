import { useContext } from "react";
import { loginApi } from "../services/UserServices";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const navigate = useNavigate();
    const { loginContext } = useContext(UserContext);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Email is required")
                .email("Invalid email address"),
            password: Yup.string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters"),
        }),
        onSubmit: async (values) => {
            let { email, password } = values;
            const res = await loginApi(email, password);
            if (res && res.token) {
                loginContext(email, res.token);
                navigate("/");
            } else {
                if (res && res.status === 400) {
                    toast.error(res.data.error);
                }
            }
        }
    });

    const handleGoBack = () => {
        navigate("/");
    };

    return (
        <div className="login-container col-12 col-sm-4">
            <div className="title">Log in</div>
            <form onSubmit={formik.handleSubmit}>
                <div className="text">Email (eve.holt@reqres.in)</div>
                <input
                    type="text"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.errors.email && <p className='errorMsg'>{formik.errors.email}</p>}

                <div className="input-password">
                    <input
                        type={formik.values.password ? "text" : "password"}
                        placeholder="Password..."
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </div>
                {formik.errors.password && <p className='errorMsg'>{formik.errors.password}</p>}

                <button
                    type="submit"
                    className={formik.isValid && formik.dirty ? "active" : ""}
                    disabled={!formik.isValid || !formik.dirty}
                >
                    {formik.isSubmitting ? <i className="fa-solid fa-sync fa-spin"></i> : "Login"}
                </button>
            </form>
            <div className="back">
                <i className="fas fa-angle-double-left"></i>
                <span onClick={handleGoBack}>&nbsp;Go Back</span>
            </div>
        </div>
    );
};

export default Login;
