class Request {

  constructor(collection, params={}) {
    this.collection = collection
    this.params = params
  }

  getData() {
    return wx.linDb.collection(this.collection).get()
  }

  getDataByParams() {
    return wx.linDb.collection(this.collection).where(this.params).get()
  }
}

export default Request