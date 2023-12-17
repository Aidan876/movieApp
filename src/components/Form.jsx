function Form({ handleChange, handleSubmit, value, buttonType }) {
    return (
      <form className="container mt-4 p-0">
        {/* Input field for the movie's name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
            value={value.name || ''}
          />
        </div>
        {/* Input field for the movie's genre */}
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">
            Genre:
          </label>
          <input
            type="text"
            className="form-control"
            id="genre"
            name="genre"
            onChange={handleChange}
            value={value.genre || ''}
          />
        </div>
        {/* Button to submit the form */}
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          {buttonType}
        </button>
      </form>
    );
  }
  
  export default Form;