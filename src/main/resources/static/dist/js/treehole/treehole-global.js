// 注册 Vue 全局组件
var golbal = {}

Vue.component('loading', {
  props: ['show'],
  template: '<transition name="alert-window-action"><div class="window-warper" v-cloak v-if="show"><div class="loading-icon"><div class="span"><div class="square"></div></div><div class="loaing-text">加载中...</div></div></div></transition>'
})

Vue.component('alert', {
  props: ['alert', 'message'],
  methods: {
    close: function () {
      this.$emit('close', null)
    }
  },
  template: '<transition name="alert-window-action"><div class="window-warper" v-cloak v-if="alert"><div class="card card-accent-danger alert-box"><div class="card-header"><span class="window-title">提示</span></div><div class="card-body">{{ message }}</div><div class="card-footer alert-footer"><button class="btn btn-sm btn-primary inline-block-button" @click="close">知道了</button></div></div></div></transition>'
})

Vue.component('notice', {
  props: ['notice', 'message'],
  methods: {
    close: function() {
      this.$emit('close',null)
    },
    timeOutAction: function() {
      const self = this
      golbal.timeOut = setTimeout(() => {
        self.close()
      }, 3000);
    }
  },
  watch: {
    notice(val){
      if(val){
        this.timeOutAction()
      }
    },
    message(val) {
      clearTimeout(golbal.timeOut)
      this.timeOutAction()
    }
  },
  template: '<transition name="notice-window-action"><div class="card bg-primary text-white notice-box" v-cloak v-if="notice" ><div class="card-body">{{message}}</div></div></transition>'
})

Vue.component('confirm', {
  props: ['confirm','message'],
  methods: {
    close: function() {
      this.$emit('close',null)
    },
    okConfirm: function() {
      this.$emit('ok',null)
    }
  },
  template: '<transition name="alert-window-action"><div class="window-warper" v-cloak v-if="confirm"><div class="card card-accent-danger confirm-box"><div class="card-header"><span class="window-title">提示</span></div><div class="card-body text-center">{{message}}</div><div class="card-footer text-center"><button class="btn btn-sm btn-primary" @click="okConfirm" >确定</button> <button class="btn btn-sm btn-danger" @click="close" >取消</button></div></div></div></transition>'
})

Vue.component('pagination', {
  props: ['pageinfo'],
  data: function() {
    return {
      page: this.pageinfo,
      pageItem: {
        min_page: 0,
        max_page: 4
      }
    }
  },
  methods: {
    change: function() {
      this.$emit("change",this.page.current)
    },
    prePage: function() {
      if(this.page.current > 1){
        this.page.current -= 1
        this.change()
      }
    },
    nextPage: function() {
      if(this.page.current < this.getTotalPage()){
        this.page.current += 1
        this.change()
      }
    },
    getPageType: function(index) {
        const currentPage = this.page.current - 1
        if (index === currentPage) {
          return "active"
        } else {
          return ""
        }
    },
    pageList: function() {
      return new Array(this.getTotalPage())
    },
    getTotalPage: function() {
      if(this.page.total === 0){
        return 1
      }else if(this.page.total%this.page.pageSize == 0){
        return this.page.total / this.page.pageSize
      }else {
        return parseInt(this.page.total / this.page.pageSize) + 1
      }
    },
    pageChange: function(index) {
      this.page.current = index + 1
      this.change()
    },
    show: function(currentIndex) {
      const totalPage = this.getTotalPage()
      this.pageItem.max_page = this.pageItem.min_page + 4
      if(this.page.current == 1) {
        this.pageItem.min_page = 0
      }else if (this.page.current >=4 && this.page.current != totalPage ){
        this.pageItem.min_page = this.page.current - 4
      }
      return currentIndex >= this.pageItem.min_page && currentIndex <= this.pageItem.max_page
    },
    showEllipsis: function (index) {
      const totalPage = this.getTotalPage()
      return (this.pageItem.max_page == index-1) && (this.pageItem.max_page != totalPage - 1)
    },
    pageDisabled: function(limit){
      if(this.page.current == limit){
        return "disabled"
      }else {
        return ""
      }
    }
  },
  watch: {
    pageinfo(val) {
      console.log(val)
      this.page = val
    }
  },
  template: '<ul class="pagination pagination-sm" v-cloak><li class="page-item" :class="pageDisabled(1)" @click="prePage"><a class="page-link" >Prev</a></li><li class="page-item" :class="getPageType(index)" v-for="(a,index) in pageList()" @click="pageChange(index)" v-if="show(index) || showEllipsis(index)" ><a class="page-link" ><span v-if="show(index)" >{{ index+1 }}</span><span v-if="showEllipsis(index)">...</span></a></li><li class="page-item" :class="pageDisabled(getTotalPage())" @click="nextPage"><a class="page-link" >Next</a></li></ul>'
})
