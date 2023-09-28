import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const TABS = [
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Accepted",
    value: "accepted",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
];

const TABLE_HEAD = ["Client", "Category", "Status", "Created At", "Actions"];

const BookingsTable = ({ baseUrl }) => {
  const [bookings, setBookings] = useState([]);
  const [pendingBookings, setPendingBookings] = useState([]);
  const [acceptedBookings, setAcceptedBookings] = useState([]);
  const [rejectedBookings, setRejectedBookings] = useState([]);
  const [currentTabValue, setCurrentTabValue] = useState("pending");

  useEffect(() => {
    axios.get(baseUrl + 'bookings/photographer', { withCredentials: true })
      .then(response => {
        setBookings(response.data); // Update the bookings state with the response data
        filterBookings(response.data);
      })
      .catch(error => {
        console.log(error);
        console.log('Error');
      });
  }, []);

  // Function to filter bookings based on the selected tab value
  const filterBookings = (allBookings) => {
    const pending = bookings;
    // const pending = allBookings.filter(booking => booking.status === "pending");
    const accepted = allBookings.filter(booking => booking.status === "accepted");
    const rejected = allBookings.filter(booking => booking.status === "rejected");
    
    setPendingBookings(pending);
    setAcceptedBookings(accepted);
    setRejectedBookings(rejected);
  };
  console.log(acceptedBookings,'😫😫😫😫😫😫')

  // Function to handle the "Accept" button click
  const acceptBooking = (id) => {
    axios.put(baseUrl + 'bookings' + id, { status: "accepted" }, { withCredentials: true })
      .then(response => {
        console.log(response);
        // After successfully accepting, refresh the bookings
        axios.get(baseUrl + 'bookings', { withCredentials: true })
          .then(response => {
            setBookings(response.data);
            filterBookings(response.data);
          })
          .catch(error => {
            console.log(error);
            console.log('Error');
          });
      })
      .catch(error => console.log(error));
  };

  // Function to handle the tab change
  const handleTabChange = (value) => {
    setCurrentTabValue(value);
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value={currentTabValue} onChange={handleTabChange} className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          {/* ... (table header code) */}
          <tbody>
            {currentTabValue === "pending"
              ? pendingBookings.map(({ client, category, status, createdAt, _id }, index) => {
                const isLast = index === pendingBookings.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={index}>
                                        <td className={classes}>
                                        <div className="flex items-center gap-3">
                                                <Avatar src={client.profilePhoto} alt={client.firstName} size="sm" />
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {client.firstName} {client.lastName}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {client.email}
                                                    </Typography>
                                                </div>
                                            </div>
                                            {/* <div className="font-light">{client.firstName} {client.lastName}</div> */}
                                        </td>
                                        <td className={classes}>
                                            <div>{category}</div>
                                        </td>
                                        <td className={classes}>
                                            <div>
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={status}
                                                    color={
                                                        status === "pending"
                                                            ? "yellow"
                                                            : status === "accepted"
                                                            ? "green"
                                                            : status === "declined"
                                                            ? "red"
                                                            : "purple" // Provide a default color if none of the conditions match
                                                    }
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div>{new Date(createdAt).toLocaleDateString()}</div>
                                        </td>
                                        <td className={classes}>
                                            {/* <Tooltip content="Edit User">
                                                <IconButton variant="text">
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip> */}
                                            <div className='flex'>
                                                <Button color='green' onClick={()=>accept(_id)}>Accept</Button>
                                                <Button color='red' onClick={()=>decline(_id)}>Decline</Button>
                                            </div>
                                        </td>
                                    </tr>
                                );
              })
              : currentTabValue === "accepted"
              ? acceptedBookings.map(({ client, category, status, createdAt, _id }, index) => {
                    <tr>
                        <td>hehehhe</td>
                    </tr>
                    {console.log(tettetet);}
              })
              : currentTabValue === "rejected"
              ? rejectedBookings.map(({ client, category, status, createdAt, _id }, index) => {
                // Render rejected bookings
              })
              : null}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default BookingsTable;
