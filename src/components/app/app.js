import React from 'react';
import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

const App = () => {
   const data = [
      {id:1, name: "Dima R.", salary: 2000, increase: true},
      {id:2, name: "Arnold G.", salary: 5400, increase: false},
      {id:3, name: "John S.", salary: 1300, increase: false}
   ]

  return (
    <div className="app">

      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

       <EmployersList data={data} />
       <EmployersAddForm/>
    </div>
  );
};

export default App;