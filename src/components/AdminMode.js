import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import EditModal from "./EditModal";

function AdminMode({ handleCancelAdmin }) {
  const [storeItems, setStoreItems] = useState([]);
  const [editItem, setEditItem] = useState(false);
  const [pic, setPic] = useState("");
  const [picID, setPicID] = useState("");

  const handleSelectFile = (e) => {
    setPic(e.target.files[0]);
  };
  const handleUpload = (id) => {
    setPicID(id);
  };
  const handleClickEdit = (item) => {
    setEditItem(item);
  };
  useEffect(() => {
    axios
      .get(`${BASE_URL}/store`)
      .then((items) => {
        setStoreItems(items.data);
        console.log(items.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pic, editItem]);

  useEffect(() => {
    if (pic && picID) {
      const fd = new FormData();
      fd.append("image", pic);
      axios
        .post(`${BASE_URL}/store/single/${picID}`, fd, {
          onUploadProgress: (e) => console.log(e.loaded / e.total),
        })
        .then(() => {
          setPic("");
          setPicID("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [pic, picID]);

  return (
    <div className="admin-mode">
      <section className="top">
        <div className="title">GOBLIN MODE</div>
        <button id="abort" onClick={handleCancelAdmin}>
          abort
        </button>
      </section>
      {editItem && <EditModal item={editItem} setEditItem={setEditItem} />}
      <section id="interface">
        {storeItems &&
          storeItems.map((item) => (
            <div className="store-item">
              <h3>{item.name}</h3>
              <div className="uploader">
                <img src={`${BASE_URL}/${item.pic}`} alt="pic" />
                <input type="file" onChange={handleSelectFile} />
                <button onClick={() => handleUpload(item.item_id)}>
                  upload pic
                </button>
              </div>
              <button id="edit" onClick={() => handleClickEdit(item)}>
                edit
              </button>
            </div>
          ))}
      </section>
    </div>
  );
}
export default AdminMode;
