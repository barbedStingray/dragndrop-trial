import React, { useState } from 'react';
import Picture from '../components/Picture';
import { useDrop } from 'react-dnd';


// import esmeralda from '../Icons/esmeralda5.png';
// import janePorter from '../Icons/janePorter5.png';
// import maleficent from '../Icons/maleficent5.png';


const pictureList = [
    {
        id: 1,
        url: 'https://res.cloudinary.com/dzh1qe1zp/image/upload/v1712098225/dToons/theHunchbackofNotreDame/Esmeralda/azcik6mazdrxnuefo1s5.png'
    },
    {
        id: 2,
        url: 'https://res.cloudinary.com/dzh1qe1zp/image/upload/v1712098915/dToons/Cinderella/FairyGodmother/blhkzqf14rngrcn5zbav.png'
    },
    {
        id: 3,
        url: 'https://res.cloudinary.com/dzh1qe1zp/image/upload/v1712098672/dToons/FindingNemo/Bruce/kkxn0abgql87hkdctqqi.png'
    },
]


const DragDrop = () => {

    // this represents what images are in the board (this will be your deck);
    const [board, setBoard] = useState([])

    // this is the drop functionality
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'image',
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),


    }));

    // adds the correct id to the list
    const addImageToBoard = (id) => {
        console.log('adding image id', id);
        const PictureList = pictureList.filter((picture) => id === picture.id);
        console.log(PictureList[0]);
        setBoard((board) => [...board, PictureList[0]]);
    }



    return (
        <>
            {/* div that contains the pictures */}
            <div className='pictures'>
                {pictureList.map((picture) => {
                    return <Picture url={picture.url} id={picture.id} />
                })}

            </div>

            {/* div for the drop */}
            <div className='board' ref={drop}>
                {board.map((picture) => {
                    return <Picture url={picture.url} id={picture.id} /> 
                })}
            </div>
        </>
    )
}

export default DragDrop
