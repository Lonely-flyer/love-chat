<template>
  <div class="download">
     <button class="backhome" @click="backhomepage">
            <p>返回首页</p>
          </button>
    <div class="navcontants">
      <div class="app" v-show="cur==0">
        <div class="cont">
          <div class="appleft"></div>
          <div class="appright"></div>
          <el-image
            class="animated forwards bounceIn delay-1s"
            style="width: 76px; height: 76px"
            :src="appkfpt"
            :fit="fill"
          ></el-image>
          <el-image
            class="animated forwards bounceIn delay-2s"
            style="width: 66px; height: 66px"
            :src="appwyxcx"
            :fit="fill"
          ></el-image>
          <el-image
            class="animated forwards bounceIn delay-1s"
            style="width: 57px; height: 57px"
            :src="appzz"
            :fit="fill"
          ></el-image>
          <el-image
            class="animated forwards bounceIn delay-2s"
            style="width: 53px; height: 53px"
            :src="apphb"
            :fit="fill"
          ></el-image>
          <el-image
            class="animated forwards bounceIn delay-1s"
            style="width: 73px; height: 73px"
            :src="apppyq"
            :fit="fill"
          ></el-image>
          <el-image
            class="animated forwards bounceIn delay-2s"
            style="width: 41px; height: 41px"
            :src="appqjy"
            :fit="fill"
          ></el-image>
          <div class="tit">
            <p>{{appp1}}</p>
            <p>{{appp2}}</p>
            <el-image style="width: 100px; height: 100px" :src="apperweima" :fit="fill"></el-image>
            <button type="primary" @click="seeweb('https://fir.im/alove')">{{appiphone}}</button>
            <button type="primary" @click="seeweb('https://fir.im/alove')">{{appandroid}}</button>
          </div>
        </div>
      </div>
<div class="pc" v-show="cur==1">
        <div class="cont">
          <div class="pcleft"></div>
          <div class="pcright animated forwards zoomIn delay-1s"></div>
          <div class="tit">
            <p>{{pcp1}}</p>
            <p>{{pcp2}}</p>
            <p>{{pcp3}}</p>
            <el-button type="primary" icon="el-icon-bottom"><a href="/ailovechat.zip">{{pcbutton}}</a></el-button>
          </div>
        </div>
      </div>

      <div class="web" v-show="cur==2">
        <div class="cont">
          <div class="webdemo"></div>
          <div class="tit">
            <p>{{webp1}}</p>
            <p>{{webp2}}</p>
            <p>{{webp3}}</p>
            <el-image style="width: 100px; height: 100px" :src="webh5" :fit="fill"></el-image>
            <el-button
              type="primary"
              @click="seeweb('http://ai.ailovechat.com/webim')"
            >{{webbutthon}}</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="navtabs">
      <a
        href="#"
        v-for="(link,index) in downloadtab"
        :key="index"
        @click="cur=index"
        :class="{active:cur==index}"
      >
        <i :style="{backgroundImage:'url(' + link.url + ')'}"></i>
        <span>{{link.tit}}</span>
      </a>
    </div>
  </div>
</template>
<script>
// import Element from "element-ui";
// import animated from "animate.css";
export default {
  // components: { Element },
  // components: { animated },
  name:"download",
  data() {
    return {
      fill: "fill",
      downloadtab: [
        {
          url: require("../assets/images/Download/sj.png"),
          tit: "手机版",
          gold: "#APP"
        },
        {
          url: require("../assets/images/Download/pc.png"),
          tit: "PC客户端",
          gold: "#PC"
        },
        {
          url: require("../assets/images/Download/web.png"),
          tit: "Web端",
          gold: "#WEB"
        }
      ],
      cur: 0,
      pcp1: "爱聊天PC客户端",
      pcp2: "安全稳定 操作便捷",
      pcp3: "版本: 1.5.0 更新日期: 2019-11-10",
      pcbutton: "立即下载",
      appp1: "爱聊天手机端",
      appp2: "方便快捷 简易操作",
      appkfpt: require("../assets/images/Download/kfpt.png"),
      appwyxcx: require("../assets/images/Download/xcx.png"),
      appzz: require("../assets/images/Download/zz.png"),
      apphb: require("../assets/images/Download/hb.png"),
      apppyq: require("../assets/images/Download/pyq.png"),
      appqjy: require("../assets/images/Download/qjy.png"),
      apperweima: require("../assets/images/Download/erweim.png"),
      appiphone: "iPhone",
      appandroid: "Android",
      webh5: require("../assets/images/Download/webh5.png"),
      webp1: "爱聊天Web端",
      webp2: "轻量便捷 无需下载",
      webp3: "版本: 1.5.0 更新日期: 2019-11-10",
      webbutthon: "立即试用"
    };
  },
  methods: {
    backhomepage() {
      let routeData = this.$router.resolve({ path: "/" });
      window.open(routeData.href, "_blank");
    },
    seeweb(e) {
      window.location.href = e;
    },
    downloadfile(){
        
    }
  }
};
</script>
<style lang="scss" scoped>
.download {
  margin: 0 auto!important;
}
.navcontants {
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
  > div {
    height: 100%;
    width: 100%;
    min-height: 640px;
    padding: 75px 0 170px;
    box-sizing: border-box;
    background: url("../assets/images/Download/lbg.png") no-repeat -100px center,
      url("../assets/images/Download/rbg2.png") no-repeat top right;
    .cont {
      position: relative;
      width: 100%;
      max-width: 1200px;
      height: 100%;
      margin: 0 auto;
      .pcleft {
        position: absolute;
        left: -1000px;
        width: 625px;
        height: 564px;
        background: url("../assets/images/Download/pcleft1.png") no-repeat
          center;
        background-size: 100% 100%;
        animation: pcpage1 1s forwards;
      }
      .pcright {
        position: absolute;
        left: 80px;
        height: 420px;
        width: 656px;
        background: url("../assets/images/Download/pcright1.png") no-repeat
          center;
        background-size: 100% 100%;
        z-index: 1;
      }
      .tit {
        position: absolute;
        top: 60px;
        right: -1000px;
        width: 340px;
        text-align: right;
        z-index: 1;
        height: 275px;
        animation: pcpage3 1s forwards;
        > p:nth-child(1) {
          height: 42px;
          font-size: 43px;
          color: rgba(51, 51, 51, 1);
          line-height: 30px;
          margin-bottom: 32px;
        }
        > p:nth-child(2) {
          height: 19px;
          font-size: 18px;
          color: rgba(123, 123, 123, 1);
          line-height: 30px;
          opacity: 0.8;
          margin-bottom: 19px;
        }
        > p:nth-child(3) {
          height: 13px;
          font-size: 15px;
          color: rgba(195, 195, 195, 1);
          line-height: 30px;
          opacity: 0.8;
          margin-bottom: 48px;
        }
        .el-button {
          width: 135px;
          height: 40px;
          line-height: 20px;
          text-align: center;
          background: linear-gradient(
            90deg,
            rgba(0, 120, 248, 1),
            rgba(75, 155, 241, 1)
          );
          border-radius: 6px;
          border: 0;
          outline: 0; 
        }
      }
    }
  }
}
.cont {
  .tit {
    .el-image {
      position: absolute;
      left: 0;
      bottom: -10px;
    }
  }
}
.delay-6s {
  animation-delay: 6s !important;
}
.delay-7s {
  animation-delay: 7s !important;
}

.app {
  .appleft {
    width: 283px;
    height: 500px;
    position: absolute;
    left: -1234px;
    top: 10px;
    background: url("../assets/images/Download/sjleft.png") no-repeat center;
    background-size: cover;
    animation: apppage1 1s forwards;
  }
  .appright {
    width: 283px;
    height: 500px;
    position: absolute;
    left: -1000px;
    top: 10px;
    background: url("../assets/images/Download/sjright.png") no-repeat center;
    background-size: cover;
    animation: apppage2 1s forwards;
  }
  .el-image:nth-of-type(3) {
    position: absolute;
    left: -60px;
    top: 211px;
  }
  .el-image:nth-of-type(4) {
    position: absolute;
    left: 106px;
    top: -50px;
  }
  .el-image:nth-of-type(5) {
    position: absolute;
    left: 118px;
    top: 470px;
  }
  .el-image:nth-of-type(6) {
    position: absolute;
    left: 251px;
    top: 173px;
  }
  .el-image:nth-of-type(7) {
    position: absolute;
    left: 563px;
    top: 98px;
  }
  .el-image:nth-of-type(8) {
    position: absolute;
    left: 530px;
    top: 358px;
  }
  .cont {
    .tit {
      button {
        width: 110px;
        height: 39px;
        border: 1px solid rgba(70, 153, 241, 1);
        border-radius: 6px;
        background-position: 10px center !important;
        background-size: 20px !important;
        font-size: 13px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        color: rgba(59, 148, 249, 1);
        line-height: 30px;
        padding-left: 30px;
        outline: none;
        cursor: pointer;
        margin-top: 40px;
      }
      button:nth-of-type(1) {
        background: url("../assets/images/Download/anzhuo.png") no-repeat;
        position: absolute;
        right: 0;
        bottom: 40px;
      }
      button:nth-of-type(2) {
        background: url("../assets/images/Download/ios.png") no-repeat;
        position: absolute;
        right: 0;
        bottom: -10px;
      }
    }
  }
}
.pc .cont .tit .el-button a{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
text-decoration: none;
}
.webdemo {
  width: 721px;
  height: 491px;
  position: absolute;
  left: -1000px;
  background: url("../assets/images/Download/macbook2.png") no-repeat center;
  background-size: cover;
  animation: webpage1 1s forwards;
}
@keyframes pcpage1 {
  from {
    left: -1000px;
  }
  to {
    left: 0px;
  }
}
@keyframes pcpage2 {
  from {
    height: 0;
    width: 0;
  }
  to {
    height: 325px;
    width: 508px;
  }
}
@keyframes pcpage3 {
  from {
    right: -1068px;
  }
  to {
    right: 100px;
  }
}
@keyframes apppage1 {
  from {
    left: -1234px;
  }
  to {
    left: 0px;
  }
}
@keyframes apppage2 {
  from {
    left: -1000px;
  }
  to {
    left: 280px;
  }
}
@keyframes webpage1 {
  from {
    left: -1000px;
  }
  to {
    left: 0px;
  }
}
.navtabs {
  height: 84px;
  width: 100%;
  // min-width: 1200px;
  border-top: 1px solid rgba(0, 120, 248, 0.1);
  z-index: 999;
  position: fixed;
  bottom: 0;
  a {
    display: inline-block;
    width: 58px;
    text-align: center;
    text-decoration: none;
    overflow: hidden;
    padding-top: 10px;
    border-top: 2px solid rgba(59, 148, 249, 0);
    margin-top: -2px;
    margin-left: -29px;
    position: absolute;
    i {
      display: block;
      width: 33px;
      height: 28px;
      background: no-repeat center;
      margin: 0 auto;
    }
    span {
      display: block;
      height: 13px;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(104, 104, 104, 1);
      line-height: 8px;
      margin-top: 8px;
    }
  }
  .active {
    border-top: 2px solid rgb(59, 148, 249);
    span {
      color: rgb(59, 148, 249);
      font-weight: bold;
    }
  }
  .active:nth-of-type(1) {
    i {
      background-image: url("../assets/images/Download/sjactive.png") !important;
    }
  }
  .active:nth-of-type(2) {
    i {
      background-image: url("../assets/images/Download/pcactive.png") !important;
    }
  }
  .active:nth-of-type(3) {
    i {
      background-image: url("../assets/images/Download/webactive.png") !important;
    }
  }
}
.navtabs a:first-child {
  left: 25%;
}
.navtabs a:last-child {
  left: 75%;
}
.backhome {
    padding-left: 25px;
    position: absolute;
    top: 20px;
    right: 22%;
    width: 130px;
    height: 40px;
    background:transparent;
    background-image: url("../assets/back2.png");
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 16%;
    border-radius: 7px;
    border: 0;
    outline: 0;
    z-index: 99;
    cursor: pointer;
    p {
      width: 100px;
      margin: 0!important;
      font-size: 18px;
      color: #3B94F9;
    }
  }
</style>
