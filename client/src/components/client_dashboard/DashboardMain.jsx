import React from 'react'

import { BackgroundBlogCardPhotoLiked_I } from './likedPhotos/LikedPhoto_I';
import HandelLikedImg from './likedPhotos/HandelLikedImg';

// import { IconButton } from "@material-tailwind/react";
const DashboardMain = ({suer}) => {
    const categories = [
        {
            avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
            bg:'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            photographer:'Tania Andrew'
        },
        {
            avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
            bg:'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            photographer:'Tania Andrew'
        },
        {
            avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
            bg:'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            photographer:'Tania Andrew'
        },
        {
            avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
            bg:'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            photographer:'Tania Andrew'
        },
        {
            avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
            bg:'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            photographer:'Tania Andrew'
        },
       
    ]
    const [openedPhoto, setOpenedPhoto] = React.useState({open:false});
    const handleOpen = (name, avatarImg, bgImg) => setOpenedPhoto({open:!openedPhoto.open, phg:name, avatar:avatarImg, bg:bgImg});
    console.log(openedPhoto);
    const closeDialog = ()=>{
        setOpenedPhoto({...openedPhoto, open:!openedPhoto.open})
    }
    return (
        <>
        <div className=' grid  m-auto mb-20 items-center grid-cols-4 xl:grid-cols-1 sm:grid-cols-2 justify-items-center gap-10 lg:gap-10 w-[1000px]'>
        <p className='font-bold text-3xl font-mono  text-gray-800'>
        Liked Photos
        </p>
        </div>
        <div className=' grid m-auto mb-20 items-center grid-cols-4 xl:grid-cols-3 sm:grid-cols-1 justify-items-center  lg:gap-2 mt-7 w-[1050px]'>
                    {categories.map((category,i)=>(
                        <>
                            <BackgroundBlogCardPhotoLiked_I key={i} handleOpen={()=>handleOpen(category.photographer,category.avatar,category.bg )} avatar={category.avatar} bg={category.bg} phg={category.photographer} />
                        </>
                    ))}
        </div>
        <HandelLikedImg open={openedPhoto.open} close={closeDialog} avatar={openedPhoto.avatar} name={openedPhoto.phg} image={openedPhoto.bg}/>
        </>
    )
}

export default DashboardMain

