import React from 'react';
import { useDrag } from 'react-dnd';


const Picture = ({ id, url }) => {

    // this is the dnd functionality as a component applied to each photo
    const  [{isDragging}, drag ] = useDrag(() => ({
        type: 'image',
        item: {id: id},
        // collect is optional, keeps track of if it's dragging or not
        collect: (monitor) => ({
            // do I need exclamation points? 
            isDragging: !!monitor.isDragging(),
        }),


    }))

  return (
    <img 
        ref={drag}
        src={url} 
        alt='dToon here' 
        width='150px' 
        style={{border: isDragging ? '5px solid gold' : '0px'}}/>
  )
}

export default Picture
