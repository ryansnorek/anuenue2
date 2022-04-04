import { useEffect } from "react";

import { scrollTo } from "../helper";

import Footer from "./Footer";

function About() {
  useEffect(() => scrollTo(0), []);

  return (
    <div className="about">
      <div className="what-is-anuenue">
        <img className="skeleton" src="../images/rainbow.png" alt="banner" />
        <div className="text">
            <h2>What is Anuenue?</h2>
            <p>It's like this feeling in your gut, man.
                I followed this feeling to the depths 
                of Hana and brought back with me the 
                eternal wisdom to create gorging material
                that illuminates the gullet. Now I bring you
                the same feeling that inspired my journey.
            </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
