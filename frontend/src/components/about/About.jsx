import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.webp";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Rapid Crave</h4>
          <p>
          Rapid Crave , Where Every Bite Tells a Flavorful Tale, Satisfy Your Cravings at the Speed of Deliciousness
          </p>

          <p>
          Embark on a Culinary Journey with an Array of Delectable Dishes and Mouthwatering Burgers! 
          Dive into our Menu , Click Below to Indulge Your Tastebuds
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Maninder Singh</h3>
            </div>

            <p>
              I am Maninder Singh, the founder of Rapid Crave. Affiliated to
              God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
