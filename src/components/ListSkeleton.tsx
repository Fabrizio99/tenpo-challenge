export const ListSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="skeleton aspect-square animate-pulse"></div>
    ))}
  </div>
);
