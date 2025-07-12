import React from 'react'
import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'


const Home = () => {
    const [posts, setPosts] = useState([])
    const autStatus = useSelector((state) => state.auth.status);

    useEffect(()=>{
        if(autStatus){
            appwriteService.getPosts().then((posts)=> {
                if(posts){
                    // appWrite response has documents where the id are stored
                    setPosts(posts.documents)
                }
            })
        } else {
            setPosts([])
        }
    },[autStatus])

    if (posts.length === 0){
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full py-8">
            <Container>
            <div className="flex flex-wrap">
                {posts.map((post) => (
                <div
                    key={post.$id}
                    className="p-2 w-full sm:w-1/2 lg:w-1/4"
                >
                    <div className="shadow-[0_4px_8px_rgba(0,0,0,0.1)] bg-[#F0F4FF] text-black p-4 rounded-lg hover:scale-105 transition duration-300 ease-in-out">
                    <PostCard {...post} />
                    </div>
                </div>
                ))}
            </div>
            </Container>
        </div>
)
}

export default Home
