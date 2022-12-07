import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from './Cards';
import Sdata from './Sdata';

function ncard(val){
    return(<Cards
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        name={val.name}
        link={val.link}
        />
);
}

ReactDOM.render(

<>
    <h1 className='heading_style'>List of top 5 Netflix Series</h1>
  
    
     {Sdata.map(ncard)}



    </>

  , document.getElementById('root')
);
