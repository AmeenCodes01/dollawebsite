import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ num }) {
  const { pathname } = useLocation();
  console.log(num);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
