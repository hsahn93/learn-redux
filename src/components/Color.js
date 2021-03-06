import React from 'react'
import './Color.css'
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const PaletteItem = ({color, active, onClick}) => {
  return (
    <div
      className={`PaletteItem${active ? 'active' : ''}`}
      style={{backgroundColor: color}}
      onClick={onClick}
    />
  );
};


const Palette = ({selected}) => {
  return (
    <div className='Palette'>
      <h2>색깔을 골라골라</h2>
      <div className='colors'>
        {colors.map((color) => (
          <PaletteItem color={color} key={color} active={selected === color} />
        ))}
      </div>
    </div>
  );
};

export default Palette;