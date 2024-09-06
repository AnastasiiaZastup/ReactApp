import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddFrom from "../employers-add-form/employers-add-form";

import "./app.css";

function App() {
  const data = [
    { name: "Alex D.", salary: 800, increase: false, id: 1 },
    { name: "Maria M.", salary: 500, increase: false, id: 2 },
    { name: "Anastasia S.", salary: 1100, increase: false, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList data={data} />
      <EmployersAddFrom />
    </div>
  );
}

export default App;
