export function fetchWrapperDelete(url) {
    const options = {

        method: "DELETE",

        headers: {
          "Access-Control-Allow-Origin": "http://localhost:5173",
        }
    }
    return fetch(url, options)

    .then(response => {

        if (!response.ok) {

            throw new Error(`Network Response was not ok ${response.status}`)
        }
    })

    .catch(error => {

        console.error('Fetch error: ', error)

        throw error
    })
}