import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { CalendarIcon, HomeIcon } from "@heroicons/react/24/outline";

export function DefaultSidebar() {
    return (
        <Card className=" sticky top-0  h-[calc(60vh-0rem)] w-full max-w-[20rem] p-4 mt-16 shadow-none ">
            <List>
                <ListItem>
                    <ListItemPrefix>
                        <HomeIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Home
                </ListItem>

                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>


                <ListItem>
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip value="0" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>

                <ListItem>
                    <ListItemPrefix>
                        <CalendarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Book
                </ListItem>

                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>

                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
    );
}
