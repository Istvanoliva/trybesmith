const http = {
  noUser: { status: 400, message: '"username" is required' },
  noPass: { status: 400, message: '"password" is required' },
  invalidUser: { status: 401, message: 'Username or password invalid' },

};

export default http;