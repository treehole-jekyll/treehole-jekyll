var visitApp = undefined

if (!visitApp) {
  visitApp = new Vue({
    el: "#treehole-visit-from",
    data: {
      msg: 'hello',
      charts: {
        names: {
          area_from_char: undefined,
          referer_from_char: undefined,
          search_from_char: undefined,
          iso_type_char: undefined
        },
        datas: {
          area_from_option: {
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
              data: []
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
          referer_from_option: {
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
              data: []
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
          search_from_option: {
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
          iso_type_option: {
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
          }
        }
      },
    },
    methods: {
      initCharts: function () {
        this.charts.names.area_from_char = echarts.init(document.getElementById('area-from'), 'treehole');
        this.charts.names.referer_from_char = echarts.init(document.getElementById('referer-from'), 'treehole');
        this.charts.names.search_from_char = echarts.init(document.getElementById('search-from'), 'treehole');
        this.charts.names.iso_type_char = echarts.init(document.getElementById('iso-type'), 'treehole');
      },
      showAreaFromChar: function () {
        this.charts.names.area_from_char.setOption(this.charts.datas.area_from_option)
      },
      showRefererFromChar: function () {
        this.charts.names.referer_from_char.setOption(this.charts.datas.referer_from_option)
      },
      showSearchFromChar: function () {
        this.charts.names.search_from_char.setOption(this.charts.datas.search_from_option)
      },
      showIsoTypeChar: function () {
        this.charts.names.iso_type_char.setOption(this.charts.datas.iso_type_option)
      },
      loadAreaFromData: function () {
        const data = [{
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

        this.charts.datas.area_from_option.series[0].data = data.sort(function (a, b) {
          return a.value - b.value;
        })
        this.charts.datas.area_from_option.legend.data = data.map(line => line.name)
        this.showAreaFromChar()
      },
      loadRefererFromData: function () {
        const data = [{
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
        this.charts.datas.referer_from_option.series[0].data = data.sort(function (a, b) {
          return a.value - b.value;
        })
        this.charts.datas.referer_from_option.legend.data = data.map(line => line.name)
        this.showRefererFromChar()
      },
      loadSearchFromData: function() {
        const data = [
          { name: '百度', value: 100 },
          { name: '谷歌', value: 120 },
          { name: '搜狗', value: 99 },
          { name: '必应', value: 160}
        ]
        this.charts.datas.search_from_option.series[0].data = data.map(line=>line.value)
        this.charts.datas.search_from_option.xAxis[0].data = data.map(line => line.name)
        console.log(this.charts.datas.search_from_option)
        this.showSearchFromChar()
      },
      loadIsoTypeData: function() {
        const data = [
          {name: '安卓',value: 10},
          {name: 'IOS',value: 20},
          {name: 'windows7',value: 49},
          {name: 'macOS',value: 28}
        ]
        this.charts.datas.iso_type_option.series[0].data = data.map(line => line.value)
        this.charts.datas.iso_type_option.xAxis[0].data = data.map(line => line.name)
        this.showIsoTypeChar()
      }
    },
    mounted: function () {
      this.initCharts()
      this.showAreaFromChar()
      this.showRefererFromChar()
      this.showSearchFromChar()
      this.showIsoTypeChar()

      this.loadAreaFromData()
      this.loadRefererFromData()
      this.loadSearchFromData()
      this.loadIsoTypeData()
    }
  })
}
