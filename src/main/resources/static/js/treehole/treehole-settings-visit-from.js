var visitFromApp = undefined

if (!visitFromApp) {
  visitFromApp = new Vue({
    el: "#visit-app",
    data: {
      charts: {
        area_from_char: "",
        referer_from_char: "",
        search_from_char: "",
        iso_type_char: "",
        options: {
          areaFromOption: {
            title: {
              left: 'center',
              textStyle: {
                color: '#ccc'
              }
            },

            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
              show: false,
              min: 80,
              max: 600,
              inRange: {
                colorLightness: [0, 1]
              }
            },
            legend: {
              orient: 'vertical',
              x: 'right',
              data: ['无数据']
            },
            series: [{
              name: '访问地理位置分布',
              type: 'pie',
              radius: '90%',
              center: ['50%', '50%'],
              data: [{
                value: 1,
                name: '无数据'
              }],
              roseType: 'radius',
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(0, 0, 0, 0.3)'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(0, 0, 0, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }]
          },
          refererFromOption: {
            title: {
              left: 'center',
              textStyle: {
                color: '#ccc'
              }
            },

            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
              show: false,
              min: 80,
              max: 600,
              inRange: {
                colorLightness: [0, 1]
              }
            },
            legend: {
              orient: 'vertical',
              x: 'right',
              data: ['baidu.com', 'zhangyignwei.com', 'google.com', 'youtub.com', 'afdsasfdasdf.asfdasfdasdf.com']
            },
            series: [{
              name: '访问地理位置分布',
              type: 'pie',
              radius: '90%',
              center: ['50%', '50%'],
              data: [],
              roseType: 'radius',
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(0, 0, 0, 0.3)'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(0, 0, 0, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }]
          },
          searchFromOption: {
            color: ['#3398DB'],
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [{
              type: 'category',
              data: [],
              axisTick: {
                alignWithLabel: true
              }
            }],
            yAxis: [{
              type: 'value'
            }],
            series: [{
              name: '访问量',
              type: 'bar',
              barWidth: '60%',
              data: []
            }]
          },
          isoTypeOption: {
            color: ['#3398DB'],
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [{
              type: 'category',
              data: ['安卓', 'IOS', 'windows7', 'macOS'],
              axisTick: {
                alignWithLabel: true
              }
            }],
            yAxis: [{
              type: 'value'
            }],
            series: [{
              name: '访问量',
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 200, 334]
            }]
          }
        }
      }
    },
    methods: {
      initAreaFromChar: function () {
        // alert("init area from char")
        this.charts.area_from_char = echarts.init(document.getElementById('area-from'), 'treehole');
        this.charts.area_from_char.setOption(this.charts.options.areaFromOption)
        this.loadAreaFromData()
      },
      loadAreaFromData: function () {
        var data = [{
            value: 335,
            name: '北京'
          },
          {
            value: 310,
            name: '天津'
          },
          {
            value: 274,
            name: '山西'
          },
          {
            value: 235,
            name: '美国'
          },
          {
            value: 205,
            name: '日本'
          },
          {
            value: 235,
            name: '俄罗斯'
          },
          {
            value: 400,
            name: '韩国'
          }
        ]
        this.charts.options.areaFromOption.legend.data = data.map(line => line.name)
        this.charts.options.areaFromOption.series[0].data = data
        this.charts.area_from_char.setOption(this.charts.options.areaFromOption)
      },
      initRefererFromChar: function () {
        this.charts.referer_from_char = echarts.init(document.getElementById('referer-from'), 'treehole');
        this.charts.referer_from_char.setOption(this.charts.options.refererFromOption)
        this.loadRefererFromData()
      },
      loadRefererFromData: function () {
        var data = [{
            value: 335,
            name: 'baidu.com'
          },
          {
            value: 310,
            name: 'zhangyignwei.com'
          },
          {
            value: 274,
            name: 'google.com'
          },
          {
            value: 235,
            name: 'youtub.com'
          },
          {
            value: 205,
            name: 'afdsasfdasdf.asfdasfdasdf.com'
          }
        ]
        this.charts.options.refererFromOption.legend.data = data.map(line => line.name)
        this.charts.options.refererFromOption.series[0].data = data
        this.charts.referer_from_char.setOption(this.charts.options.refererFromOption)
      },
      initSearchFromChar: function () {
        this.charts.search_from_char = echarts.init(document.getElementById('search-from'), 'treehole');
        this.charts.search_from_char.setOption(this.charts.options.searchFromOption)
        this.loadSearchFromData()
      },
      loadSearchFromData: function () {
        var data = [{
            name: '百度',
            value: 100
          },
          {
            name: '谷歌',
            value: 200
          },
          {
            name: '搜狗',
            value: 300
          },
          {
            name: '必应',
            value: 400
          }
        ]
        this.charts.options.searchFromOption.xAxis.data = data.map(line => line.name)
        this.charts.options.searchFromOption.series[0].data = data.map(line => line.value)
        this.charts.search_from_char.setOption(this.charts.options.searchFromOption)
      },
      initIsoTypeChar: function () {
        this.charts.iso_type_char = echarts.init(document.getElementById('iso-type'), 'treehole');
        this.charts.iso_type_char.setOption(this.charts.options.isoTypeOption)
      },
      loadIsoTypeData: function() {
        var data = [{name: '安卓',value: 10}, {name:'IOS',value: 20}, {name:'windows7',value:30}, {name: 'macOS',value: 40}]
        this.charts.options.isoTypeOption.xAxis.data = data.map(line => line.name)
        this.charts.options.isoTypeOption.series[0].data = data.map(line => line.value)
        this.charts.iso_type_char.setOption(this.charts.options.isoTypeOption)
      }
    },
    mounted: function () {
      // alert(1)
      this.initAreaFromChar()
      this.initRefererFromChar()
      this.initSearchFromChar()
      this.initIsoTypeChar()
    }
  })
}
