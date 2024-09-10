import { lazy, Suspense } from "react";
const NabBar = lazy(() => import("./component/Navbar/Navbar"));
import "./App.css";
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading......</div>}>
        <NabBar />
      </Suspense>
    </>
  );
}

export default App;
