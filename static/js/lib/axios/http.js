define(["axios"], function (axios) {

  var base = {

  }
  let service = axios.create({
    baseURL: 'api',
    timeout: 180000,
    dataType: "json",
    headers: {
      'content-type': 'application/x-www-form-urlencoded' //转换为key=value的格式必须增加content-type
    }
  })

  let mediaService = axios.create({
    baseURL: '',
    timeout: 180000,
    headers: {
      "content-type": 'multipart/form/data'
    }
  })



  var jsonString = function (cmdName, param) {
    return JSON.stringify(new Cmd(cmdName, param))
  }
  var jsonString_ws = function (cmdName, param) {
    return JSON.stringify(new wsCmd(cmdName, param))
  }



  return {
    get(cmd, param) { //get请求
      return new Promise((resolve, reject) => {
        service({
            method: 'get',
            url: cmd,
            params: param
          })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    post(cmd, param) { //post请求
      return new Promise((resolve, reject) => {
        service({
            method: 'post',
            url: cmd,
            data: param
          })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    wspost(cmd, param) { //post请求
      return new Promise((resolve, reject) => {
        service({
            method: 'post',
            url: 'api',
            data: jsonString_ws(cmd, param)
          })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    postMedia(cmd, param) { //post请求
      return new Promise((resolve, reject) => {
        mediaService({
            method: 'post',
            url: 'uploadfile/' + cmd,
            data: param
          })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }

})