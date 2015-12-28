import request from 'superagent'

let environment = window.localStorage.getItem('environment') || 'local'


//let apiConfig = {
  //local: 'http://localhost:8069/v1/',
  //staging: 'http://localhost:8069/v1/',
  //production: 'http://localhost:8069/v1/',
//}


/**
 * login
 * @param {Object} params
 * @param {String} params.username
 * @param {String} params.password
 * @param {Function} callback
 */
function login(params, callback) {
  request
    .post('http://localhost:8069/v1/login')
    .send(params)
    .end(callback)
}



/**
 * login
 * @param {Object} params
 * @param {String} params.username
 * @param {String} params.password
 * @param {String} params.email
 * @param {String} params.firstName
 * @param {String} params.lastName
 * @param {Function} callback
 */
function signup(params, callback) {
  request
    .post('http://localhost:8069/v1/res/user')
    .send(params)
    .end(callback)
}



/**
 * query
 *
 * @param {Object} options
 * @param {String} options.resource
 * @param {Integer} options.id
 * @param {callback} callback
 */
function query(options, callback) {
}


function update(options, callback) {
}

function create(resource, callback) {
}

export {
  query,
  login,
  signup,
}
