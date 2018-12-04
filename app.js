const formication = document.querySelector("form")
const button = document.querySelector("button")
const synsOfTheZaddy = document.querySelector("synsOfTheZaddy")
const input = document.querySelector("input")

button.addEventListener("click", submission)

function submission(click) {
    input.innerHTML = ""
    event.preventDefault()
    const syn = input.value
    getSyns(syn)
    console.log()
}

function getSyns(syn) {
    const BASE_URL = "http://words.bighugelabs.com/api/2/a872a264aa49d0016e40aec5ac21215e/" + syn + "/json"

    fetch(BASE_URL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            let synData = data
            synsOfTheZaddy.innerHTML = synData.verb.syn[0]
            console.log(synData.verb.syn[0])

        })
        .catch(function (err) {
            console.log(err.message)
        })
}