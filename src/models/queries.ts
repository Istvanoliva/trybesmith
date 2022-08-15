export default {
  newProduct: 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
  getAllProducts: 'SELECT * FROM Trybesmith.Products',
  newUser: 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
  getOrders: `
  SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.Orders as o
  INNER JOIN Trybesmith.Products AS p ON o.id = p.orderId
  GROUP BY o.id
  ORDER BY o.userId ASC`,
  findUser: 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
};