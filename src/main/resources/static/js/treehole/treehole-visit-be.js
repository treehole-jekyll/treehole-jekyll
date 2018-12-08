var visitBeApp = undefined

if (!visitBeApp) {
  visitBeApp = new Vue({
    el: "#treehole-visit-be",
    data: {
      data: {
        visitPage: [
          {
            id: 1,
            page: "/pages/asdfhfasdfo",
            title: "一顿操作猛如虎",
            pv: 100,
            uv: 22
          }
        ],
        startPage: [
          {
            id: 1,
            page: "/pages/asdfhfasdfo",
            title: "一顿操作猛如虎",
            pv: 100,
            uv: 22
          },
          {
            id: 2,
            page: "/pages/asdfhfasdfo",
            title: "一顿操作猛如虎",
            pv: 100,
            uv: 22
          }
        ]
      },
      page: {
        current: 1,
        pageSize: 10,
        total: 200
      },
      startPage: {
        current: 1,
        pageSize: 10,
        total: 200
      },
    },
    methods: {
      pageChange: function(current) {
        console.log(current)
      },
      startPageChange: function(current) {
        console.log(current)
      }
    },
    mounted: function () {

    }
  })
}
