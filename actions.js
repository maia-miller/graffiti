export function addArt(artDetails){
return dispatch => {
request
.post('api/pets')
.then (res =>
