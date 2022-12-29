import React, {Component} from 'react';
import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import {v1} from "uuid";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            {id: v1(), name: "Dima R.", salary: 2000, increase: true, rise: true},
            {id: v1(), name: "Arnold G.", salary: 5400, increase: true, rise: false},
            {id: v1(), name: "John S.", salary: 1300, increase: false, rise: false}
         ]
      }
   }

   deleteItem = (id) => {
      this.setState(({data}) => {
         return {
            data: data.filter(item => item.id !== id)
         }
      })
   }

   addItem = (name, salary) => {
      const newItem = {name, salary, increase: true, rise: false, id: v1()}
      this.setState(({data}) => {
         const newArr = [...data, newItem];
         return {
            data: newArr
         }
      });
   }

   onToggleProp = (id, prop) => {
      this.setState(({data}) => ({
         data: data.map(item => {
            if (item.id === id) {
               return {...item, [prop]: !item[prop]}
            }
            return item;
         })
      }))
   }

   render() {
      const employees = this.state.data.length;
      const increased = this.state.data.filter(item => item.increase).length;
      return (
         <div className="app">
            <AppInfo employees={employees} increased={increased}/>
            <div className="search-panel">
               <SearchPanel/>
               <AppFilter/>
            </div>
            <EmployersList
               data={this.state.data}
               onDelete={this.deleteItem}
               onToggleProp={this.onToggleProp}
            />
            <EmployersAddForm addItem={this.addItem}/>
         </div>
      );
   }
}

export default App;