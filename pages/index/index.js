import Request from '../../model/request'

Page({
  data: {
    isFixed: false
  },

  onLoad() {
    this.getIndexData()
    this.getSearchBarHeight()
    this.getProductData()
  },

  async getIndexData() {
    const {
      data
    } = await new Request('index').getData()
    this.setData({
      indexData: data[0]
    })
  },

  async getProductData() {
    const {
      data
    } = await new Request('product').getData()
    wx.lin.renderWaterFlow(data)
  },

  getSearchBarHeight() {
    // 获取输入框实例高度
    wx.createSelectorQuery().select('.search-container').boundingClientRect(e => {
      this.data.searchBarHeight = e.height
    }).exec()
  },

  onPageScroll(e) {
    if (e.scrollTop > this.data.searchBarHeight) {
      this.setData({
        isFixed: true
      })
    } else {
      this.setData({
        isFixed: false
      })
    }
  }
})