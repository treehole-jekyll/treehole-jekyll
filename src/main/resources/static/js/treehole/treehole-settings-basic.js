var settingsBasicApp = undefined

if(!settingsBasicApp){
  settingsBasicApp = new Vue({
    el: '#treehole-settings-basic',
    data:{
      bloginfo: {
        title: "张英我的个人博客",
        url: "http://blog.zhangyingwei.com",
        describe: "这里是张英伟的个人博客"
      },
      install: {
        ts: "2018年01月01日 01:01:01",
        path: "/var/www",
        javaVersion: "1.8",
        osType: "Ubuntu 7.0"
      },
      control: {
        bloginfo: {
          title: true,
          url: true,
          describe: true,
          edit: false,
          editText: "修改"
        },
        install: {
          ts: true,
          path: true,
          javaVersion: true,
          osType: true
        }
      },
      tools:{
        loading: false
      }
    },
    methods: {
      editBlogInfo: function() {
        if(this.control.bloginfo.edit) {
          this.control.bloginfo.title = true
          this.control.bloginfo.url = true
          this.control.bloginfo.describe = true

          this.tools.loading = true
          setTimeout(() => {
            this.tools.loading = false
          }, 3000);

          this.control.bloginfo.edit = false
          this.control.bloginfo.editText = "编辑"
        } else {
          this.control.bloginfo.title = false
          this.control.bloginfo.url = false
          this.control.bloginfo.describe = false

          this.control.bloginfo.edit = true
          this.control.bloginfo.editText = "保存"
        }
      }
    },
    mounted: function() {

    }
  })
}
