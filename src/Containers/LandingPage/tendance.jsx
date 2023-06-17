import React from "react";
import Carousel from "react-elastic-carousel";

const Tendance = ({eventList}) => {
    return (
        <div className="tendance">
            <h1>Lieux tendance</h1>
            <div className="Carousel">
                <Carousel >
                    {
                        eventList.map((event) =>(
                            <div className="new">
                                <img src={event.image} alt={event.name}/>
                                <div className="eventInfos">
                                    <div className="titre">{event.name}</div>
                                    <div className="line"></div>
                                    <div>{event.description}</div>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
export default Tendance;