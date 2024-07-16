import React, { useState } from "react";
import ContentWrapper from "./contentWrapper/ContentWrapper";
import Carousel from "./carousel/Carousel";
import useFetch from "../hooks/useFetch";



const P= () => {

    const { data, loading } = useFetch(`/dishes`);
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">ALL DISHES</span>
                
            </ContentWrapper>
            <Carousel
                data={data}
                loading={loading}
            />
        </div>
    );
};
 export default P;