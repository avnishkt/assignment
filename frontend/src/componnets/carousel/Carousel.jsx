import React, { useRef, useState, useEffect } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import axios from "axios";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import "./style.scss";
import { fetch } from "../../utils/update";

const Carousel = ({ data, loading }) => {
    const [carouselData, setCarouselData] = useState(data); // State for managing carousel data
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);

    useEffect(() => {
        setCarouselData(data); // Update carouselData state when `data` prop changes
    }, [data]);

    const navigation = (dir) => {
        const container = carouselContainer.current;
        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        );
    };

    const togglePublishStatus = async (id) => {
        try {
            const response = await fetch(`toggle/${id}`); // Use fetchDataFromApi to toggle publish status
            // Update the local state to reflect the change
            if(response){
                setCarouselData(carouselData.map(item => item._id === id ? response : item));
            }
            
        } catch (error) {
            console.error("Error toggling publish status:", error);
        }
    };

    return (
        <div className="carousel">
            <ContentWrapper>
                <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")}
                />
                <BsFillArrowRightCircleFill
                    className="carouselRightNav arrow"
                    onClick={() => navigation("right")}
                />
                {!loading ? (
                    <div className="carouselItems" ref={carouselContainer}>
                        {carouselData?.map((item) => {
                            const posterUrl = item.imageUrl
                                ? item.imageUrl
                                : PosterFallback;
                            return (
                                <div
                                    key={item._id}
                                    className="carouselItem"
                                >
                                    <div className="posterBlock">
                                        <Img src={posterUrl} />
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">
                                            {item.dishName}
                                        </span>
                                        <button
                                            onClick={() => togglePublishStatus(item._id)}
                                            className="toggleButton"
                                        >
                                            {item.isPublished ? "PUBLISHED" : "UNPUBLIS"}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="loadingSkeleton">
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Carousel;
