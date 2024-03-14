import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IoMdCheckboxOutline, IoMdSquareOutline } from 'react-icons/io';

import { BEEN_HERE_TOKEN } from './Tutorial';

const Welcome = props => {

  const [ checked, setChecked ] = useState(false);

  const logos = props.logos;

  const listLogos = logos.map(logo =>
    <img src={logo.path} key={logo.name} />
  );

  const toggleDoNotShow = () => {
    if (checked)
      localStorage.removeItem(BEEN_HERE_TOKEN);
    else 
      localStorage.setItem(BEEN_HERE_TOKEN, true);
    
    setChecked(!checked);
  }

  return ReactDOM.createPortal(
    <div className="p6o-welcome-wrapper">
      <div className="p6o-welcome">
        <h1>¡Bienvenidos!</h1>

        <p className="p6o-welcome-intro">
        Este mapa permite explorar los topónimos mencionados en una selección de obras dramáticas compuestas por Lope de Vega.
        </p>
        
        <div className="p6o-welcome-buttons">
          <label>
            <input 
              type="checkbox" 
              checked={checked} 
              onChange={toggleDoNotShow} />

            { checked ? <IoMdCheckboxOutline /> : <IoMdSquareOutline /> }

            <span>No vuelvas a preguntar</span>
          </label>
          
          <button 
            className="p6o-no-thanks"
            onClick={props.onNoThanks}>
            No gracias
          </button>

          <button 
            className="p6o-take-tour"
            onClick={props.onTakeTour}>
            Sí, quiero hacer la visita
          </button>
        </div>

        <div className="p6o-welcome-logos">
          {listLogos}
        </div>
      </div>
    </div>,

    document.body
  );

}

export default Welcome;
