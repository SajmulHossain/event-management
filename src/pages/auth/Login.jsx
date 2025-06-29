import { Link } from "react-router";

const Login = () => {
    return (
      <section>
        <div className="hero place-items-stretch bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl font-bold mb-4">Login now!</h2>
            </div>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <div className="divider italic">Don't have an account? <Link to='/auth/register' className="link-hover font-semibold">Register</Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Login;