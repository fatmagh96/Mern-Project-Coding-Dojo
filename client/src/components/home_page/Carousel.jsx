import { Carousel, Typography, Button, Input } from "@material-tailwind/react";

export function CarouselWithContent() {
    return (
        <>
            <Carousel
                autoplay
                loop
                className="l h-[650px] relative">
                <div className="relative h-full w-full">
                    <img
                        src="./src/assets/home_page-imgs/carousel/pexels-photo-604763.jpeg"
                        alt="image 1"
                        className="h-full w-full object-cover ;"
                    />

                </div>
                    <div className="relative h-full w-full">
                    <img
                        src="./src/assets/home_page-imgs/carousel/pexels-photo.jpg"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />

                </div>
                <div className="relative h-full w-full">
                    <img
                        src="./src/assets/home_page-imgs/carousel/pexels-photo-935985.jpeg"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />

                </div>

                <div className="relative h-full w-full">
                    <img
                        src="./src/assets/home_page-imgs/carousel/pexels-photo-1086586.webp"
                        alt="image 4"
                        className="h-full w-full object-cover"
                    />

                </div>
            </Carousel>
            <div className="absolute mt-70 inset-0 grid h-full w-full place-items-center">
                <div className="w-3/4 text-center md:w-2/4 ">
                    <div className="flex justify-center gap-1 ">
                        <div className="relative flex w-full gap-2 md:w-max backdrop-filter backdrop-blur-md bg-opacity-80">
                            <Input
                                
                                color="white"
                                type="search"
                                label="Type here..."
                                className="pr-20 rounded-m ;"
                                containerProps={{className: "min-w-[500px] min-h-[40px]   " }}
                            />
                            <Button size="m" className="!absolute right-0 rounded-m " color="white" >
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}