import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading";
import { error_msg } from "../../utils/error.msg";

const Login = () => {
  const {signIn} = useAuth();
  const {login, isLoggingIn} = signIn;
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleLogin = async e => {
    e.preventDefault();

    const form= e.target;
    const email = form.email.value;
    const password = form.password.value;

    if(!email || !password) {
      return error_msg("Please provide email and password");
    }

    const data = {
      email,
      password
    }

    await login(data);
    navigate(state || '/')
  }
    return (
      <section>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content mx-auto flex-col">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl font-bold mb-4">Login now!</h2>
            </div>
            <div className="card bg-base-100 w-full max-w-lg min-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name="email"
                    required
                    placeholder="Email" />
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input"
                      placeholder="Password" name="password"
                      required
                    />
                    <div></div>
                    <button
                      type="submit"
                      disabled={isLoggingIn}
                      className="btn btn-neutral mt-4"
                    >
                      Login {isLoggingIn && <Loading />}
                    </button>
                  </fieldset>
                </form>
                <div className="divider bg-main py-5 rounded-md italic">
                  Don't have an account?{" "}
                  <Link
                    to="/auth/register"
                    className="link-hover font-semibold"
                    state={state}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Login;