var visitBeApp = undefined

if (!visitBeApp) {
  visitBeApp = new Vue({
    el: '#visitBeApp',
    data: {
      beVisitPages: [],
      inPages: [],
      be: {
        page: {
          current: 1,
          pageSize: 10,
          total: 135
        }
      },
      inpage: {
        page: {
          current: 1,
          pageSize: 10,
          total: 135
        }
      }
    },
    methods: {
      loadBeVisitPages: function() {
        for (let index = 0; index < 10; index++) {
          this.beVisitPages.push({
            id: index,
            page: '/pages/asdfhfasdfo',
            title: '一顿操作猛如虎',
            pv: 100,
            uv: 120
          })
        }
      },
      loadInPages: function() {
        for (let index = 0; index < 10; index++) {
          this.inPages.push({
            id: index,
            page: '/pages/asdfhfasdfo',
            title: '一顿操作猛如虎',
            pv: 100,
            uv: 120
          })
        }
      },
      bePageChange: function(current) {
        console.log(current)
      },
      inPageChange: function(current) {
        console.log(current)
      }
    },
    mounted: function() {
      // alert(1)
      this.loadBeVisitPages()
      this.loadInPages()
    }
  })
}
