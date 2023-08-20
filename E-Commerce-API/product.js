const express = require("express");
const router = express.Router();
const pool = require("./db");

// GET /products
router.get("/", async (req, res) => {
  try {
    const productsQuery = `
      SELECT p.product_name, pa.unit_price, s.supplier_name
      FROM products p
      JOIN product_availability pa ON p.id = pa.prod_id
      JOIN suppliers s ON pa.supp_id = s.id;
    `;
    const { rows } = await pool.query(productsQuery);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add other endpoints here

module.exports = router;
