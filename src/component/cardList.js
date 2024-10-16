import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';

function Cart() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);


  const getCurrentPosts = () => {
    return posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const removeCard = (index) => {
    const updatedPosts = posts.filter((_, postIndex) => postIndex !== ((currentPage - 1) * postsPerPage + index));
    setPosts(updatedPosts);
  };

  const totalPages = Math.ceil(posts.length / postsPerPage);
  
 

  if (loading) return <h2>Loading...</h2>;

  const today = new Date().toLocaleString('en-US', { month: 'long', day: 'numeric', timeZoneName: 'short' });

  const capitalizeFirstLetter = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';

  return (
    <div>
      <div className="min-w-[900px] mx-5 my-4 flex flex-col gap-1">
  {getCurrentPosts().map((post, index) => (
    <div key={post.id} className="bg-white rounded-[12px] shadow-md flex items-start p-2 relative">
      <img 
        src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg" 
        className='mb-2 w-[50px] h-[50px] rounded-full mr-[15px]' 
        alt="Profile" 
      />
    <div className='dataContainer flex flex-col justify-start'>
  <h3 className="m-0 text-[14px] font-semibold text-gray-800">
    {post.title.length > 50 ? `${capitalizeFirstLetter(post.title.substring(0, 50))}...` : capitalizeFirstLetter(post.title)}
  </h3>
  <p className="my-0.5 text-[12px] text-gray-600">
    {post.body.length > 120 ? `${capitalizeFirstLetter(post.body.substring(0, 120))}...` : capitalizeFirstLetter(post.body)}
  </p>
  <p className="text-[11px] text-gray-500">{today}</p>
</div>
      <button onClick={() => removeCard(index)} className="remove-btn">X</button>
    </div>
  ))}
</div>

      {/* Pagination Controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

    </div>
  );
}

export default Cart;
