import "./Login.css";
import LoginLayout from "./LoginLayout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { loginAPI } from "../../Api/Service";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Redux/Reducers/authSlice";
import { useEffect } from "react";
import Constant from "../../utils/Constant";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const reduxInfo = Constant.reduxData();

  useEffect(() => {
    if (reduxInfo?.authReducer?.user?.token) {
      navigate("/Home");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required Field").email("Please enter a valid email address"),
      password: Yup.string().required("Required field"),
    }),
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (values) => {
    try {
      debugger;
      const response = await loginAPI(values);

      if (response.status === "1") {
        if (location?.state?.redirectToCar) {
          navigate("/car", { state: location.state.data });
        } else {
          navigate("/Home");
        }

        dispatch(setUser(response.data));
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error(error.msg || error.message || "Something went wrong");
    }
  };

  // JSX code for login form
  const renderForm = (
    <LoginLayout>
      <div className="contact-form-info">
        <form onSubmit={formik.handleSubmit}>
          <div className="input-fields-login">
            <div className="contact-label-login">
              <label htmlFor="name">
                Your Name <br />
              </label>
            </div>
            <div className="contact-input-login">
              <input
                name="email"
                placeholder="Your Name"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.email && formik.errors.email && (
                <>
                  <br />
                  <span className="text-red">{formik.errors.email}</span>
                </>
              )}
            </div>
          </div>
          <div className="input-fields-password">
            <div className="contact-label-login">
              <label htmlFor="email">Your password</label>
            </div>
            <div className="contact-input-login">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <>
                  <br />
                  <span className="text-red">{formik.errors.password}</span>
                </>
              )}
            </div>
            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <Link to={"/forget"}>Forget Password</Link>
            </div>
            <div className="button-container">
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    </LoginLayout>
  );

  return (
    <div className="app">
      <div className="login-form d-flex justify-content-center align-items-center flex-column">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>
  );
};

export default Login;
