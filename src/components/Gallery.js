import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

import { scrollTo } from "../helper";

function Gallery() {
  useEffect(() => scrollTo(0), []);

  // const [img, setImg] = useState("");
  // const [items, setItems] = useState([]);

  // const [item, setItem] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/store/3`)
  //     .then(({ data }) => {
  //       setItems(data);
  //       const { image } = data;
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const handleSelectFile = (e) => {
  //   setImg(e.target.files[0]);
  // };
  // useEffect(() => {
  //   const fd = new FormData();
  //   console.log(img)
  //   fd.append("image", img)
  //   axios
  //     .post(`http://localhost:8000/store/single/3`, fd, {
  //       onUploadProgress: e => console.log(e.loaded / e.total)
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [img])

  // const handleLoad = (e) => {
  //   setImg(e.target.files[0]);
  // };
  // const handleFileUpload = (e) => {
  //   e.preventDefault();

  //   const updatedItem = {
  //     ...items[2],
  //     image: img,
  //   };
  //   setItem(updatedItem);
  // };
  return (
    <div className="gallery">
      <div className="gallery-wrapper">
        <h1>Gallery closed</h1>
        {/* <input type="file" onChange={handleSelectFile} />
        <button>upload</button> */}
        {/* <form onSubmit={handleFileUpload}>
          <input
            type="file"
            name="pic"
            accept="image/*"
            onChange={handleLoad}
          />
          <input type="submit" value="Upload"/>
        </form> */}
      </div>
    </div>
  );
}
export default Gallery;
