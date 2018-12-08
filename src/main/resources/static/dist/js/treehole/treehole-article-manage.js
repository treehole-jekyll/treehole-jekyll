var manageArticleApp = undefined
if (!manageArticleApp) {
  manageArticleApp = new Vue({
    el: '#treehole-article-manage',
    data: {
      initData: {
        article: {
          status: [{
              name: "选择文章状态",
              value: 0
            },
            {
              name: "已发布",
              value: 1
            },
            {
              name: "未发布",
              value: 2
            },
            {
              name: "已删除",
              value: 3
            }
          ]
        }
      },
      search: {
        title: "",
        statu: 0
      },
      data: [{
          title: "捅破那层窗户纸，二叉树的遍历真特么简单",
          desc: "二叉树是一种非常神奇的树，由于其在查找排序等某些方面的优越性....",
          kind: "关于JAVA的一些东西",
          tags: ["java", "生活"],
          allowCommont: false,
          statu: 2,
          statuText: "未发布"
        },
        {
          title: "捅破那层窗户纸，二叉树的遍历真特么简单",
          desc: "二叉树是一种非常神奇的树，由于其在查找排序等某些方面的优越性....",
          kind: "关于JAVA的一些东西",
          tags: ["java", "生活"],
          allowCommont: true,
          statu: 2,
          statuText: "未发布"
        }
      ],
      page: {
        current: 1,
        pageSize: 10,
        total: 200
      },
      tools: {
        loading: false,
        confirm: false,
        confirmMessage: ""
      }
    },
    methods: {
      query: function () {
        console.log(this.search)
        this.tools.loading = true
        setTimeout(() => {
          this.tools.loading = false
        },2000)
      },
      editLine: function (line) {
        console.log(line)
      },
      pageChange: function(current) {
        console.log(current)
      },
      changeAllowComment: function(line) {
        console.log(line)
      },
      publish: function(line) {
        console.log(line)
      },
      deleteLine: function(line) {
        console.log(line)
        this.confirm("确定删除吗")
      },
      confirmOk: function() {
        console.log('ok')
        this.tools.confirm = false
      },
      confirm: function(message) {
        this.tools.confirm = true
        this.tools.confirmMessage = message
      }
    },
    mounted: function () {

    }
  })
}
