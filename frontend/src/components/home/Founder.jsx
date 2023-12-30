import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.webp";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Maninder Singh</h3>

        <p>
        Hey Foodies! I'm Maninder Singh, the brains behind Rapid Crave. 
        Imagine this: tasty bites, 
        speedy delights! At Rapid Crave, we're all about making your food dreams come true ASAP. Come join the flavor party 
        ,where good eats happen fast! 🚀🍔 
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
