import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateMovie, getDetail } from '../lib/api/movie';
import FormBody from './Form';

function Edit() {
  // State to hold the movie's data for editing
  const [value, setValue] = useState({
    name: '',
    genre: '',
  });

  // Extract the URL parameters using useParams
  const query = useParams();
  // React Router hook for navigation
  const navigate = useNavigate();

  // Fetch movie details when the component mounts or the query changes
  useEffect(() => {
    fetchData(query);
  }, [query]);

  // Function to fetch movie details for editing
  const fetchData = async (query) => {
    try {
      const response = await getDetail(query.id);
      const { name, genre } = response.data;
      // Set the fetched data in the state for editing
      setValue({
        name,
        genre,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the state with the new value for the corresponding input field
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  // Function to handle form submission for updating movie
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the movie's details using the provided data
      await updateMovie(query.id, value);
      // Navigate back to the main list after successful update
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Edit</h1>
      {/* Render the form component with appropriate props */}
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType="Update"
      />
    </div>
  );
}

export default Edit;