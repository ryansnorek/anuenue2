import { useContext } from "react";

import { expandContext } from "../contexts";

function ItemWrapper() {
    const { visibleContent } = useContext(expandContext);


    return (
        <main className="item-wrapper">
            <section className="item">
                <h1>Item Title</h1>
                <p>item description desceoprpeor jflaksnf aklndan </p>
            </section>
        </main>
    );
};

export default ItemWrapper;