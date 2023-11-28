import { Outlet } from "@remix-run/react";
import TodosHeader from "../components/navigation/TodosHeader";
import { requireUserSession } from "../data/auth.server";

function HomeLayout() {
  return (
    <div>
      <TodosHeader />
      <Home />
    </div>
  );
}

export default HomeLayout;

function Home() {
  return <div>Welcome to rajib's work station</div>;
}

export async function loader({request}) {
 return await requireUserSession(request)
}