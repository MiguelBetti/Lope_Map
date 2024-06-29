import React from 'react';

const tour = [{
  target: '.p6o-search-button',
  title: 'La aventura comienza aquí',
  content: 'Haga click en la lupa para realizar una búsqueda específica por topónimos.',
  disableBeacon: true
}, {
  target: '.p6o-filters-button',
  content: 'O pulse el siguiente botón para abrir el panel de filtros y realizar búsquedas grupales.',
  disableBeacon: true
},{
  target: '.p6o-facets',
  title: 'Categorías',
  content: 'El panel de filtros muestra distintos tipos de datos en diferentes colores, según la categoría seleccionada: género, subgénero, obra, fecha, etc.',
  disableBeacon: true
},{
  target: '.p6o-facets-carousel',
  content: 'Haciendo click en las flechas se pueden recorrer las distintas categorías de filtros disponibles.',
  disableBeacon: true
},{
  target: '.p6o-facets ul',
  content: 'Puede filtrar los datos del mapa haciendo click en las etiquetas.',
  disableBeacon: true
},{
  target: 'body',
  placement: 'center',
  title: '¡Listo!',
  content: 
    <span>
      ¡Gracias por su tiempo!
    </span>
}];

export default tour;