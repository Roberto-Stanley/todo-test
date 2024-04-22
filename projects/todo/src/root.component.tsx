import DefaultLayout from "./layout/DefaultLayout";
import { TodosProvider } from "./context/todoContext";

export default function Root(props) {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  if (!token || !user) window.history.pushState(null, null, "/login");

  return (
    <TodosProvider>
      <DefaultLayout />
    </TodosProvider>
  );
}
