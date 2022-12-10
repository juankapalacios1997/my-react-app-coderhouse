const url = 'https://jsonplaceholder.typicode.com'

export function getAllPosts() {
    return fetch(`${url}/posts`)
    .then(res => res.json())
    .then(json => json)
    .catch(err => {
        console.error('[getAllPosts] - ERROR', err);
        return [];
    })
}

export function getSinglePosts(id) {
    return fetch(`${url}/posts/${id}`)
    .then(res => res.json())
    .then(json => json)
    .catch(err => {
        console.error('[getSinglePosts] - ERROR', err);
        return null;
    })
}