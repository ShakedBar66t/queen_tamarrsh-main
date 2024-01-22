import React, { useRef, useState } from "react";
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
    const [mouseSlide, setMouseSlide] = useState(0)
    const [currentImgId, setCurrentImgId] = useState<string | null>(null)
    const intervalRef = useRef<NodeJS.Timer | null>(null)

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }

    const clickImage = (imgId: string) => {
        const prevInterval = intervalRef.current
        if (prevInterval) clearInterval(prevInterval)
        setCurrentImgId(imgId)
        const intervalId = setInterval(()=>{
            setMouseSlide(mouseSlide === data.length - 1 ? 0 : mouseSlide + 1)
        }, 1500)
        intervalRef.current = intervalId
    }

    const mouseOver = (imgId: string) => {
        setCurrentImgId(imgId)
        const intervalId = setInterval(()=>{
            setMouseSlide(mouseSlide === data.length - 1 ? 0 : mouseSlide + 1)
        }, 1500)
        intervalRef.current = intervalId
    }

    const mouseLeave = () => {
        setCurrentImgId(null)
        const intervalId = intervalRef.current
        if (intervalId) clearInterval(intervalId)
    }

    const currentSlide = currentImgId ? mouseSlide : slide

    return (
        <div className="flex flex-col gap-4">
            <div className="carousel">
                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
                {data.map((item, idx) => (
                    <div key={idx} onMouseOver={() => mouseOver(item.src)} onMouseLeave={mouseLeave} onClick={()=> clickImage(item.src)}>
                        <img src={item.src} loading="lazy" alt={item.alt} style={{
                            aspectRatio: "auto",
                            height: "auto",
                            transition: '0.3s',
                            transform: `scale(${(currentImgId === item.src) ? 1.05 : 1})`
                        }} className={(currentSlide === idx) ? "slide" : "slide slide-hidden"} />
                    </div>
                ))}
                <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
                <span className="indicators">
                    {data.map((_, idx) => {
                        return <button key={idx} onClick={() => setSlide(idx)} className={currentSlide === idx ? "indicator" : "indicator indicator-inactive"}></button>
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
