import { useEffect } from "react";

import { scrollTo } from "../helper";

function Gallery() {
  useEffect(() => scrollTo(0), []);

  return (
    <div className="gallery">
      <div className="gallery-wrapper"></div>
    </div>
  );
}
export default Gallery;
