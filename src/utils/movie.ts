interface PageNumberArgs {
  maxVisiblePages: number;
  totalPages: number;
  currentPage: number;
}
export const getPageNumbers = ({
  maxVisiblePages,
  totalPages,
  currentPage,
}: PageNumberArgs) => {
  const pages: (number | string)[] = [];
  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (startPage > 1) {
    pages.push(1);
    if (startPage > 2) {
      pages.push("...");
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pages.push("...");
    }
    pages.push(totalPages);
  }

  return pages;
};
