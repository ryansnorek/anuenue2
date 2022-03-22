import { useEffect } from "react";

function Gallery() {
    
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery">
      <div className="gallery-wrapper"></div>
    </div>
  );
}
export default Gallery;
