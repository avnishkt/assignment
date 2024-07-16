import React, { useEffect, useState } from "react";
import Carousel from "../componnets/carousel/Carousel";
import { fetchDataFromApi } from "../utils/api";
import ContentWrapper from "./contentWrapper/ContentWrapper";


const Unpublished = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const result = await fetchDataFromApi("dishes");
            setData(result.filter(item => !item.isPublished));
            setLoading(false);
        };
        getData();
    }, []);

    return (
        <div>
           <ContentWrapper>
                <span className="carouselTitle">UNPUBLISHED</span>
                
            </ContentWrapper>
            <Carousel data={data} loading={loading} />
        </div>
    );
};

export default Unpublished;
