import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";

export function BlogCard() {
    return (
        <Card className="max-w-[24rem] overflow-hidden shadow-none">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none " 
            >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="ui/ux review check"
                    className="p-4 h-[300px] w-[300px] rounded-full object-cover object-center ms-3"
                />
            </CardHeader>
            <CardBody>
                <Typography className="text-center" variant="h4" color="blue-gray">
                Book a Photographer
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                Using our online platform, choose a photographer based on portfolio, location and availability. Then book your photoshoot and start chatting with your personal photographer.
                </Typography>
            </CardBody>

        </Card>
    );
}