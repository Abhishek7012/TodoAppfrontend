import React, { useState, useEffect, useCallback } from 'react';
import './CardCarousel.css';

const CardCarousel = ({ cardsData, renderCard }) => {
  const cardsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCards, setVisibleCards] = useState([]);



const showCurrentPage = useCallback(() => {
    if (cardsData && cardsData.length > 0) {
      const startIndex = (currentPage - 1) * cardsPerPage;
      const endIndex = startIndex + cardsPerPage;
      setVisibleCards(cardsData.slice(startIndex, endIndex));
    }
  }, [cardsData, currentPage, cardsPerPage]);

  useEffect(() => {
    if (cardsData) {
      showCurrentPage();
    }
  }, [currentPage, cardsData, showCurrentPage]);

  const showNextPage = () => {
    if (cardsData) {
      const nextPage = currentPage % Math.ceil(cardsData.length / cardsPerPage) + 1;
      setCurrentPage(nextPage);
    }
  };

  const showPrevPage = () => {
    if (cardsData) {
      const prevPage = currentPage > 1 ? currentPage - 1 : Math.ceil(cardsData.length / cardsPerPage);
      setCurrentPage(prevPage);
    }
  };

  const goToPage = (page) => {
    if (cardsData) {
      setCurrentPage(page);
    }
  };

  return (
      <div className="card-carousel">
        <div className="cards-container" >
          {visibleCards.map((card) => renderCard(card))}
        </div>

        <div className="pagination">
          <button className="page-button" onClick={showPrevPage}>
            Prev
          </button>
          {Array.from({ length: Math.ceil((cardsData?.length || 0) / cardsPerPage) }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              className={`page-button ${page === currentPage ? 'active' : ''}`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          ))}
          <button className="page-button" onClick={showNextPage}>
            Next
          </button>
        </div>
      </div>
  );
};

export default CardCarousel;
