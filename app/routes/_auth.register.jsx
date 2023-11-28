import { Form, Link } from "@remix-run/react";
import { signup } from "../data/auth.server";

const Register = () => {
  return (
    <div className=" flex justify-center items-center h-screen w-full bg-orange-200">
      <div className="card w-96 shadow-xl bg-slate-800">
        <div className="card-body">
          <div className="card-title">Register</div>
          <Form method="post" className="form " id="register">
            <div className="flex flex-col my-2">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="flex my-2 flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                minLength={7}
              />
            </div>
            <div className="form-actions my-2">
              <button className="btn btn-primary px-8" type="submit">
                Register
              </button>
            </div>
            <p>Already have an account? </p>
            <p className="underline">
              <Link to={"/signin"}>Sign In</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;

export async function action({ request }) {
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  try {
    return await signup(credentials);
  } catch (error) {
    console.log(error);
  }
}
