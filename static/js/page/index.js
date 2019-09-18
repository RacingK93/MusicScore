require(["vue", "http"],
  function (Vue, http) {

    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {
        getData(cmd) {
          var par = {
          }
          http.get(cmd, par, function(res){
            console.log(res)
          })
          .catch(function(err){
            console.log(err)
          })
        }
      },
      mounted() {
      }
    })

  }
)
