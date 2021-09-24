import React from 'react'

const Food = ({dot}) => {
    const foodStyle = {
        left: `${dot[0]}%`,
        top: `${dot[1]}%`
    }
    return (
        <div className="food-dot" style={foodStyle}>            
        </div>
    )
}

export default Food;
