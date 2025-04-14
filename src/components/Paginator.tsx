import { FC } from "react";

import { getPageNumbers } from "@/utils/movie";

const MAX_VISIBLE_PAGES = 4;
const BASE_BUTTON_CLASSES = "btn btn-soft btn-xs md:btn-md";

interface Props {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export const Paginator: FC<Props> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = getPageNumbers({
    maxVisiblePages: MAX_VISIBLE_PAGES,
    totalPages,
    currentPage,
  });

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className="flex items-center gap-x-1 md:gap-x-2">
      <button
        type="button"
        className={BASE_BUTTON_CLASSES}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <span className="icon-[tabler--chevron-left] size-5 rtl:rotate-180"></span>
        <span className="hidden sm:inline">Previous</span>
      </button>
      {pageNumbers.map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            type="button"
            className={`${BASE_BUTTON_CLASSES} ${
              currentPage === page
                ? "aria-[current='page']:text-bg-primary"
                : ""
            }`}
            aria-current={currentPage === page ? "page" : undefined}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="text-gray-400 px-1">
            {page}
          </span>
        )
      )}
      <button
        type="button"
        className={BASE_BUTTON_CLASSES}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <span className="hidden sm:inline">Next</span>
        <span className="icon-[tabler--chevron-right] size-5 rtl:rotate-180"></span>
      </button>
    </nav>
  );
};
