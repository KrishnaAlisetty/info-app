import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";

function Search(data) {
  const searchInputRef = useRef(null);

  const onSearchClick = () => {
    let filteredData = data.data.filter((v) =>
      v.title.toUpperCase().match(searchInputRef.current.value.toUpperCase())
    );
    data.setData(filteredData);
  };

  const onClearClick = () => {
    data.setFetchData(true);
  };
  return (
    <div className="searchField">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        ref={searchInputRef}
        onKeyUp={(e) => {
          onSearchClick();
        }}
      />
      <button
        class="btn btn-outline-success my-2 my-sm-0"
        onClick={onSearchClick}
      >
        Search
      </button>
      <button
        class="btn btn-outline-success my-2 my-sm-0"
        onClick={onClearClick}
      >
        Clear
      </button>
    </div>
  );
}

export default Search;
