import { Carousel, Typography, Button, Input } from "@material-tailwind/react";

export function CarouselWithContent() {
    return (
        <>
            <Carousel
                autoplay
                loop
                className="xl h-[600px] relative">
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                        alt="image 1"
                        className="h-full w-full object-cover ;"
                    />

                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />

                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />

                </div>
            </Carousel>
            {/* <div className="absolute  mb- inset-0 grid h-full w-full place-items-center">
                <div className="w-3/4 text-left md:w-2/4 ">
                    <div className="flex justify-center gap-1 ">
                        <div className="relative flex w-full gap-2 md:w-max text-white ">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Necessitatibus qui perspiciatis molestiae itaque. Ea nostrum accusantium quo harum iure modi cum neque. 
                                Praesentium illum laboriosam perspiciatis earum eius fugit sint!
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="absolute mt-70 inset-0 grid h-full w-full place-items-center">
                <div className="w-3/4 text-center md:w-2/4 ">
                    <div className="flex justify-center gap-1 ">
                        <div className="relative flex w-full gap-2 md:w-max ">
                            <Input
                                
                                color="white"
                                type="search"
                                label="Type here..."
                                className="pr-20 rounded-m ;"
                                containerProps={{className: "min-w-[500px] min-h-[40px]   " }}
                            />
                            <Button size="m" className="!absolute right-1   rounded-m " color="white" >
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}