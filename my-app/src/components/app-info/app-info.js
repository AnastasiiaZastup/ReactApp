import "./app-info.css";

const AppInfo = ({ increased, employees }) => {
  return (
    <div className="app-info">
      <h1 className="name-h">Employees of the company</h1>
      <h2>Total number of employees: {employees}</h2>
      <h2>Employees who will receive the reward: {increased}</h2>
    </div>
  );
};

export default AppInfo;
