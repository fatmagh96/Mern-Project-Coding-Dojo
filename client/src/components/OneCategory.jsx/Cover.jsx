import { Typography } from "@material-tailwind/react";

export function ImgWithBlurredCaption({category}) {
    
    return (
        <figure className="relative h-[700px] w-full">
            <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                alt="nature image"
            />
            <figcaption className="absolute top-80  w-full  ">
                <div className="flex justify-center items-center">
                    <div className="text-center text-6xl text-white font-extrabold tracking-wide ">
                        {category}
                    </div>
                </div>
            </figcaption>
        </figure>
    );
}





