var articleCount = 0;
var app = undefined
if(!app){
  new Vue({
    el: '#treehole-dashboard',
    data: {
      message: 'Hello Vue!',
      countData: {
        articleCount: {
          count: articleCount
        },
        commontCount: {
          count: 10086,
          newAddCount: 12,
          peopleCount: 100
        },
        resourcesCount: {
          count: 112
        },
        visitCount: {
          count: 112
        }
      },
      weekCount: {
        pvCount: 10,
        uvCount: 75,
        ipCount: 12340,
        commontCount: 0
      },
      loginLog: [{
        ip: "192.168.1.1",
        ts: "2018-01-01 00:00:00",
        action: "登录： admin"
      },{
        ip: "192.168.1.1",
        ts: "2018-01-01 00:00:00",
        action: "登录： admin"
      },{
        ip: "192.168.1.1",
        ts: "2018-01-01 00:00:00",
        action: "登录： admin"
      },{
        ip: "192.168.1.1",
        ts: "2018-01-01 00:00:00",
        action: "登录： admin"
      }]
    },
    methods: {
      getArticleCount: function() {
        const self = this
        setTimeout(function(){
          self.countData.articleCount.count = 1230
        },2000)
      }
    },
    mounted: function(){
      this.getArticleCount()
    }
  })
}


var ticksStyle = {
  fontColor: '#495057',
  fontStyle: 'bold' // Disable the on-canvas tooltip

};
Chart.defaults.global.pointHitDetectionRadius = 1;
Chart.defaults.global.tooltips.enabled = true;
Chart.defaults.global.tooltips.mode = 'index';
Chart.defaults.global.tooltips.position = 'nearest'; // eslint-disable-next-line no-unused-vars

var mainVisitChart = new Chart($('#main-visit-chart'), {
  type: 'line',
  data: {
    labels: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
    datasets: [{
      backgroundColor: getStyle('--danger'),
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40]
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent'
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 35,
          max: 89
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
});


var mainArticleCounts = new Chart($('#main-article-count'), {
  type: 'bar',
  data: {
    labels: ['java', '生活', 'python', '机器学习', '前端', '深度学习'],
    datasets: [{
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12]
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6
      }],
      yAxes: [{
        display: false
      }]
    }
  }
});


var mainResourceType = new Chart($('#main-resource-type'), {
  type: 'bar',
  data: {
    labels: ['file/pdf', 'image/jpeg', 'image/png'],
    datasets: [{
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 12,30]
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6
      }],
      yAxes: [{
        display: false
      }]
    }
  }
});
