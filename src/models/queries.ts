export default {
  newProduct: 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
  getAllProducts: 'SELECT * FROM Trybesmith.Products',
  newUser: 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
};