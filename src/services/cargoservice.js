import Api from '@/services/api'

export default {
  fetchCargoes () {
    return Api().get('/cargoAll/')
  },
  postCargo (cargo) {
    return Api().post('/cargo/', cargo)
      //{ headers: {'Content-type': 'application/json'} })
  },
  deleteCargo (id) {
    return Api().delete(`/cargo/${id}`)
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
    return Api().get(`/cargoId/${id}`)
  },
  fetchProvider () {
    return Api().get('/provider/providerAll')
  },




}
