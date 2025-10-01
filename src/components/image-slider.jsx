import { useState } from "react";

export default function ImageSlider(props){

    const [activeImage, setActiveImage] = useState(0)
    const images = props.images;

    return(
        <div className="flex flex-col bg-gray-100 p-3 rounded-md shadow-md">
            <img src={images[activeImage]} alt="product images" className="h-72 object-cover rounded-sm shadow-md"/>
            <div className="w-full h-[100px] backdrop-blur-lg flex justify-evenly items-center">
                {images.map((image, index)=>(
                    <img
                        onClick={()=>(setActiveImage(index))}
                        key={index}
                        src={image}
                        className="object-cover h-20 w-20 rounded-sm cursor-pointer"
                    />
                ))}
            </div>

        </div>
    )
}