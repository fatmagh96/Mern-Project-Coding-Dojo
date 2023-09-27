import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

export function BackgroundBlogCardPhoto_VII() {
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
            Tania Andrew
        </Typography>
    </div>
</CardBody>

        </Card>
    );
}