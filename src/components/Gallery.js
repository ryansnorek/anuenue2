import { useEffect } from "react";

import { scrollTo } from "../helper";

function Gallery() {
  useEffect(() => scrollTo(0), []);

  return (
    <div className="gallery">
      <div className="gallery-wrapper">
        <h1>Gallery closed</h1>
      </div>
    </div>
  );
}
export default Gallery;
