import React from 'react'
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const AllPosts = () => {
    const [posts, setPosts] = useState([])
    const autStatus = useSelector((state) => state.auth.status);

    useEffect(()=>{
      if (autStatus){
          appwriteService.getPosts([]).then((posts) => {
              if(posts){
                  setPosts(posts.documents)    // appWrite response has documents where the id are stored
              }
          })
      } else {
        setPosts([])
      }
    },[autStatus])
    

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post} />
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
