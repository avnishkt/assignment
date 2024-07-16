import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../componnets/carousel/Carousel";
import { fetchDataFromApi } from "../utils/api";
import ContentWrapper from "./contentWrapper/ContentWrapper";
// import "./style.scss";

const Published = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
let result;
    

const getData = async () => {
    setLoading(true);
    result = await fetchDataFromApi("dishes");
    setData(result.filter(item => item.isPublished));
    setLoading(false);
};
    useEffect(() => {
       
        getData();
    }, []);

    return (
        <div>
              <ContentWrapper>
                <span className="carouselTitle">PUBLISHED</span>
                
            </ContentWrapper>
            <Carousel data={data} loading={loading} />
        </div>
    );
};

export default Published;
