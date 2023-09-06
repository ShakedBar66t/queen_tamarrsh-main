import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import "./Carousel.css";

type Slide = {
    src: string;
    alt: string;
};

type CarouselProps = {
    data: Slide[];
    description: string;
    price: number;
    name: string;
    className?: string;
};
const Carousel: React.FC<CarouselProps> = ({ data, description, price, name }) => {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }
    return (
        <div className="flex flex-col gap-4">
            <div className="carousel">
                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
                {data.map((item, idx) => (
                    <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"} />
                ))}
                <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
                <span className="indicators">
                    {data.map((_, idx) => {
                        return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
                    })}
                </span>

            </div>
            <div className="flex text-center gap-1 flex-col">
                <h1 className="text-bold text-lg text-red-100 font-bold ">{name}</h1>
                <h5 className="underline text-green-600">{price}₪</h5>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default Carousel;
