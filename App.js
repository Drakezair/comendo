import { UseFirebase, UseAuth } from "./src/hooks";
import AppRouter from "./src/router";

export default function App() {
  return (
    <UseFirebase>
      <UseAuth>
        <AppRouter />
      </UseAuth>
    </UseFirebase>
  );
}
