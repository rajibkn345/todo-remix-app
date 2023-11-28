import { Outlet } from "@remix-run/react";
import TodoHeader from "../components/navigation/TodosHeader";
import { requireUserSession } from "../data/auth.server";
export default function AppLayout() {
  return (
    <>
      <TodoHeader />
      <Outlet />
    </>
  );
}

export async function loader({request}) {
  return await requireUserSession(request)
 }