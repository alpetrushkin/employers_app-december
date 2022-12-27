import React from 'react';
import './employers-list.css'
import EmployersListItem from "../employers-list-item/employers-list-item";

const EmployersList = ({data}) => {

   return (
      <ul className="app-list list-group">
         {data.map(item => {
            return <EmployersListItem {...item}/>
         })}
      </ul>
   );
};

export default EmployersList;