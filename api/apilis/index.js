export default axios => ({
  /**
   * 首页数据
   */
  index(){
      return axios.get(`/api/home`)
  },
  /**
   * 首页 - 环保数据
   */
  getReduceNumber() {
     return axios.get('/api/home_number')
  }
})  
