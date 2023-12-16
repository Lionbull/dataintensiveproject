const country_codes = {
    'finland': 'fi',
    'sweden': 'se',
    'norway': 'no',
    'denmark': 'dk',
    'estonia': 'ee'
}
function isValidCountry(country) {
    return Object.keys(country_codes).includes(country);
}


module.exports = isValidCountry;