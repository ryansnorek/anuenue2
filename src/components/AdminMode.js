import axios from "axios";
import { useEffect, useState } from "react";

function AdminMode({ handleCancelAdmin }) {
  const [storeItems, setStoreItems] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/store`)
      .then((items) => {
        setStoreItems(items.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="admin-mode">
      <section>
        <h1>GOBLIN MODE</h1>
        <button className="cancel" onClick={handleCancelAdmin}>
          cancel
        </button>
      </section>
      <section>
          {/* {storeItems && storeItems.map((item) => (
              <img src={`http://localhost:8000/${item.pic}`} alt="item"/>
          ))} */}
      </section>
    </div>
  );
}
export default AdminMode;
