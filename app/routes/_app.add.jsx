import { Form } from "@remix-run/react";
import { getUserFromSession, requireUserSession } from "../data/auth.server";
import { addTodo } from "../data/todo.server";
import { redirect } from "@remix-run/node";

const AddTodo = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="card w-96 -mt-10 bg-yellow-600 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Add Todo</h2>
          <Form method="POST" id="add-todo">
            <div className="flex flex-col w-full">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className=" bg-slate-300 py-2"
                id="title"
                name="title"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="desc">Description</label>
              <textarea
                name="desc"
                id="desc"
                cols="20"
                className="bg-slate-300 py-2"
                rows="2"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                className="bg-slate-300 py-2"
              />
            </div>
            <button className="btn btn-success px-8 my-2" type="submit">
              add
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;

export async function action({ request }) {
  const userId = await requireUserSession(request);
  console.log({ userId });
  const formData = await request.formData();
  const todoData = Object.fromEntries(formData)
  await addTodo(userId, todoData);
  return redirect("/lists");
}
