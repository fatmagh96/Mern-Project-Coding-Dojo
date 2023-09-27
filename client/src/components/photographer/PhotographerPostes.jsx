import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhotographerPosts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch photographer's posts
    axios.get('http://localhost:8000/api/posts/photographer',{withCredentials: true}) // Adjust the URL to match your server endpoint
      .then((response) => {
        setPosts(response.data)
        console.log(response.data);;
      })
      
      .catch((error) => {
        console.error('Error fetching photographer posts:', error);
      });
  }, []);

  return (
    <div className="container mx-auto py-8">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            
            <img
              src={post.images[0].path} // Assuming images are stored as an array in the post object
              alt="Post"
              className="w-full h-48 object-cover"
            />

            {/* <img src={post.imageUrl} alt="Post" className="w-full h-48 object-cover" /> */}

            
            <div className="p-4">
              {/* Add any additional post information you want to display */}
              <h2 className="text-xl font-semibold mb-2">{post.category}</h2>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotographerPosts;
