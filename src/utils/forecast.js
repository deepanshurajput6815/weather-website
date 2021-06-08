const request = require('request')

const forecast = ( latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6e096cae4aaa6cad4cdee06ce06afe6b&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const result = ' It is currently ' + body.current.temperature + ' degress out. '
            callback(undefined, result)
        }
    })
}

module.exports = forecast