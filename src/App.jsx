import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [gallery, setGallery] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [moreResults, setMoreResults] = useState(true);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const onSubmit = (newQuery) => {
    if (newQuery === query) {
      return;
    }
    setPage(1);
    setGallery([]);
    setQuery(newQuery);
  };

  const fetchImages = async (query, page) => {
    try {
      setLoader(true);
      const apiKey = '9tIM7QrrVUo0scWOWsoLPKQDWH8kd69nNHIQmi6CrXk';
      const params = {
        client_id: apiKey,
        query,
        page,
        per_page: 12,
      };
      const response = await axios.get(`https://api.unsplash.com/search/photos/`, {
        params: params,
        headers: {
          Authorization: `Client-ID ${apiKey}`
        }
      });
      const normalizeData = response.data.results.map(({ alt_description, id, urls }) => ({
        alt: alt_description,
        id,
        small: urls.small,
        regular: urls.regular,
      }));

      if (page === 1) {
        setGallery(normalizeData);
      } else {
        setGallery(prevImages => [...prevImages, ...normalizeData]);
      }

      setError('');
      
      if (response.data.results.length === 0) {
        setMoreResults(false);
      }
      setMaxPage(response.data.total_pages);

    } catch (error) {
      setError('Error fetching images. Please try again later.');
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
  if (query !== '') {
    setPage(1);
    setGallery([]);
    setMoreResults(true);
  }
}, [query]);

useEffect(() => {
  if (page > 1 && moreResults) {
    fetchImages(query, page);
  }
}, [page, moreResults]);


  const loadMore = async () => {
    if (page < maxPage) {
      setPage((prevPage) => prevPage + 1);
      scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
      console.log("There are more pages now");
    } else {
      toast.error("Sorry, there are no more pictures that align with your query!", {
        duration: 2000,
        position: "top-right",
      });
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loader && page < 2 && <Loader />}
      {gallery.length > 0 && (
        <ImageGallery
          images={gallery}
          handleLoadMore={loadMore}
          page={page}
          maxPage={maxPage}
          moreResults={moreResults}
          openModal={openModal}
          onClick={handleImageClick}
        />
      )}
      {loader && page > 1 && <Loader />}
      {gallery.length > 0 && page !== maxPage && (
        <LoadMoreBtn onClick={loadMore} /> 
      )}
      {error && <ErrorMessage />}

      <ImageModal
        selectedImage={selectedImage}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onRequestClose={closeModal}
      />
      <Toaster />
    </>
  );
}

export default App;
