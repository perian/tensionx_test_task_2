import './search.scss';

function Search() {
  return (
    <form className="search-field">
      <input
        className="search-field__input"
        type="search"
        placeholder="Enter Student Name, Parent or ID here"
      />
    </form>
  );
}

export default Search;
