import React from 'react';

// input function
// output function
const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPage }) => {
  let isPrevPageAvailable = false; //по дефолту кнопки не активны
  let isNextPageAvailable = false;

  const pagesQuantity = Math.ceil(totalItems / itemsPage);

  if (currentPage === 0) { // активируем кнопку 
    isPrevPageAvailable = true;
  }

  if (currentPage === pagesQuantity - 1) { // активируем кнопку 
    isNextPageAvailable = true;
  }

  return (
    // отображаем две кнопки вперед назад и текущую страницу
    <div className="pagination">
      <button className="btn"
        disabled={isPrevPageAvailable}
        onClick={goPrev}>{isPrevPageAvailable ? '' : '←'}</button>

      <span className="pagination-page">{currentPage + 1}</span>

      <button className="btn"
        disabled={isNextPageAvailable}
        onClick={goNext}>{isNextPageAvailable ? '' : '→'}
      </button>
    </div>
  )
}

export default Pagination;