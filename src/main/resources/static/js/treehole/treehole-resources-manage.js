var resourcesManageApp = undefined

if (!resourcesManageApp) {
  resourcesManageApp = new Vue({
    el: '#resources-manage',
    data: {
      query: {
        title: '',
        type: '0'
      },
      resourcesTypes: [{
          value: '0',
          text: '选择素材类型'
        },
        {
          value: '1',
          text: 'JPEG'
        },
        {
          value: '2',
          text: 'PNG'
        },
        {
          value: '3',
          text: 'PDF'
        },
        {
          value: '4',
          text: 'DOC'
        }
      ],
      datas: [{
          id: '1',
          name: '首页截图',
          updatets: '2018-01-01 00:00:00',
          fileType: 'image/png',
          url: 'http://172.30.156.184:3000/files/1'
        },
        {
          id: '1',
          name: '首页截图',
          updatets: '2018-01-01 00:00:00',
          fileType: 'image/png',
          url: 'http://172.30.156.184:3000/files/2'
        }
      ],
      control: {
        notice: false,
        noticeMsg: ''
      },
      page: {
        current: 1,
        pageSize: 10,
        total: 100
      },
      uploadFiles: []
    },
    methods: {
      queryAction: function () {
        console.log(this.query)
        // this.uploadFiles[0].uploadSize = this.uploadFiles[0].uploadSize+1
      },
      copyUrl: function (url) {
        console.log(url)
      },
      initClipboard: function () {
        var self = this
        var clipboard = new ClipboardJS('.btn')
        clipboard.on('success', function (e) {
          // console.info('Text:', e.text);
          self.control.notice = true
          self.control.noticeMsg = '已经成功复制到剪贴板，快去粘贴吧'
          e.clearSelection()
        })
      },
      pageChange: function (current) {
        console.log(current)
      },
      removeFile: function (line) {
        this.uploadFiles.forEach((element, index) => {
          if (element === line) {
            this.uploadFiles.splice(index, 1)
          }
        });
      },
      inputFile: function () {
        const self = this
        const files = $('#resources-fileload')[0].files
        const filesList = []
        for (let i = 0; i < files.length; i++) {
          filesList.push(files[i])
        }
        filesList.filter(file => {
          return true
        }).forEach(element => {
          self.uploadFiles.push({
            name: element.name,
            size: 4470079488,
            uploadSize: 0
          })
        });
      },
      uploadFileStage: function (index, uploadFileSize) {
        const element = this.uploadFiles[index]
        element.uploadSize = uploadFileSize
        if (element.uploadSize >= element.size) {
          this.removeFile(element)
        }
      }
    },
    mounted: function () {
      // alert(1)
      var self = this
      this.initClipboard()
      setInterval(() => {
        // console.log(1);
        self.uploadFiles.forEach((element, index) => {
          if(index == 0){
            self.uploadFileStage(index, element.uploadSize + 10000000)
          }
        });
      }, 100)
    }
  })
}
