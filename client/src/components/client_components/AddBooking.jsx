import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import {
    Card,
    Select,
    Option,
    Input,
    Checkbox,
    Typography,
} from "@material-tailwind/react";

export function AddBooking({ baseUrl }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    const currentDate = new Date().toISOString().slice(0, 16);
    console.log(currentDate, '⏰⏰');

    const [user, setLoggedUser] = useState({})
    // get logged user
    useEffect(() => {
        axios.get(baseUrl + 'loggedUser', { withCredentials: true })
            .then(serverResponse => {
                console.log(serverResponse.data);
                console.log('helloooo??', serverResponse.data._id);
                setLoggedUser(serverResponse.data)
                // setJobs(serverResponse.data)
                // setDeleted(false)
            })
            .catch(error => {
                console.log(error)
                console.log("teststtstesttestetstets");
            })
    }, [])

    const categories = ["Party", "Portrait", "Wedding", "Food", "Product", "Conference", "Sports", "Fashion", "Family"]

    const [booking, setBooking] = useState({
        client: user._id,
        photographer: "",
        category: "",
        address: {
            country: "",
            city: ""
        },
        dateTime: "",
        duration: 1
    })
    const [errors, setErrors] = useState({
        client: "",
        photographer: "",
        category: "",
        address: {
            country: "",
            city: ""
        },
        dateTime: "",
        duration: ""
    })
    const createBooking = (e) => {
        e.preventDefault()
        axios.post(baseUrl + 'bookings', booking, { withCredentials: true })
            .then(serverResponse => {
                console.log(serverResponse.data);
                setBooking(booking)
                // navigate(`/jobs/${serverResponse.data._id}`)
            })
            .catch(error => {
                console.log(error)
                const errs = {
                    client: "",
                    photographer: "",
                    category: "",
                    address: {
                        country: "",
                        city: ""
                    },
                    dateTime: "",
                    duration: ""
                }
                for (let key of Object.keys(error.response.data)) {
                    errs[key] = error.response.data[key].message
                }
                setErrors({ ...errors, ...errs })
            })
    }

    return (
        <>
            <Button onClick={handleOpen} variant="gradient">
                Book
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Book your photographer.</DialogHeader>
                <DialogBody divider>

                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={e => createBooking(e)}>

                        <div className="mb-4 flex flex-col gap-6">
                            {/* <Input size="lg" label="client id" /> */}
                            <Input size="lg" label="photographer id" onChange={e => setBooking({ ...booking, photographer: e.target.value })}
                                value={booking.photographer} />
                            <Select
                                className="block w-full px-4 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none focus:border-gray-500"
                                label="Type of Event"
                                onChange={(v) => setBooking({ ...booking, category: v })}
                                value={booking.category}
                            >   
                                <Option value="">Choose a category for your event</Option>
                                <Option value="Party">Party</Option>
                                <Option value="Portrait">Portrait</Option>
                                <Option value="Wedding">Wedding</Option>
                                <Option value="Food">Food</Option>
                                <Option value="Product">Product</Option>
                                <Option value="Conference">Conference</Option>
                            </Select>
                            <Input size="lg" label="country"
                                onChange={e => setBooking({ ...booking, address: { ...booking.address, country: e.target.value } })}
                                value={booking.address.country} />
                            <Input size="lg" label="city" onChange={e => setBooking({ ...booking, address: { ...booking.address, city: e.target.value } })}
                                value={booking.address.city} />
                            <label for="birthdaytime" class="block text-gray-700 font-bold mb-2">When (date and time):</label>
                            <input type="datetime-local" id="birthdaytime" name="birthdaytime" class="border border-gray-400 rounded-lg py-2 px-3 w-full focus:outline-none  focus:border-black"
                                min={currentDate} placeholder="datetime"
                                onChange={e => setBooking({ ...booking, dateTime: e.target.value })}
                                value={booking.dateTime} />
                            {/* <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">Submit</button> */}
                            <Input size="lg" label="Duration (in hours)" type="number" min={1} max={5}
                                onChange={e => setBooking({ ...booking, duration: e.target.value })}
                                value={booking.duration} />


                                <div className="flex justify-end">
                                    <Button
                                        variant="text"
                                        color="red"
                                        onClick={handleOpen}
                                        className="mr-1"
                                    >
                                        <span>Cancel</span>
                                    </Button>
                                    <Button variant="gradient" color="green">
                                        <span>Confirm</span>
                                    </Button>


                                </div>

                        </div>


                    </form>
                </DialogBody>
                {/* <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter> */}
            </Dialog>
        </>
    );
}