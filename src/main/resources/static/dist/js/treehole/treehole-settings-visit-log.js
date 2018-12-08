var visitLog = undefined

if (!visitLog) {
  visitLog = new Vue({
    el: '#visit-log',
    data: {
      query: {
        dates: "2014-5-21 - 2014-6-21",
        page:"",
        sourceIp: "",
        action: ""
      },
      data: [
        {
          id: 1,
          datetime: "2018-01-01 00:00:00",
          area: "北京",
          source: "百度",
          device: "Iphone7",
          page: "/pages",
          ip: "127.0.0.1"
        },
        {
          id: 2,
          datetime: "2018-01-01 00:00:00",
          area: "北京",
          source: "百度",
          device: "Iphone7",
          page: "/pages",
          ip: "127.0.0.1"
        },
        {
          id: 3,
          datetime: "2018-01-01 00:00:00",
          area: "北京",
          source: "百度",
          device: "Iphone7",
          page: "/pages",
          ip: "127.0.0.1"
        }
      ],
      page: {
        current: 1,
        pageSize: 10,
        total: 200
      }
    },
    methods: {
      search: function(){
        console.log(this.query)
      },
      initItems: function(){
        laydate.render({
          elem: '#reservation'
          ,range: true
        })
      },
      pageChange: function(current) {
        console.log(current)
      }
    },
    mounted: function() {
      this.initItems()
    }
  })
}
