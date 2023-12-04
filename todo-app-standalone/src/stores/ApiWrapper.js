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

            throw new Error(`Network Response DELETE was not ok ${response.status}`)
            
            return false
        }

        return true
    })

    .catch(error => {

        console.error('Fetch error: ', error)

        throw error
    })
}

export function fetchWrapperPost(url, data) {
    const options = {

        method: "POST",

        headers: {

            "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
    }
    return fetch(url, options)
    .then(response => {

        if (!response.ok) {

            throw new Error(`Network Response POST was not ok ${response.status}`)
        }
    })

    .catch(error => {

        console.error('Fetch error: ', error)

        throw error
    })
}

export function fetchWrapperPut(url, data) {
    const options = {

        method: "PUT",

        headers: {

            "Content-Type": "application/json",
        },

        body: JSON.stringify(data)
    }

    return fetch(url, options)
    .then(response => {

        if (!response.ok) {

            throw new Error(`Network Response PUT was not ok ${response.status}`)
        }
    })

    .catch(error => {

        console.log('Fetch error:', error)

        throw error
    }) 
}

export async function fetchWrapperGetAll(url) {
    try {
        
        const response = await fetch(url)
        
        if (!response.ok) {

            throw new Error (`Network Response GET was not ok ${response.status}`)
        }

        const data = await response.json()

        return data
      } 
      
      catch (Error) {

        console.log(Error);
      }
}