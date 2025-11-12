import { useEffect } from "react";

/**
* Example: usePageTitle("Home | PawMart 🐾");
 */
const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default usePageTitle;
