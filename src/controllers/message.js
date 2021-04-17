exports.print = async (req, res) =>
  res.json({ message: `Hello ${req.query.name}` });
