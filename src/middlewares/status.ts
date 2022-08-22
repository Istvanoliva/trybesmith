const http = {
  noUser: { status: 400, message: '"username" is required' },
  noPass: { status: 400, message: '"password" is required' },
  invalidUser: { status: 401, message: 'Username or password invalid' },
  noName: { status: 400, message: '"name" is required' },
  noAmount: { status: 400, message: '"amount" is required' },
  noClass: { status: 400, message: '"classe" is required' },
  noLevel: { status: 400, message: '"level" is required' },
  noToken: { status: 401, message: 'Token not found' },
  invalidToken: { status: 401, message: 'Invalid token' },
};

export default http;