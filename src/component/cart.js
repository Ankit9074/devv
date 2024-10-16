import React, { useEffect, useState } from 'react';
import Pagination from './Pagination'; // Adjust the import path as necessary

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

  const getCurrentPosts = () => posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const removeCard = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice((currentPage - 1) * postsPerPage + index, 1);
    setPosts(updatedPosts);
  };

  const totalPages = Math.ceil(posts.length / postsPerPage);

  if (loading) return <h2>Loading...</h2>;

  const capitalizeFirstLetter = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
  const today = new Date().toLocaleString('en-US', { month: 'long', day: 'numeric', timeZoneName: 'short' });

  return (
    <div>
      <div className="w-full flex flex-wrap justify-center p-2.5 px-5">
        {getCurrentPosts().map((post, index) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md m-2 p-2 w-56 text-left transition-transform duration-200 flex flex-col hover:scale-105">
            <button 
  onClick={() => removeCard(index)} 
  aria-label="Remove post" 
  className="text-red-500 border-none rounded-md cursor-pointer absolute top-2 right-2 text-xl transition-all duration-300 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
>
  X
</button>

            <h3 className="mt-2.5 text-base font-roboto font-semibold">{post.title.length > 19 ? `${capitalizeFirstLetter(post.title.substring(0, 19))}...` : capitalizeFirstLetter(post.title)}</h3>
            <p className="text-sm text-gray-800 font-roboto font-medium leading-4">{post.body.length > 40 ? `${capitalizeFirstLetter(post.body.substring(0, 40))}...` : capitalizeFirstLetter(post.body)}</p>
            <p className="text-sm opacity-70">{today}</p>
            <img src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg" alt="#" className='mb-2 w-full h-28 rounded-lg' />
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
