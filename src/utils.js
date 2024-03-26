export function postToServer(url, payload) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: payload,
    });
}

export  async function handleResponseStatusError(response) {
    const data = await response.json();
    if (!response.ok) {
        window.alert(`${response.status}: ${data.error}`)
    }
    return data;
}

