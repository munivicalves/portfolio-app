const crypto = require('crypto');

const encode = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');

const getSecret = () => process.env.JWT_SECRET;

function createToken() {
  const secret = getSecret();
  if (!secret) throw new Error('JWT_SECRET não configurado');

  const header = encode({ alg: 'HS256', typ: 'JWT' });
  const payload = encode({ sub: 'admin', exp: Math.floor(Date.now() / 1000) + 60 * 60 * 8 });
  const signature = crypto.createHmac('sha256', secret).update(`${header}.${payload}`).digest('base64url');
  return `${header}.${payload}.${signature}`;
}

function requireAdmin(req, res, next) {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, '');
  const secret = getSecret();

  if (!token || !secret) return res.status(401).json({ message: 'Acesso não autorizado.' });

  const [header, payload, signature] = token.split('.');
  if (!header || !payload || !signature) return res.status(401).json({ message: 'Token inválido.' });

  const expected = crypto.createHmac('sha256', secret).update(`${header}.${payload}`).digest('base64url');
  const receivedSignature = Buffer.from(signature);
  const expectedSignature = Buffer.from(expected);
  const validSignature = receivedSignature.length === expectedSignature.length
    && crypto.timingSafeEqual(receivedSignature, expectedSignature);
  if (!validSignature) return res.status(401).json({ message: 'Token inválido.' });

  try {
    const decoded = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (decoded.sub !== 'admin' || decoded.exp <= Math.floor(Date.now() / 1000)) {
      return res.status(401).json({ message: 'Token expirado.' });
    }
    req.admin = decoded;
    next();
  } catch {
    return res.status(401).json({ message: 'Token inválido.' });
  }
}

module.exports = { createToken, requireAdmin };
