const api = process.env.REACT_APP_ATTR_API_URL || 'https://www.archiviorossoblu.it/api'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll = async (controller) =>
  fetch(`${api}/${controller}.php`, { headers })
    .then(res => res.json())

export const getAllByID = async (controller, id) =>
  fetch(`${api}/${controller}.php?id=${id}`, { headers })
    .then(res => res.json())
