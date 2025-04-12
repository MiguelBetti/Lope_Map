import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IoMdCheckboxOutline, IoMdSquareOutline } from 'react-icons/io';

import { BEEN_HERE_TOKEN } from './Tutorial';

const Welcome = props => {

  const [ checked, setChecked ] = useState(false);

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
        <h1>¡Bienvenidas y bienvenidos!</h1>

        <p className="p6o-welcome-intro">
          Este mapa permite explorar los topónimos mencionados en el corpus de comedias de Lope de Vega (Madrid, 1562-1635). Son más de 800 nombres de imperios, reinos, ciudades, villas, parques, calles, edificios y accidentes geográficos, detectados en 338 obras (21 comedias más serán agregadas próximamente).
        </p>
        <p>
          Se basa en el <a href="https://github.com/sib-swiss/dh-dataviz">código</a> desarrollado por Élisa Nury en el marco del proyecto <a href="https://mark16.sib.swiss/" target="_blank">FNS MARK16 VRE</a>, y en las modificaciones efectuadas por Elina Leblanc para el proyecto <a href="https://desenrollandoelcordel.unige.ch" target="_blank">Desenrollando el cordel</a>, dirigido por la profesora Constance Carta. El código está disponible en <a href="https://github.com/MiguelBetti/Lope_peripleo">GitHub</a> (licencia GPLv3).
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
            Sí, haz la visita.
          </button>
        </div>
      </div>
    </div>,

    document.body
  );

}

export default Welcome;
