import React from 'react'

const Snake = ({snakes}) => {
    return (
        <div>
            {snakes.map((dot,i) => {
                const dotStyle = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
                return (
                    <div className="snake-dot" key={i} style={dotStyle}></div>
                )
            })}
        </div>
    )
}

export default Snake;
