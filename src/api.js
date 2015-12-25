import request from 'superagent'



/**
 * login
 * @param [Object] params
 * @param [String] params.username
 * @param [String] params.password
 * @param [Function] callback
 */
function login(params, callback) {
  request
    .post('http://localhost:8069/v1/login')
    .send(params)
    .end(callback)
}



/**
 * login
 * @param [Object] params
 * @param [String] params.username
 * @param [String] params.password
 * @param [String] params.email
 * @param [String] params.firstName
 * @param [String] params.lastName
 * @param [Function] callback
 */
function signup(params, callback) {
  request
    .post('http://localhost:8069/v1/res/user')
    .send(params)
    .end(callback)
}



function query() {
}



export {
  query,
  login,
  signup,
}
