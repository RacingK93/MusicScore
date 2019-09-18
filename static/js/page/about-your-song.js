require(["vue", "http"],
  function (Vue, http) {

    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {
        getData() {
          var par = {
            
          }
          http.get('listMusic', par, function(res){
            console.log(res)
          })
          .catch(function(err){
            console.log(err)
          })
        }
      },
      mounted() {
        this.getData()
      }
    })

  }
)
