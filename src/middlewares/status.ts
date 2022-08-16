const http = {
  noUser: { status: 400, message: '"username" is required' },
  noPass: { status: 400, message: '"password" is required' },
  invalidUser: { status: 401, message: 'Username or password invalid' },
  noName: { status: 400, message: '"name" is required' },
  noAmount: { status: 400, message: '"amount" is required' },
};

export default http;