import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";

export function BlogCardlll() {
    return (
        <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="ui/ux review check"
                    className="p-4 cursor-pointer  "
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray">
                Receive Photos
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                Within 24-48 hours of your photoshoot, you’ll be able to access your private online photo gallery to start downloading high-res images, sharing pics and buying personalized products.
                </Typography>
            </CardBody>

        </Card>
    );
}