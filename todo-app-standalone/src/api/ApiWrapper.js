export async function apiPost(url, data) {
    data.date = data.date.toString()

    const response = await fetch(url, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
    })

    return response.json()
}

export async function apiGetAll(url) {
        const response = await fetch(url)
        return response.json()
}

export async function getById(id) {
    const response = await fetch(`http://localhost:8080/getbyid/${id}`)
    const taskToUpdate = await response.json()
}

export async function apiPut(url, data) {
    data.date = data.date.toString()

    const response = await fetch(url, {
        method: "PUT",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(data)
    })

    return response.json()
}

export async function apiDelete(url) {
    const response = await fetch(url, {
         method: "DELETE",
    
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:5173",
        }
    })

    return response
}