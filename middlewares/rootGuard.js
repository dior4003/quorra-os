const ROOT_PIN = process.env.ROOT_PIN || '0000';

const rootGuard = (req, res, next) => {
  const pin = req.headers['x-root-pin'];
  if (pin === ROOT_PIN) {
    next();
  } else {
    res.status(401).json({ error: 'Root ruxsat rad etildi' });
  }
};

module.exports = rootGuard;
