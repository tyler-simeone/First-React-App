const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/owners/${id}`)
            .then(resp => resp.json())
    },
    getAll() {
        return fetch(`${remoteURL}/owners`)
            .then(resp => resp.json())
    }
}