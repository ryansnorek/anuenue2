import { useContext } from "react";

import { expandContext } from "../contexts";
import Item from "./Item";

function ItemWrapper() {
  const { visibleContent } = useContext(expandContext);

  return (
    <main className="item-wrapper">
      {visibleContent === "one" && <Item contentName={visibleContent}/>}
      {visibleContent === "two" && <Item contentName={visibleContent}/>}
      {visibleContent === "three" && <Item contentName={visibleContent}/>}
      {visibleContent === "four" && <Item contentName={visibleContent}/>}
      {visibleContent === "five" && <Item contentName={visibleContent}/>}
    </main>
  );
}

export default ItemWrapper;
