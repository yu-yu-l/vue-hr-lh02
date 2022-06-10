import request from '@/utils/request'

/**
 * @description: 获取下拉员工数据
 * @param {*}
 * @return {*}
 */
export function getEmployee() {
  return request({
    url: '/api/sys/user/simple'
  })
}
