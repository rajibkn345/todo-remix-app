import { useLoaderData } from "@remix-run/react";
import { requireUserSession } from "../data/auth.server";
import { getTodos } from "../data/todo.server";

const TodoLists = () => {
  const todos = useLoaderData();

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-center text-3xl text-slate-200">All Todo Lists</h2>
      {todos.map((item) => (
        <ItemList key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoLists;

export async function loader({ request }) {
  const userId = await requireUserSession(request);
  try {
    const todos = await getTodos(userId);
    return todos;
  } catch (error) {
    return new Error(error);
  }
}

function ItemList({ item }) {
  return (
    <div className="card w-96 bg-lime-300 my-2 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>{item.date}</p>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}
