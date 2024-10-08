import { twMerge } from "tailwind-merge";

const SearchResultCount = ({ styleResult, searchItem, foundItem }) => {
  const mergedClass = twMerge(
    " xs:text-sm text-primary-black text-left ",
    styleResult
  );

  return (
    <>
      {searchItem !== "" && (
        <p className={mergedClass}>
          {`Search results found: ${foundItem.length}`}
        </p>
      )}
    </>
  );
};

export default SearchResultCount;
