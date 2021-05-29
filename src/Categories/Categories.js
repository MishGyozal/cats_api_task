import React from 'react'
import { NavLink } from 'react-router-dom';
import './categories.scss';


export default function Categories({category, changeCategory}) {



    const categoryAll = category.map((person, index) => (
        <NavLink className="links" activeClassName="activeLink"
            onClick={()=>{changeCategory(person.id)}}
            to={JSON.stringify(person.id)}
            key={person.id}>{person.name}
        </NavLink>
    ));

    return (
        
        <div className="containerCategories">
        <div className="home">Home</div>
        {categoryAll}
        </div>
    )
}
