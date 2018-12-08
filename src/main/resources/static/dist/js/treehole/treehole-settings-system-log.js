var systemLog = undefined

if (!systemLog) {
  systemLog = new Vue({
    el: '#system-log',
    data: {
      query: {
        timeline: '',
        account: '',
        sip: '',
        action: ''
      },
      datas: [],
      page: {
        current: 1,
        pageSize: 10,
        total: 200
      }
    },
    methods: {
      queryAction: function() {
        console.log('query', this.query)
      },
      loadData: function(){
        this.datas.push({
          id: "1",
          sip: "127.0.0.1",
          account: "admin",
          ts: "2018-01-01 00:00:00",
          action: "登录"
        })
      },
      initItems: function(){
        var self = this
        laydate.render({
          elem: '#reservation'
          ,range: true,
          change: function(value, date, endDate){
            self.query.timeline = value
          }
        })
      },
      pageChange: function(current) {
        console.log(current)
      }
    },
    mounted: function() {
      // alert(this.msg)
      this.initItems()
      this.loadData()
    }
  })
}
