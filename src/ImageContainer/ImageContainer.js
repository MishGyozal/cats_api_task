import React, {useEffect, useState} from 'react'
import './images.scss';

function ImageContainer({idCategory,limit, addNewImage}) {

    const [imageCont, setImageContainer] = useState([])
    const [ids, setIds] = useState(1)

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&category_ids=${idCategory}`)
        .then(response => response.json())
        .then(json => setImageContainer(json))
      }, [limit,idCategory]);



      
    const ImageAll = imageCont.map((person, index) => (
        <img  key={person.id} src={person.url} alt="Italian Trulli" />
    ));

    return (
        <div className="imageParent">
            <div className="imageGridContainer">
            {ImageAll}
            </div>
            <div className="BtnDiv">
                <button onClick={addNewImage}>Add New Images</button>
                <div className="blurDiv"></div>
            </div>
        </div>
    )
}

export default ImageContainer
