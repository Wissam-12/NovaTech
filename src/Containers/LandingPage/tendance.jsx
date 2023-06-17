import React from "react";
import Carousel from "react-elastic-carousel";

const Tendance = ({placeList}) => {
    
     const breakPoints = [ 
        {width:500,itemsToShow:1},
        {width:768,itemsToShow:2},
        {width:1200,itemsToShow:3}
    ]
    return (
        <div className="tendance">
            <h1>Lieux tendance</h1>
            <div className="filler"></div>
            <div className="Carousel">
                <Carousel breakPoints={breakPoints} enableAutoPlay={true}>
                    {
                        placeList.map((place) =>(
                            <div className="one">
                                <div className="imageContainer"><img src={place.image} alt={place.name}/></div>
                                <div className="titre">{place.name}</div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
export default Tendance;