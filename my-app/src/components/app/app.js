import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddFrom from "../employers-add-form/employers-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Alex D.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Maria M.", salary: 500, increase: true, rise: false, id: 2 },
        {
          name: "Anastasia S.",
          salary: 1100,
          increase: false,
          rise: false,
          id: 3,
        },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArray = [...data, newItem];

      return {
        data: newArray,
      };
    });
  };

  onToggleIncrease = (id) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex((elem) => elem.id === id);
    //   const old = data[index];
    //   const newItem = {
    //     ...old,
    //     increase: !old.increase,
    //   };
    //   const newArr = [data.slice(0, index), newItem, ...data.slice(index + 1)];
    //   return {
    //     data: newArr,
    //   };
    // });

    this.setState(({ data }) => {});
  };

  onToggleRise = (id) => {
    console.log(`Rise this ${id}`);
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployersList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployersAddFrom onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
