import axios from 'axios'


let host_url = 'http://www.zhihuimingxing.com/hui/api'

// 获取数据列表
export const getDataList = (params) => { return axios.get(`${host_url}/xiNaiInterfaceController.do`, {params:params}) }
