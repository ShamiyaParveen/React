import React from 'react'
import './ExploreMenu'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-test'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mollitia eligendi quasi, maiores repudiandae dolores obcaecati nemo quo tempore cumque reiciendis perferendis.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return(
                    <div key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt="menu-item" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu