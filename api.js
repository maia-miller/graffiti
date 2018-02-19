import request from 'superagent'

export = {
  addArt
}

function addArt(artDetails) {
  .post(/api/users)
  .send(artDetails)
}
