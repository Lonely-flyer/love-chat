<template>
  <div class="hello">
    <el-header>
      <el-row>
        <el-col :span="12">
          <div class="logo">
            <p>{{msg}}</p>
          </div>
        </el-col>
        <el-col :span="12">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            text-color="#999999"
            active-text-color="#3B94F9"
            background-color="transparent"
            mode="horizontal"
            @select="handleSelect"
            :router="true"
          >
            <el-menu-item
              v-for="list in menuData"
              :key="list.id"
              :index="list.hrefs"
              v-if="list.id==1"
            >
              <a :href="list.href">{{list.title}}</a>
            </el-menu-item>
            <el-menu-item
              v-for="list in menuData"
              :key="list.id"
              :index="list.hrefs"
              v-if="list.id==2"
            >
              <a :href="list.href">{{list.title}}</a>
            </el-menu-item>
            <el-menu-item
              v-for="list in menuData"
              :key="list.id"
              :index="list.hrefs"
              :class="{active:active==='list.id'}"
              v-if="list.id==3"
            >
              <router-link to="./price" tag="a" target="_blank">{{list.title}}</router-link>
            </el-menu-item>
            <el-menu-item
              v-for="list in menuData"
              :key="list.id"
              :index="list.hrefs"
              :class="{active:active==='list.id'}"
              v-if="list.id==4"
            >
              <a :href="list.href">{{list.title}}</a>
            </el-menu-item>
            <el-menu-item
              v-for="list in menuData"
              :key="list.id"
              :index="list.hrefs"
              :class="{active:active==='list.id'}"
              v-if="list.id==5"
            >
              <a :href="list.href">{{list.title}}</a>
            </el-menu-item>
            <el-menu-item
              v-for="list in menuData"
              :key="list.id"
              :index="list.hrefs"
              :class="{active:active==='list.id'}"
              v-if="list.id==6"
            >
              <a :href="list.href">{{list.title}}</a>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-main>
        <!-- 主要内容 -->
        <el-row>
          <el-col :span="24" id="pg1">
            <!-- banner部分 -->
            <el-image style="width: 100%; height: auto" :src="urlbanner" :fit="fill"></el-image>
            <div class="bannertit">
              <h1>LoveChat-爱聊天</h1>
              <h2>企业定制化开发服务</h2>
              <p>ENTERPRISE CUSTOMIZED</p>
              <p>DEVELOPMENT SERVICE</p>
            </div>
            <el-image
              style="width:18%;height:auto;"
              :src="urlbannerapp1"
              :fit="contain"
              class="bnapp1"
            ></el-image>
            <el-image
              style="width:15%;height:auto;"
              :src="urlbannerapp2"
              :fit="contain"
              class="bnapp2"
            ></el-image>
            <el-button type="primary" class="bannerBT" @click="createdownload">点击下载</el-button>
          </el-col>
          <el-col :span="24" id="pg2">
            <!-- 核心功能 -->
            <div class="pg2">
              <p>
                <el-image style="width: 90px; height: 11px" :src="urljtleft" :fit="fill"></el-image>
                <span>核心功能</span>
                <el-image style="width: 90px; height: 11px" :src="urljtright" :fit="fill"></el-image>
              </p>
              <p>CORE FUNCTIONS</p>
              <div class="gn-wrap">
                <el-row :gutter="10">
                  <el-col :span="18" :offset="3">
                    <div class="gn" v-for="list in gndt" :key="list.id" v-if="list.id<6">
                      <el-image
                        style="width: 110px; height: 110px;margin:20px auto 0 auto;"
                        :src="list.imgurl"
                        :fit="contain"
                      lazy></el-image>
                      <p>{{list.tit}}</p>
                      <p>{{list.text}}</p>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="18" :offset="3">
                    <div class="gn" v-for="list in gndt" :key="list.id" v-if="list.id>5">
                      <el-image
                        style="width: 110px; height: 110px;margin:20px auto 0 auto;"
                        :src="list.imgurl"
                        :fit="contain"
                      lazy></el-image>
                      <p>{{list.tit}}</p>
                      <p>{{list.text}}</p>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>

          <el-col :span="24">
            <!-- 我们的优势 -->
            <div class="pg2">
              <p>
                <el-image style="width: 90px; height: 11px;" :src="urljtleft" :fit="fill" lazy></el-image>
                <span>我们的优势</span>
                <el-image style="width: 90px; height: 11px" :src="urljtright" :fit="fill" lazy></el-image>
              </p>
              <p>OUR ADVANTAGES</p>
              <div class="ys-wrap">
                <el-carousel
                  :autoplay="true"
                  loop
                  :interval="4000"
                  type="card"
                  height="380px"
                  indicator-position="none"
                  arrow="always"
                  style="width:1200px;margin:0 auto;"
                >
                  <el-carousel-item v-for="item in ysData" :key="item.id">
                    <div class="ys medium">
                      <el-image style="width: 102px; height: auto;" :src="item.url" :fit="fill"></el-image>
                      <h3>{{item.tit}}</h3>
                      <p>{{item.text}}</p>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </el-col>
          <el-col :span="24" id="pg3">
            <div class="pg3">
              <!-- 立即试用电脑及app图片展示 -->
              <el-image
                style="width: 12%; height:auto;bottom:185px;left:50%;margin-left:-30%;z-index:3;"
                :src="liphone"
              lazy></el-image>
              <el-image
                style="width: 16%; height:auto;bottom:168.5px;left:50%;margin-left:-21%;z-index:2"
                :src="riphone"
              lazy></el-image>
              <el-image
                style="width: 56%; height:auto;bottom:200px;left:50%;margin-left:-22%;z-index:1"
                :src="symac"
              lazy></el-image>
              <el-button type="primary" style="button-sy" @click="createdownload">{{sybutton}}</el-button>
            </div>
          </el-col>
          <el-col :span="24" id="pg5">
            <div class="pg5">
              <!-- 加入我们大banner -->
              <p>招代理</p>
              <button class="jrwm" @click="popqq">加入我们</button>
            </div>
          </el-col>
          <el-col :span="24" id="pg6">
            <div class="pg6 pg2">
              <!-- 底部的logo以及启动图 -->
              <p>
                <el-image style="width: 90px; height: 11px;" :src="urljtleft" :fit="fill" lazy></el-image>
                <span>成功案例</span>
                <el-image style="width: 90px; height: 11px" :src="urljtright" :fit="fill" lazy></el-image>
              </p>
              <p>SUCCESSFUL CASE</p>
              <div>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="启动图" name="first">
                    <!-- 启动图组件待找寻封装 -->
                    <div id="carousel">
                      <img v-for="(start,index) in startDt" :key="index" :src="start" alt />
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="LOGO" name="second">
                    <div class="logowrap">
                      <el-row
                        :gutter="15"
                        style="display:flex;justify-content:center;margin:82px 0 0 0;"
                      >
                        <el-col v-for="(item,index) in logoDt" :key="index" v-if="index<7">
                          <el-image style="width: 80px; height: 80px" :src="item" :fit="fill"></el-image>
                        </el-col>
                      </el-row>
                      <el-row
                        :gutter="15"
                        style="display:flex;justify-content:center;margin-top:56px;"
                      >
                        <el-col
                          v-for="(item,index) in logoDt"
                          :key="index"
                          v-if="index>6&&index<14"
                        >
                          <el-image style="width: 80px; height: 80px" :src="item" :fit="fill"></el-image>
                        </el-col>
                      </el-row>
                      <el-row
                        :gutter="15"
                        style="display:flex;justify-content:center;margin-top:56px;"
                      >
                        <el-col
                          v-for="(item,index) in logoDt"
                          :key="index"
                          v-if="index>13&&index<21"
                        >
                          <el-image style="width: 80px; height: 80px" :src="item" :fit="fill"></el-image>
                        </el-col>
                      </el-row>
                      <el-row
                        :gutter="15"
                        style="display:flex;justify-content:center;margin:56px 0 82px 0;"
                      >
                        <el-col v-for="(item,index) in logoDt" :key="index" v-if="index>20">
                          <el-image style="width: 80px; height: 80px" :src="item" :fit="fill"></el-image>
                        </el-col>
                      </el-row>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </el-col>
        </el-row>
        <!-- 右小角的展开菜单 -->
        <div class="dianjizixun">
          <div
            class="rightside"
            v-for="rsitem in rightsideDT"
            :key="rsitem.id"
            v-if="rsitem.id==1"
            @mouseenter="popqq1"
            @mouseleave="popqq2"
          >
            <el-image style="rsitem.size" :src="rsitem.url" :fit="fill" @click="popqq"></el-image>
            <p>{{rsitem.tit}}</p>
            <div class="popqq" v-if="qqshow" @mouseover="popqq1" @mouseleave="popqq2">
              <el-image style="width: 110px; height: auto;" :src="popcodeqq" :fit="contain" lazy></el-image>
              <el-button
                style="cursor:pointer;"
                size="mini"
                type="primary"
                @click="popqq"
              >{{poptit1}}</el-button>
            </div>
          </div>
          <div
            style="margin-top:15px;"
            class="rightside"
            v-for="rsitem in rightsideDT"
            :key="rsitem.id"
            v-if="rsitem.id==2"
            @mouseover="popvx"
            @mouseleave="popvx1"
          >
            <el-image style="rsitem.size" :src="rsitem.url" :fit="fill"></el-image>
            <p>{{rsitem.tit}}</p>
          </div>
          <div
            style="margin-top:15px;"
            class="rightside"
            v-for="rsitem in rightsideDT"
            :key="rsitem.id"
            v-if="rsitem.id==3"
            @mouseover="popcode"
            @mouseleave="popcode1"
          >
            <el-image style="rsitem.size" :src="rsitem.url" :fit="fill"></el-image>
            <p>{{rsitem.tit}}</p>
          </div>
          <div
            style="cursor:pointer;margin-top:15px;"
            class="rightside"
            v-for="rsitem in rightsideDT"
            :key="rsitem.id"
            v-if="rsitem.id==4"
            @click="backtop"
          >
            <el-image style="rsitem.size" :src="rsitem.url" :fit="fill"></el-image>
            <p>{{rsitem.tit}}</p>
          </div>
        </div>
        <!-- 弹出的二维码部分 -->
        <div class="popvx" v-if="vxshow">
          <el-image style="width: 110px; height: auto" :src="popcodevx" :fit="contain" lazy></el-image>
          <p>{{poptit2}}</p>
        </div>
        <div class="popcode" v-if="codeshow">
          <el-image style="width: 110px; height: auto" :src="popcodelogo" :fit="contain" lazy></el-image>
          <p>{{poptit3}}</p>
        </div>
      </el-main>
    </el-container>
    <el-footer>
      <p>copyright - 2019 萌信 - 沪ICP备19020465号-2</p>
    </el-footer>
  </div>
</template>

<script>
// import Element from "element-ui";
import "../assets/js/jquery.waterwheelCarousel.min";
// import $ from "jquery";

export default {
  name: "lovechat",
  // components: { Element },
  data() {
    return {
      sybutton: "立即下载",
      fill: "fill",
      contain: "contain",
      cover: "cover",
      none: "none",
      scaledown: "scale-down",
      urlbanner: require("@/assets/pc-home/banner.png"),
      urlbannerapp1: require("@/assets/pc-home/bannerapp1.png"),
      urlbannerapp2: require("@/assets/pc-home/bannerapp2.png"),
      urljtleft: require("@/assets/pc-home/jiantouleft.png"),
      urljtright: require("@/assets/pc-home/jiantouright.png"),
      liphone: require("@/assets/pc-home/l-iPhone.png"),
      riphone: require("@/assets/pc-home/r-iPhone.png"),
      symac: require("@/assets/pc-home/shiyong.png"),

      msg: "LoveChat-爱聊天",
      activeIndex: "/",
      menuData: [
        {
          id: "1",
          title: "首页",
          href: "/",
          hrefs: "/"
        },
        {
          id: "2",
          title: "产品特色",
          href: "#pg2",
          hrefs: "#pg2"
        },

        {
          id: "3",
          title: "服务价格",
          hrefs: "./"
        },
        {
          id: "4",
          title: "立即下载",
          hrefs: "/download"
        },
        {
          id: "5",
          title: "招代理",
          href: "#pg5",
          hrefs: "#pg5"
        },
        {
          id: "6",
          title: "成功案例",
          href: "#pg6",
          hrefs: "#pg6"
        }
      ],
      active: 0,

      rightsideDT: [
        {
          id: "1",
          url: require("../assets/pc-home/qq.png"),
          tit: "QQ",
          methods: "popqq"
        },
        {
          id: "2",
          url: require("../assets/pc-home/wx.png"),
          tit: "微信",
          methods: "popvx"
        },
        {
          id: "3",
          url: require("../assets/pc-home/phone.png"),
          tit: "二维码",
          methods: "popcode"
        },
        {
          id: "4",
          url: require("../assets/pc-home/backtop.png"),
          tit: "置顶",
          methods: "backtop"
        }
      ],

      // 二维码弹出框数据
      popcodeqq: require("../assets/pc-home/popqq.png"),
      popcodevx: require("../assets/pc-home/popvx.jpg"),
      popcodelogo: require("../assets/pc-home/popcode.png"),
      poptit1: "立即咨询",
      poptit2: "添加微信",
      poptit3: "扫码下载",

      // 核心功能数据
      gndt: [
        {
          id: "1",
          imgurl: require("../assets/pc-home/lt.png"),
          tit: "聊天",
          text: "语音/小视频/红包/转账/图片等功能"
        },
        {
          id: "2",
          imgurl: require("../assets/pc-home/jq.png"),
          tit: "创建群",
          text: "创建私有群/公开群，群聊人数无限制"
        },
        {
          id: "3",
          imgurl: require("../assets/pc-home/jy.png"),
          tit: "群禁言",
          text: "禁言某个成员/禁言全体成员等功能"
        },
        {
          id: "4",
          imgurl: require("../assets/pc-home/xh.png"),
          tit: "消息摧毁",
          text: "群主和群管理可以摧毁群内任何消息"
        },
        {
          id: "5",
          imgurl: require("../assets/pc-home/pyq.png"),
          tit: "朋友圈",
          text: "支持发送图片及文字内容，支持互相评论及点赞"
        },
        {
          id: "6",
          imgurl: require("../assets/pc-home/hb.png"),
          tit: "红包",
          text: "好友红包/转账/群普通红包/群拼手气红包"
        },
        {
          id: "7",
          imgurl: require("../assets/pc-home/qcysz.png"),
          tit: "群成员设置",
          text: "群主和管理员可以设置群成员不能互加好友"
        },
        {
          id: "8",
          imgurl: require("../assets/pc-home/qgg.png"),
          tit: "群公告",
          text: "群主和管理员能发布群公告，发布时会@所有人"
        },
        {
          id: "9",
          imgurl: require("../assets/pc-home/kfpt.png"),
          tit: "开放平台",
          text: "提供第三方借口：QQ/微信，操作更方便"
        },
        {
          id: "10",
          imgurl: require("../assets/pc-home/xcx.png"),
          tit: "网页小程序",
          text: "支持主页网页小程序后台自由配置，灵活方便"
        }
      ],

      ysData: [
        {
          id: "1",
          url: require("../assets/pc-home/siyouyun.png"),
          tit: "私有部署服务",
          text:
            "所有代码程序运行在客户自己的服务器里，没有任何人可以监控和盗取重要用户的聊天和业务信息，协议加密方式仿照微信，充分保护隐私，也适用于社交产品创业团队，制作自己独立版权和品牌的产品 。"
        },
        {
          id: "2",
          url: require("../assets/pc-home/tongxunxieyi.png"),
          tit: "自研通讯协议",
          text:
            "仿照微信、陌陌实现，100%纯定制自研通讯协议，和其他团队不同，我们团队主要成员来自微信与陌陌，都是通过多年经验自行设计协议，不是tigase或openfire二次开发。市场上的私有IM团队，都是用开源框架二次开发，安全性并不高，扩展也不够灵活。 "
        },
        {
          id: "3",
          url: require("../assets/pc-home/wendingbaozhang.png"),
          tit: "长期稳定维护",
          text:
            "稳定团队保姆式服务，7 X 24小时保持10分钟内处理问题，有夜班专员时刻陪护。程序源码指导，二次开发教学。Logo与界面免费定制设计。我们只做高端，只做省心。产品一次购买，终身更新。线下正规公司，不套路，不跑路，值得信赖 。"
        }
      ],
      startDt: [],
      logoDt: [],
      activeName: "first",
      nav: "ture",
      qqshow: false,
      vxshow: false,
      codeshow: false
    };
  },

  created() {
    for (var i = 1; i <= 28; i++) {
      var temp = require("../assets/logo/logo" + i + ".png");
      this.logoDt.push(temp);
    }
    for (var j = 1; j <= 16; j++) {
      var temp = require("../assets/start/start" + j + ".png");
      this.startDt.push(temp);
    }
  },
  mounted() {
    $("#carousel").waterwheelCarousel({
      startingFeature: "5",
      autoPlay: "4000",
      stopOnHover: "false",
      preload:"true",
    });
  },
  methods: {
   
    },

    pop: function(popWords) {
      //关键字
      this[popWords]();
    },
    popqq: function() {
      window.open("http://wpa.qq.com/msgrd?v=3&uin=2147774703&site=qq&menu=yes");
    },
    popqq1: function() {
      this.qqshow = true;
    },
    popqq2: function() {
      this.qqshow = false;
    },
    popvx: function() {
      this.vxshow = true;
    },
    popvx1: function() {
      this.vxshow = false;
    },
    popcode: function() {
      this.codeshow = true;
    },
    popcode1: function() {
      this.codeshow = false;
    },
    backtop: function() {
      if ($("html").scrollTop()) {
        $("html").animate({ scrollTop: 0 }, 1000);
        return false;
      }
      $("body").animate({ scrollTop: 0 }, 1000);
      return false;
    },
    createdownload() {
      let routeData = this.$router.resolve({ path: "/download" });
      window.open(routeData.href, "_blank");
    },
    handleClick(tab, event) {
      }
};
</script>

<style lang="scss">
html {
  font-size: 62.5%;
}

.el-header,
.el-footer {
  color: #fff;
  text-align: center;
  min-width: 1200px;
}
.el-footer {
  margin: 0;
  height: 50px !important;
  background-color: #000;
}
.el-footer p {
  height: 50px;
  font-size: 18px;
  font-family: Songti SC;
  font-weight: 400;
  color: rgba(179, 179, 179, 1);
  line-height: 50px;
}
.el-header {
  position: fixed;
  width: 100%;
  top: 0%;
  background: #fff;
  z-index: 999;
  margin: 0 auto;
}

.el-header .el-row .el-col .logo {
  display: flex;
  align-items: center;
  margin: 12px auto;
  padding-left: 60px;
  max-height: 46px;
  height: 100%;
  width: 40%;
  overflow: hidden;
  background: url("../assets/pc-home/logo.png") no-repeat center left;
  background-size: 35px 35px;
  p {
    font-size: 24px;
    color: #3b94f9;
    line-height: 100%;
    text-align: center;
  }
}

.el-header .el-row .el-col {
  height: 40px;
}

.el-menu {
  width: 100%;
  border: 0;
}
.el-menu.el-menu--horizontal {
  border: 0;
}
.el-menu-item {
  font-size: 20px;
  text-align: center;
  padding: 0 10px;
  border-bottom: solid 3px transparent;
  background-color: transparent !important;
  a {
    display: block;
    text-decoration: none;
    height: 100%;
  }
}
.el-menu--horizontal > .el-menu-item.is-active {
  font-weight: bold;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  color: #333;
  text-align: center;
  height: auto;
  width: 100%;
  min-width: 1200px;
  padding: 0;
}
.el-row {
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  width: 100%;
}
#pg1 {
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 1200px;
  .bannertit {
    position: absolute;
    left: 15%;
    top: 25%;
    z-index: 1;
    text-align: left;
    margin-block-start: 0;
    margin-block-end: 0;
    h1 {
      font-size: 60px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(2, 69, 145, 1);
      line-height: 86px;
      margin-block-start: 0;
      margin-block-end: 0;
    }
    h2 {
      font-size: 45px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(2, 69, 145, 1);
      line-height: 86px;
      margin-block-start: 0;
      margin-block-end: 0;
    }
    p {
      font-size: 26px;
      font-family: PingFang SC;
      font-weight: 350;
      color: rgba(2, 69, 145, 1);
      line-height: 41px;
      margin-block-start: 0;
      margin-block-end: 0;
    }
  }
}
.bnapp1 {
  position: absolute;
  left: 60%;
  bottom: 20%;
  z-index: 4;
}
.bnapp2 {
  position: absolute;
  left: 78%;
  bottom: 20%;
  z-index: 2;
}
.bannerBT {
  position: absolute;
  left: 20%;
  top: 70%;
  box-sizing: border-box;
  border-radius: 10px;
  background: rgba(1, 120, 248, 1);
  height: 10%;
  width: 15%;
  text-align: center;
  font-size: 28px;
}
#pg1 .el-image {
  overflow: visible;
}
.pg2,
.pg4 {
  background-color: #fff;
  overflow: hidden;
}
.pg2,
.pg3,
.pg5 {
  margin-top: 60px;
}
.pg2 span {
  width: 154px;
  height: 42px;
  font-size: 40px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  margin: 0 24px 0 24px;
}
.pg2 > p:nth-child(2) {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 24px;
  letter-spacing: 1px;
  margin-top: 16px;
}
.gn-wrap {
  height: 550px;
  padding-top: 20px;
  margin: 20px auto;
  .el-row {
    margin-top: 20px;
  }
  ul {
    right: 150px;
    .is-active {
      background-color: rgba(170, 170, 170, 1);
    }
    li {
      margin: 5px;
      width: 10px;
      height: 10px;
      border: 1px solid rgba(204, 204, 204, 1);
      border-radius: 50%;
      padding: 0;
      button {
        background: transparent;
      }
    }
  }
}

.gn {
  width: 18%;
  margin: 0 1%;
  height: 255px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 14px 0px rgba(182, 182, 182, 0.43);
  border-radius: 5px;
  float: left;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  transition: all 1s;
}
.gn:hover {
  transform: scale(1.1);
}
.gn p:nth-of-type(1) {
  margin-bottom: 30px;
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(17, 17, 17, 1);
  line-height: 21px;
}
.gn p:nth-of-type(2) {
  height: 42px;
  font-size: 16px;
  font-family: Songti SC;
  font-weight: 400;
  color: rgba(17, 17, 17, 1);
  margin: 20px 10px;
}
.ys-wrap {
  margin: 50px auto 10px auto;
}
.el-carousel--horizontal {
  overflow-x: visible;
}
.ys-wrap .el-carousel__item {
  width: 392px;
  height: 380px;
  box-sizing: border-box;
  box-shadow: 0px 0px 14px 0px rgba(182, 182, 182, 0.43);
  background: #fff;
  padding: 30px;
  left: 8.5%;
}
.ys h3 {
  display: block;
  width: 158px;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(17, 17, 17, 1);
  line-height: 28px;
  margin: 20px auto;
}
.ys p {
  display: block;
  width: 337px;
  font-size: 14px;
  font-family: Songti SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 28px;
  text-align: left;
  margin: 20px auto;
}
#pg3 {
  width: 100%;
  background: rgba(248, 251, 254, 1);
  text-align: center;
}
.pg3 {
  position: relative;
  height: 800px;
  min-width: 1200px;
  max-width: 1920px;
  margin: 0 auto;
  margin-top: 140px;
  .el-image {
    position: absolute;
  }
}
@media (max-width: 1200px) {
  .pg3 {
    height: 500px;
  }
}
@media (min-width: 1200px) and (max-width: 1400px) {
  .pg3 {
    height: 550px;
  }
}
@media (min-width: 1400px) and (max-width: 1600px) {
  .pg3 {
    height: 600px;
  }
}
@media (min-width: 1600px) and (max-width: 1800px) {
  .pg3 {
    height: 700px;
  }
}

.pg3 .el-button {
  position: absolute;
  bottom: 15px;
  left: 50%;
  display: block;
  margin: 20px auto;
  box-sizing: border-box;
  border-radius: 10px;
  background: rgba(1, 120, 248, 1);
  height: 82px;
  width: 228px;
  text-align: center;
  font-size: 28px;
  margin-left: -114px;
  z-index: 4;
}
#pg4 {
  margin-bottom: 40px;
  .el-button--mini,
  .el-button--mini.is-round {
    padding: 7px 5px;
  }
}
.pg4 {
  margin-top: 50px;
}
.download {
  margin: 120px auto 0 auto;
  p {
    height: 22px;
    font-size: 22px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 24px;
    margin: 40px auto;
  }
  .el-button {
    width: 176px;
    height: 46px;
    background: rgba(59, 148, 249, 1);
    border-radius: 23px;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 28px;
  }
}
.pg5 {
  height: 281px;
  width: 100%;
  background: url("../assets/pc-home/zdl.png") no-repeat center;
  text-align: center;
  padding-top: 74px;
  position: relative;
  box-sizing: border-box;
  p {
    height: 61px;
    font-size: 63px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
  .jrwm {
    position: absolute;
    top: 174px;
    left: 50%;
    margin-left: -80px;
    width: 160px;
    height: 44px;
    background: rgba(255, 187, 0, 1);
    border-radius: 6px;
    border: 0;
    outline: 0;
    cursor: pointer;
    font-size: 23px;
    color: rgba(255, 255, 255, 1);
  }
}
.el-tabs__nav {
  left: 50%;
  margin-left: -158.5px;
  margin-top: 7px;
}
.el-tabs__item {
  height: 45px;
  padding: 0 87px;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(59, 148, 249, 1);
  line-height: 45px;
}
.el-tabs__active-bar {
  height: 4px;
}
.el-tabs__nav-wrap::after {
  height: 0;
}
.el-tabs__header {
  margin: 20px 0 20px 0;
}
.el-tabs__content {
  height: 621px;
  margin: 30px auto;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(12, 17, 28, 0.16);
}
.logowrap {
  width: 1200px;
  margin: 0 auto;
}
.minibutton {
  position: fixed;
  bottom: 40px;
  right: 20px;
  width: 120px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(236, 235, 235, 1);
  border-radius: 10px;
  z-index: 998;
}
// 右小角的咨询部分
.dianjizixun {
  position: fixed;
  right: 10px;
  bottom: 30px;
  width: 90px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(236, 235, 235, 1);
  border-radius: 6px;
  z-index: 999;
}
.rightside {
  margin: 10px auto;
}
.rightside p {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 36px;
  margin-block-start: 0;
  margin-block-end: 0;
}
.el-collapse-item__header,
.el-collapse-item__wrap {
  border-radius: 10px;
  color: rgb(59, 148, 249);
  font-weight: bold;
  padding-left: 20px;
}
.el-collapse-item__wrap {
  padding-left: 0 !important;
}
// 轮播图插件css
#carousel {
  margin: 100px auto 0 auto;
  width: 1200px;
  height: 400px;
}
#carousel img {
  opacity: 1 !important;
  width: 300px;
  height: auto;
  display: block; /* hide images until carousel prepares them */
  cursor: pointer; /* not needed if you wrap carousel items in links */
}
// 弹出二维码部分
.popqq {
  position: fixed;
  bottom: 300px;
  right: 100px;
  width: 120px;
  height: 140px;
  padding: 12px;
  z-index: 997;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(175, 175, 175, 0.34);
  border-radius: 10px;
  .el-button {
    background: #3b94f9;
    color: white;
    border-radius: 20px;
  }
}
.popvx {
  position: fixed;
  bottom: 200px;
  right: 100px;
  width: 120px;
  height: 120px;
  padding: 12px;
  z-index: 997;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 16px 0px rgba(175, 175, 175, 0.34);
  border-radius: 10px;
}
.popcode {
  position: fixed;
  bottom: 80px;
  right: 100px;
  width: 120px;
  height: 120px;
  padding: 12px;
  z-index: 997;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 16px 0px rgba(175, 175, 175, 0.34);
  border-radius: 10px;
}
</style>
