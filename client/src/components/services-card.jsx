import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

const ServicesCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mb-4"
    >
      <Card className="text-center shadow-lg p-3">
        <Card.Body>
          {Icon && <Icon size={50} className="mb-3 text-primary" />}
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ServicesCard;
