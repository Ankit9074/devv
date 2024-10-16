import React, { useEffect, useState } from 'react';

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
  const getPaginationGroup = () => {
    const startPage = Math.max(1, currentPage - 1);
    return Array.from({ length: Math.min(3, totalPages - startPage + 1) }, (_, i) => startPage + i);
  };

  if (loading) return <h2>Loading...</h2>;

  const today = new Date().toLocaleString('en-US', { month: 'long', day: 'numeric', timeZoneName: 'short' });
  const capitalizeFirstLetter = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';

  return (
    <div>
      <div className="posts-container">
        {getCurrentPosts().map((post, index) => (
          <div key={post.id} className="cart">
            <button onClick={() => removeCard(index)} className="remove-btn">X</button>
            <h3 className="post-title">{post.title.length > 19 ? `${capitalizeFirstLetter(post.title.substring(0, 19))}...` : capitalizeFirstLetter(post.title)}</h3>
            <p className="post-body">{post.body.length > 40 ? `${capitalizeFirstLetter(post.body.substring(0, 40))}...` : capitalizeFirstLetter(post.body)}</p>
            <p className="post-date">{today}</p>
            <img src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg" className='mb-2' />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg></button>
        {getPaginationGroup().map((pageNumber) => (
          <button key={pageNumber} onClick={() => handlePageChange(pageNumber)} className={currentPage === pageNumber ? 'active' : ''}>{pageNumber}</button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
        </svg></button>
      </div>
    </div>
  );
}

export default Cart;
