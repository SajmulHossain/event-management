import { Link, useLocation, useNavigate } from "react-router";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";
import { error_msg } from "../../utils/error.msg";

const Register = () => {
  const { signUp } = useAuth();
  const { register, isPending } = signUp;
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo_url = form.photo_url.value;

    if (!name || !email || !password || !photo_url) {
      return error_msg("You must give all values");
    }

    const data = {
      name,
      email,
      password,
      photo_url,
    };

    await register(data);
    navigate(state || "/");
  };
  return (
    <section>
      <div className="hero bg-main min-h-screen">
        <div className="hero-content w-full flex-col">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl font-bold mb-4">Register now!</h2>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <div>
                    <label className="label">Name</label>
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
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </g>
                      </svg>
                      <input
                        type="text"
                        required
                        placeholder="Name"
                        pattern="[A-Za-z][A-Za-z]*"
                        minlength="3"
                        maxlength="40"
                        title="Only letters, numbers or dash"
                      />
                    </label>
                    <p className="validator-hint hidden">
                      Must be 3 to 30 characters
                      <br />
                      containing only letters
                    </p>
                  </div>

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
                  <div>
                    <label className="label">Photo URL</label>
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
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </g>
                      </svg>
                      <input
                        type="url"
                        required
                        placeholder="Photo URL"
                        name="photo_url"
                        pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                        title="Must be valid URL"
                      />
                    </label>
                    <p className="validator-hint hidden">Must be valid URL</p>
                  </div>
                  <button
                    disabled={isPending}
                    type="submit"
                    className="btn btn-neutral mt-4"
                  >
                    Register {isPending && <Loading />}
                  </button>
                </fieldset>
              </form>
              <div className="divider bg-main py-5 rounded-md italic">
                Already have an account?
                <Link
                  to="/auth/login"
                  className="link-hover font-semibold"
                  state={state}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
