const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/locations/${id}`)
            .then(resp => resp.json())
    },
    getAll() {
        return fetch(`${remoteURL}/locations`)
            .then(resp => resp.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/locations/${id}`, {
          method: "DELETE"
        }).then(result => result.json())
      }
}