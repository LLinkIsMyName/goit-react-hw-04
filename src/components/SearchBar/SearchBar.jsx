import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import style from "./SearchBar.module.css";
import { GoSearch } from "react-icons/go";

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!/^[a-zA-Z\s]*$/.test(query.trim())) {
            toast("Please enter letters only.", {
        duration: 2000,
        position: "top-right",
      });
            return;
        }
        if (query.trim() === '') {
            toast.error("This field cannot be empty. Please enter a search query.", {
        duration: 2000,
        position: "top-right",
      });
            return;
        }
        onSubmit(query);
        setQuery('');
  };
  
  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          name="searchbar"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={style.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;