var app = undefined
if (!app) {
  app = new Vue({
    el: '#treehole-article-create',
    data: {
      msg: "test",
      editor: undefined,
      imageList: [],
      tools: {
        notice: false,
        noticeMsg: ""
      },
      kinds: [{
          name: "请选择",
          value: 0
        },
        {
          name: "生活啊生活",
          value: 1
        },
        {
          name: "我的技术生涯",
          value: 2
        }
      ],
      article: {
        title: "",
        ppersonalise_url: "",
        kind: 0,
        tags: []
      }
    },
    methods: {
      notice: function(message) {
        this.tools.noticeMsg=message
        this.tools.notice = true
      },
      save: function () {
        const tags = $("#input-tags").tagsinput('items')
        this.article.tags = tags
        this.notice("save article")
        console.log(this.article)
      },
      publish: function () {
        this.notice("public article")
      },
      initEditor: function () {
        this.editor = new mditor(document.getElementById('thole-editor'), {
          previewClass: 'treehole-article'
        })
        this.bindEditorKeys()
      },
      bindEditorKeys: function () {
        var ctrlDown = false;
        var sDown = false;
        const self = this
        $("#thole-editor").bind("keydown", function (event) {
          var k = event.which;
          const ctrlK = self.getOsType()
          if (k === ctrlK) {
            ctrlDown = true
            event.preventDefault()
          }
          if (ctrlDown) {
            event.preventDefault()
            if (k == 83) {
              self.funCtrlS()
            }
          }
        });
        $("#thole-editor").bind("keyup", function (event) {
          var k = event.which;
          const ctrlK = self.getOsType()
          if (k === ctrlK) {
            ctrlDown = false
          }
        });
      },
      getOsType: function () {
        const agent = navigator.userAgent
        if (agent.indexOf("Mac") != -1) {
          return 91
        } else {
          return 17
        }
      },
      funCtrlS: function () {
        this.save()
      },
      inputImage: function () {
        const self = this
        const files = $('#fileload')[0].files
        const filesList = []
        for (let i = 0; i < files.length; i++) {
          filesList.push(files[i])
        }
        self.imageList = filesList.filter(ele => self.fileTypeFilter(ele)).filter(ele => self.fileSizeFilter(ele))
        self.imageList.forEach(ele => {
          self.previewImage(ele)
        })
      },
      fileTypeFilter: function (file) {
        const result = $.inArray(file.type, ["image/png", "image/gif", "image/jpg", "image/jpeg"]) >= 0
        if (!result) {
          this.notice("file type not accepted : " + file.type)
        }
        return result
      },
      fileSizeFilter: function (file) {
        const result = file.size < 2014 * 1024 * 100
        if (!result) {
          console.log("file size not accepted", file.size)
        }
        return result
      },
      previewImage: function (file) {
        const reader = new FileReader();
        const warpperWidth = $("#upload-warpper").width()
        const warpperHeight = $("#upload-warpper").height()
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          url = reader.result
          const img = new Image()
          img.src = url
          const width = img.width
          const height = img.height
          let size = ""
          if (width > height) {
            size = "auto 100%"
          } else {
            size = "100% auto"
          }
          $("#upload-warpper")
            .css("background-image", 'url("' + url + '")')
            .css('background-size', "100%")
            .css('background-repeat', 'no-repeat')
            .css('background-position', 'top')

          $(".upload-text").hide()
        }
      },
      submitImageTemplate: function () {
        //提交图片实例
        //TODO
        var formData = new FormData();
        this.imageList.forEach(ele => {
          formData.append("upfile[]", ele);
        })

        $.ajax({
          url: "1.php",
          type: "POST",
          data: formData,
          cache: false, //不设置缓存
          processData: false, // 不处理数据
          contentType: false // 不设置内容类型
        });
      },
      autoSave(){
        const self = this
        setInterval(() => {
          this.save()
          self.notice("自动保存!")
        },60*1000*2)
      }
    },
    mounted: function () {
      this.initEditor()
      $("#input-tags").tagsinput();
      this.autoSave()
    }
  })
}
