import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    IconButton
} from "@material-tailwind/react";


export function BackgroundBlogCardPhoto_VIII() {
    return (
        <Card
            shadow={false}
            className="cursor-pointer relative grid h-[30rem] w-full max-w-[28rem] items-end justify-start overflow-hidden text-center group  "
        >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="group-hover:scale-110 ease-out duration-300 absolute inset-0 m-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
                
            >
            <IconButton variant="text" className="rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        </IconButton>
                <div className=" absolute inset-0 h-full w-full bg  group-hover:bg-gradient-to-t from-black/30 via-black/30 " />
            </CardHeader>
            <CardBody className="py-14 px-6 md:px-12 group-hover overflow-hidden aspect-video cursor-pointer relative group">
    <div className="gap-2 group-hover:opacity-100 group-hover:translate-y-8 translate-y-20 pb-10 transform transition duration-200 ease-in-out flex items-center">
        
        <Avatar
            size="sm"
            variant="circular"
            alt="tania andrew"
            className="border-2 border-white"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
        <Typography className=" text-white-400 font-light text-s text-white text-center">

        </Typography>
        Tania Andrew
    </div>
</CardBody>

        </Card>
    );
}