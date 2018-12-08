var settingsSystemApp = undefined

if (!settingsSystemApp) {
  settingsSystemApp = new Vue({
    el: '#settings-system',
    data: {
      accountInfo: {
        loginName: 'amdin',
        nikiName: '风车361',
        loginPasswd: '123123123',
        email: 'zhangyw001@gmail.com'
      },
      accountInfoDisable: {
        loginName: true,
        nikiName: true,
        loginPasswd: true,
        email: true,
        github: true,
        weibo: true,
        wechat: true,
        douban: true,
        juejin: true,
        oschina: true,
        facebook: true,
        twitter: true
      },
      accounts: {
        github: "zhangyingwei",
        weibo: "fengche361",
        wechat: "fengche361",
        douban: "fengche361",
        juejin: "juejin",
        oschina: "oschina",
        facebook: "facebook",
        twitter: 'twitter'
      },
      buttons: {
        text: {
          account: '修改',
          github: "修改",
          weibo: "修改",
          wechat: "修改",
          douban: "修改",
          juejin: "修改",
          oschina: "修改",
          facebook: "修改",
          twitter: '修改'
        }
      }
    },
    methods: {
      changeAccountInfo: function() {
        if (this.accountInfoDisable.loginName) {
          this.accountInfoDisable.loginName = false
          this.accountInfoDisable.nikiName = false
          this.accountInfoDisable.loginPasswd = false
          this.accountInfoDisable.email = false
          this.buttons.text.account = '保存'
        } else {
          this.accountInfoDisable.loginName = true
          this.accountInfoDisable.nikiName = true
          this.accountInfoDisable.loginPasswd = true
          this.accountInfoDisable.email = true
          this.buttons.text.account = '修改'
        }
      },
      accountSetting: function(type) {
        if(this.accountInfoDisable[type]){
          this.accountInfoDisable[type] = false
          this.buttons.text[type] = "保存"
        }else {
          this.accountInfoDisable[type] = true
          this.buttons.text[type] = "修改"
        }
      }
    },
    mounted: function() {
      // alert(1)
    }
  })
}
