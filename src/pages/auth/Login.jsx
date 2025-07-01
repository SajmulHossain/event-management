import { Link, useLocation, useNavigate } from "react-router";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";
import { error_msg } from "../../utils/error.msg";

const Login = () => {
  const { signIn } = useAuth();
  const { login, isLoggingIn } = signIn;
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      return error_msg("Please provide email and password");
    }

    const data = {
      email,
      password,
    };

    await login(data);
    navigate(state || "/");
  };

  return (
    <section>
      <div className="hero bg-main min-h-screen">
        <div className="hero-content w-full flex-col">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl font-bold mb-4">Login now!</h2>
          </div>
          <div className="card bg-base-100 max-w-sm w-full shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <div>
                    <label className="label">Email</label>
                    <label className="input validator join-item">
                      <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                      </svg>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        name="email"
                      />
                    </label>
                    <div className="validator-hint hidden">
                      Enter valid email address
                    </div>
                  </div>

                  <div>
                    <label className="label">Password</label>
                    <label className="input validator">
                      <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                          <circle
                            cx="16.5"
                            cy="7.5"
                            r=".5"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                      <input
                        type="password"
                        required
                        name="password"
                        placeholder="Password"
                        minlength="6"
                        pattern=".{6,}"
                        title="Must be atleast 6 characters"
                      />
                    </label>
                    <p className="validator-hint hidden">
                      Must be atleast 6 characters
                    </p>
                  </div>
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
