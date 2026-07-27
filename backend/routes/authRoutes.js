const crypto = require('crypto');
const express = require('express');
const { createToken } = require('../middleware/auth');

const router = express.Router();

router.post('/login', (req, res) => {
  const password = req.body?.password;
  const configuredPassword = process.env.ADMIN_PASSWORD;

  if (!configuredPassword || !process.env.JWT_SECRET) {
    return res.status(503).json({ message: 'O acesso administrativo ainda não foi configurado no servidor.' });
  }

  const submitted = Buffer.from(String(password || ''));
  const configured = Buffer.from(configuredPassword);
  const matches = submitted.length === configured.length && crypto.timingSafeEqual(submitted, configured);
  if (!matches) return res.status(401).json({ message: 'Senha inválida.' });

  return res.json({ token: createToken() });
});

module.exports = router;
