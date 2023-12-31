import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BASE_CONTAINER_VARIANT = {
  hidden: {
    x: "100vw"
  },
  visible: {
    x: 0,
    transition: { delay: 0.4, type: "spring", stiffness: 80, duration: 0.5 }
  },
  exit: {
    x: "-100vw",
    transition: { duration: 0.5 }
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      variants={BASE_CONTAINER_VARIANT}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.3, originX: 0, color: "#EAD196" }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
            textShadow: "0px 0px 5px rgb(255,255,255)"
          }}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;