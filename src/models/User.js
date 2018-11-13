const { BASE_API_URL } = require('../constants')
var m = require('mithril')
var validator = require('validator');

var User = {
    getIsLoggedIn: function isUserLoggedIn() {
        return validator.isJWT(localStorage.getItem('token') || '')
    },
    logout: function logoutUser() {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        User.clean()

        return new Promise(function(resolve, reject) {
            resolve()
        })
    },
    setUsername: function(username) {
        User.username = username
    },
    setPassword: function(password) {
        User.password = password
    },
    login: function() {
        return m.request({
            method: "POST",
            url: BASE_API_URL + "/login/user",
            withCredentials: false,
            mode :'cors',
            data: {
                username: User.username,
                password: User.password,
            }
        })
        .then(function(response){
            localStorage.setItem('token', response.token)
            localStorage.setItem('username', User.username)
        })
        .catch(function(error){
            User.error = "Please try again."
        })
        .then(function(){
            User.clean()
        })

    },
    reset: function() {
        User.logout()
        User.clean()
    },
    clean: function() {
        User.username = null
        User.password = null
    }
}

module.exports = User;