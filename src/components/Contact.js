import { useEffect } from "react";

import { scrollTo, copyToClipboard } from "../helper";

function Contact() {  

  useEffect(() => scrollTo(50), []);
  
  return (
    <section className="contact">
      <div className="info">
        <input
          readOnly={true}
          id="email"
          value="anuenue@pepe.com"
          onClick={copyToClipboard}
        ></input>
      </div>
    </section>
  );
}
export default Contact;
