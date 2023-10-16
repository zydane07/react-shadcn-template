import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1>bukan navbar</h1>
        <Button>Click me</Button>
      </div>
    </>
  );
};

export default App;
