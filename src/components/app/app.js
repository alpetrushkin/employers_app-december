import React, {Component} from 'react';
import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

class App extends Component{
   constructor(props) {
      super(props);
      this.state = {
         data: [
            {id: 1, name: "Dima R.", salary: 2000, increase: true},
            {id: 2, name: "Arnold G.", salary: 5400, increase: false},
            {id: 3, name: "John S.", salary: 1300, increase: false}
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

 render() {
    return (
       <div className="app">
          <AppInfo/>
          <div className="search-panel">
             <SearchPanel/>
             <AppFilter/>
          </div>
          <EmployersList
             data={this.state.data}
             onDelete={this.deleteItem}
          />
          <EmployersAddForm/>
       </div>
    );
 }
}

export default App;