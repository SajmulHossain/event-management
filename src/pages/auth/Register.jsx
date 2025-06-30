import { Link } from "react-router";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";
import { error_msg } from "../../utils/error.msg";

const Register = () => {
  const { signUp } = useAuth();
  const { register, isPending } = signUp;

  const handleLogin = (e) => {
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

    register(data);
  };
  return (
    <section>
      <div className="hero place-items-stretch bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl font-bold mb-4">Login now!</h2>
          </div>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Name"
                    required
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    required
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Photo URL"
                    name="photo_url"
                    required
                  />
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
                <Link to="/auth/login" className="link-hover font-semibold">
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
