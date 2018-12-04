import Api from '@/services/api'

export default {
  fetchCargoes () {
    return Api().get('/cargoAll/John')
  },
  postCargo (cargo) {
    return Api().post('/cargo/John', cargo)
      //{ headers: {'Content-type': 'application/json'} })
  },
  deleteCargo (id) {
    return Api().delete(`/cargo/${id}/John`)
  },
  /*putCargo (id, cargo) {
    console.log('REQUESTING ' + cargo._id + ' ' +
      JSON.stringify(cargo, null, 5))
    return Api().put(`/cargoCertainPrice/${id}/John`, cargo,
      { headers: {'Content-type': 'application/json'} })
  },*/
  putCargo (id, cargo) {
    console.log('REQUESTING ' + cargo._id + ' ' +
      JSON.stringify(cargo, null, 5))
    return Api().put(`/editCargo/${id}`, cargo,
      { headers: {'Content-type': 'application/json'} })
  },
  fetchCargoById (id) {
    return Api().get(`/cargoId/${id}/John`)
  },
  fetchProvider () {
    return Api().get('/provider/providerAll')
  },




}
