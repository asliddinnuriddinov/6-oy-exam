import { useEffect } from "react";
import { useLocation,useParams } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const {movieId}=useParams()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname,movieId]);

  return null;
}