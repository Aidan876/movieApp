import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { deleteMovie, getList } from '../lib/api/movie';

function List() {
  // State to hold the list of movies
  const [dataList, setDataList] = useState([]);
  // React Router hook for navigation
  const navigate = useNavigate();

  // Fetch the list of movies when the component mounts
  useEffect(() => {
    fetchList();
  }, []);

  // Function to fetch the list of movies from the API
  const fetchList = async () => {
    try {
      const response = await getList();
      setDataList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle the deletion of an movie
  const handleDelete = async (item) => {
    try {
      // Delete the movie from the API
      await deleteMovie(item.id);
      // Remove the deleted item from the dataList state
      setDataList((prevDataList) => prevDataList.filter((dataItem) => dataItem.id !== item.id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Movies</h1>
      {/* Button to navigate to the "Add Movie" page */}
      <button className="btn btn-primary" onClick={() => navigate('/new')}>
        Add
      </button>
      <div className="card-deck mt-3">
        {/* Map through the list of movies and display them */}
        {dataList.map((item) => (
          <div className="card mb-3" style={{ width: '18rem' }} key={item.id}>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-text text-muted">Genre: {item.genre}</h6>
              {/* Link to navigate to the "Edit Movie" page */}
              <Link to={`/edit/${item.id}`} className="btn btn-primary me-2">
                Edit
              </Link>
              {/* Button to delete the movie */}
              <button className="btn btn-danger" onClick={() => handleDelete(item)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;