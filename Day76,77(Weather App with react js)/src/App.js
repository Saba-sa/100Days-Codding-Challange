import Siderbar from "./components/sidebar/Siderbar";
import Search from "./components/search/Search";
import Currentwether from "./components/cWether/Currentwether.jsx";
import Forcast from "./components/forecast/Forcast.jsx";
import { useAppStore } from "./hooks/Context.jsx";
import Load from "./components/Loading/Load.jsx";
function App() {
  const { status } = useAppStore();
  return (
    <div className="m-0 h-screen bg-slate-900 flex overflow-hidden">
      <div className="w-1/12">
        <Siderbar />
      </div>
      <div className="w-4/6">
        <Search />
        {status ? <Load /> : <Currentwether />}
      </div>
      <div className="w-2/6 p-6">
        <Forcast />
      </div>
    </div>
  );
}

export default App;
