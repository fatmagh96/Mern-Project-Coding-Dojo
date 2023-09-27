import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function PhotographerPage_Header() {
    return (
        <Card className="  grid  grid-cols-1 xl:grid-cols-1 sm:grid-cols-2 justify-items-center gap-10 lg:gap-10 mt-28 shadow-none ">          
            <CardHeader className="mt-6 object-cover object-center shadow-none" >
                <div className="flex justify-center items-center">
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                    className="h-40 w-40  rounded-full object-cover border-4  border-gray-300 p-0.5 "
                />
                </div>
                <div className="w-auto">
                    <div className="flex justify-center">
                        <Typography variant="h3" color="blue-gray" className="text-center flex mt-5 ">
                        Ahmed Mohssen
                        </Typography>   
                    </div>
                    <div className="flex justify-center mt-5 w-full">
                        <div className="cursor-auto">   
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg> 
                            </div>                          
                            <Typography variant="h6" color="gray" className="text-center font-light flex mt-3  ">
                                address mail
                            </Typography>
                        </div>
                    
                        <div>
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                            </div>
                                <Typography variant="h6" color="gray" className="text-center font-light flex mt-3 ms-6  ">
                                    location
                                </Typography>  
                        </div>
                    </div>
                </div>

                    

            </CardHeader>
            <CardBody >
                <div className="flex gap-4 justify-center mb-6">
                    <Button>Book</Button>
                    <Button>Contact</Button>
                </div>
                <div>
                    <Typography className="w-[500px]">
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                    </Typography>
                </div>
            </CardBody>
        </Card>
    );
}