var app = undefined
if(!app){
  app = new Vue({
    el: '#treehole-comment-manage',
    data: {
      data: [
        {
          title: "捅破那层窗户纸，二叉树的遍历真特么简单",
          content: "二叉树是一种非常神奇的树，由于其在查找排序等某些方面的优越性...."
        }
      ],
      page: {
        current: 1,
        pageSize: 10,
        total: 135
      }
    },
    methods: {
      pageChange: function(current) {
        console.log(current)
      }
    },
    mounted: function() {

    }
  })
}
