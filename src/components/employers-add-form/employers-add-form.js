import React, {Component} from 'react';
import './employers-add-form.css'

class EmployersAddForm extends Component{
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         salary: ''
      }
   }

   onChangeValue = (e) => {
      this.setState({
         [e.currentTarget.name] : e.currentTarget.value
      })
   }

   render() {
      const {name, salary} = this.state;

      return (
         <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
               className="add-form d-flex">
               <input type="text"
                      className="form-control new-post-label"
                      placeholder="Как его зовут?"
                      name="name"
                      value={name}
                      onChange={this.onChangeValue}
               />
               <input type="number"
                      className="form-control new-post-label"
                      placeholder="З/П в $?"
                      name="salary"
                      value={salary}
                      onChange={this.onChangeValue}
               />

               <button type="submit"
                       className="btn btn-outline-light">Добавить</button>
            </form>
         </div>
      );
   }
}

export default EmployersAddForm;