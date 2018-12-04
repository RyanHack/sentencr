


fetch("http://words.bighugelabs.com/api/2/a872a264aa49d0016e40aec5ac21215e/")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })
    .catch(function (err) {
        console.log(err.message)
    })