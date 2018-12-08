var app = undefined

if (!app) {
  app = new Vue({
    el: '#treehole-kind-manage',
    data: {
      window: {
        add: {
          show: false
        }
      },
      tools: {
        confirm: false,
        confirmMessage: ""
      },
      loading: false,
      alert: false,
      notice: false,
      noticeMsg: '',
      data: [
        {
          id: 1,
          name: "Java那些事",
          statu: 0
        },
        {
          id: 2,
          name: "php那些事",
          statu: 9
        }
      ],
      page: {
        current: 1,
        pageSize: 10,
        total: 100
      }
    },
    methods: {
      openAddWindow: function () {
        this.window.add.show = true
        console.log(window)
      },
      closeWindow: function() {
        this.window.add.show = false
      },
      editLine: function(line) {
        // this.confirm("")
        console.log(line)
      },
      deleteLine: function(line){
        this.confirm("确定删除?")
      },
      confirm: function(message) {
        this.tools.confirm = true
        this.tools.confirmMessage = message
      },
      confirmOk: function() {
        console.log("ok")
        this.tools.confirm = false
      },
      submitWindow: function() {
        this.loading = true
        const self = this
        setTimeout(() => {
          self.loading = false
        }, 2000);
      },
      pageChange: function(current) {
        this.noticeMsg = current
        this.notice = true
      }
    },
    mounted: function() {

    }
  })
}
