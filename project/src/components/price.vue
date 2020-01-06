<!--  -->
<template>
  <!-- 价格表部分 -->
  <div>
    <div class="pricetable">
      <div>
        <div class="tabletop">
          <h2>LoveChat爱聊天即时通讯系统第四季度终端价格优惠方案</h2>
          <button @click="backhomepage">
            <p>返回首页</p>
          </button>
        </div>
        <el-table
          :data="tableData"
          :span-method="arraySpanMethod"
          border
          style="width:auto;margin:0 auto;"
        >
          <el-table-column prop="name" header-align="center" label="系列" width="128"></el-table-column>
          <el-table-column prop="explain" header-align="center" label="产品说明" width="300"></el-table-column>
          <el-table-column prop="people" header-align="center" label="群人数" width="84"></el-table-column>
          <el-table-column prop="function" header-align="center" label="功能模块" width="230"></el-table-column>
          <el-table-column prop="after" header-align="center" label="售后服务" width="190"></el-table-column>
          <el-table-column prop="price" header-align="center" label="价格(元)" width="100"></el-table-column>
          <el-table-column prop="project" header-align="center" label="优惠立减方案">
            <template slot-scope="scope">
              <p v-html="scope.row.project"></p>
            </template>
          </el-table-column>
        </el-table>
      </div>

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
            <el-image style="width: 110px; height: auto;" :src="popcodeqq" :fit="contain"></el-image>
            <el-button style="cursor:pointer;" size="mini" type="primary" @click="popqq">{{poptit1}}</el-button>
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
        <el-image style="width: 110px; height: auto" :src="popcodevx" :fit="contain"></el-image>
        <p>{{poptit2}}</p>
      </div>
      <div class="popcode" v-if="codeshow">
        <el-image style="width: 110px; height: auto" :src="popcodelogo" :fit="contain"></el-image>
        <p>{{poptit3}}</p>
      </div>
    </div>
    <el-footer>
      <p>copyright - 2019 萌信 - 沪ICP备19020465号-2</p>
    </el-footer>
  </div>
</template>

<script>
export default {
  name:"download",
  data() {
    return {
      fill: "fill",
      contain: "contain",
      // 表格数据
      tableData: [
        {
          name: "1.0通用版",
          explain:
            "1. 安卓客户端+苹果客户端（不提供源码）\n 2. 电脑端浏览器网页版（支持多开）\n 3. 64位电脑端PC版客户端（支持多开）\n 4. 手机浏览器H5网页版（自动适配）\n 5. APP消息推送通知服务（内置极光推送）\n 6. 自主研发微信级高并发私有部署即时通讯后台系统",
          people: "2000人",
          function:
            "1. 私有群 群禁言 群公告 群成员管理 \n 2. 单人禁言 消息撤回 多元素聊天 \n 3. 聊天记录查看 敏感词过滤 \n 4. 默认好友 默认群组 超级用户 \n 5. 消息推送 群发接口 生成用户等",
          after:
            "1.售后客服沟通群 \n 2.共享售后技术一名 \n 3.(12-21点维护)专业客服一名",
          price: "2.5万/套",
          project:
            '<p><span style="font-weight:800;">1.</span>免费赠送价值<span style="color:red;font-weight:bolder;"> 2000 </span>元的【1】个月全方位深度维护!（所有项目）</p>'
        },
        {
          name: "1.1加强版",
          explain: "",
          people: "10000人",
          function:
            "包含1.0通用版功能 \n 6. 朋友圈    \n 7. 小视频发送 \n 8. 注册邀请码（可选）",
          after:
            "1.售后客服沟通群 \n 2.共享售后技术二名 \n 3.(10-24点维护)专业客服两名",
          price: "3万/套",
          project:
            '<p><span style="font-weight:800;">1.</span>免费赠送价值<span style="color:red;font-weight:bolder;"> 4000 </span>元的【2】个月全方位深度维护!（所有项目）</p><p><span style="font-weight:800;">2.</span>免费赠送价值<span style="color:red;font-weight:bolder;"> 2000 </span>元第三方登录\n微信或QQ任选其一</p>'
        },
        {
          name: "1.2至尊版",
          explain: " ",
          people: "50000人",
          function:
            "包含1.1加强版功能 \n 9.普通红包 拼手气红包 \n 10. 转账功能   \n 11. 个人钱包  \n 12. 后台钱包管理",
          after:
            "1.专属技术售后群一个 \n 2.技术总监5人团队小班制服务  \n3.(专属对接负责人)",
          price: " 4万/套",
          project:
            '<p><span style="font-weight:800;">1.</span>免费赠送价值<span style="color:red;font-weight:bolder;"> 5000 </span>元的【3】个月全方位深度维护!（所有项目）</p><p><span style="font-weight:800;">2.</span>免费赠送价值<span style="color:red;font-weight:bolder;"> 4000</span>元的微信及QQ第三方登录</p>'
        },
        {
          name: "1.3一条龙",
          explain: "",
          people: "无人数限制",
          function:
            "包含1.2至尊版功能 \n 13. 国际顶级域名一年(已实名免备案) \n 14. 阿里云弹性服务器一年(100M带宽)",
          after:
            "1.专属技术售后群一个 \n 2.技术总监5人团队小班制服务 \n 3.(专属对接负责人)",
          price: "5万/套",
          project:
            '<p><span style="font-weight:800;">1.</span>免费赠送价值<span style="color:red;font-weight:bolder;"> 2万 </span>元的【12】个月全方位深度维护!（所有项目）</p><p><span style="font-weight:800;">2.</span>免费赠送价值<span style="color:red;font-weight:bolder;"> 4000 </span>元的微信及QQ第三方登录</p>'
        },
        {
          name: "全方位\n 深度维护\n(可选增值服务)",
          explain: "获取产品最新版本 - 维护期内免费赠送最新版本所有新功能",
          people: "",
          function: " ",
          after: " ",
          price: "1000/次",
          project:
            "1.单月维护套餐2000元/月 \n 2.季度维护套餐5000元/季度 \n 包含所有维护项目 \n(节点迁移每季度最多3次)"
        },
        {
          name: "",
          explain:
            "服务器节点迁移   - 解决节点IP被墙和网络延迟问题，系统100%流畅运行，数据不丢失；解决被挖矿、黑客入侵等安全问题。",
          people: " ",
          function: " ",
          after: "",
          price: "1000/次",
          project: " "
        },
        {
          name: "",
          explain: "图片、视频、用户数据库全部资料：系统数据备份 ",
          people: " ",
          function: " ",
          after: " ",
          price: "500/次",
          project: " "
        },
        {
          name: "",
          explain: "智能运行状态监控 - 服务器性能调优",
          people: " ",
          function: " ",
          after: " ",
          price: "500/次",
          project: " "
        },
        {
          name: "",
          explain: "维护App对客户在线下载地址",
          people: " ",
          function: " ",
          after: " ",
          price: "500/次",
          project: " "
        },
        {
          name: "",
          explain:
            "手机App开屏界面设计（高级美工/次，可要求修改最多3次）赠送 PSD 格式图片源文件（图文内容必须符合国家法律法规）",
          people: " ",
          function: " ",
          after: " ",
          price: "400/次",
          project: " "
        },
        {
          name: "",
          explain:
            "手机App图标美术设计（高级美工/次，可要求修改最多3次）赠送 PSD 格式图片源文件（图文内容必须符合国家法律法规）",
          people: " ",
          function: " ",
          after: " ",
          price: "400/次",
          project: " "
        },
        {
          name: "",
          explain: "手机App图标开屏界面更换 - 需重新下载后生效",
          people: " ",
          function: " ",
          after: " ",
          price: "400/次",
          project: " "
        },
        {
          name: "",
          explain: "日常使用技术咨询 - 疑难解答、功能介绍、新版本功能咨询",
          people: " ",
          function: " ",
          after: " ",
          price: "免费",
          project: " "
        },
        {
          name: "",
          explain: "手机App日常教学使用手册/本",
          people: " ",
          function: " ",
          after: " ",
          price: "免费",
          project: " "
        },
        {
          name: "",
          explain: "通讯系统在线管理平台使用手册/本",
          people: " ",
          function: " ",
          after: " ",
          price: "免费",
          project: " "
        },
        {
          name: "第三方登录",
          explain:
            "微信登录 无需注册快捷登录 认证好的微信开发者帐可直接配置使用（已缴费认证，微信key已审核通过，不会被封）",
          people: " ",
          function: " ",
          after: " ",
          price: "2000/永久",
          project: " "
        },
        {
          name: "第三方登录",
          explain:
            "QQ登录   无需注册快捷登录 认证好的QQ开发者帐号可直接配置使用（已缴费认证，QQ key 已审核通过，不会被封）",
          people: "",
          function: " ",
          after: " ",
          price: "2000/永久",
          project: " "
        },
        {
          name: "【购买说明】\n 1.此方案只适用爱聊天第四季2019.10-2019.12期间使用。\n 2.此方案交齐全款后可享受优惠。\n 3.此方案不包含iOS签名服务。\n 4.该方案最终解释权归北京爱聊天有限公司所有。",
          explain:
            "免责声明：\n 1.使用方在使用本系统时，您应严格遵守国家有关法律法规和有关政策，否则，一切法律责任均由使用方承担。\n 2.使用方在使用本系统时，您不得危害国家安全、泄露国家秘密，不得侵犯国家社会集体的和公民的合法权益。\n 3.本公司只负责开发和出售该系统，不参与软件具体运营，不参与任何方面的合作，不承担使用方在使用本系统过程中的任何违法行为。\n 4.如果您已经在使用本系统，即表示您已经同意以上免责声明条款，违反规定的将暂停或终止其售后服务和更新。",
          people: "",
          function: "",
          after: "",
          price: "",
          project: ""
        }
      ],
      //右下角数据
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
      qqshow: false,
      vxshow: false,
      codeshow: false
    };
  },
  //接收父组件传递过来的参数
  props: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  //监听值变化
  watch: {},
  //监听方法click事件等
  methods: {
      backhomepage() {
      let routeData = this.$router.resolve({ path: "/" });
      window.open(routeData.href, "_blank");
    },
    pop: function(popWords) {
      //关键字
      this[popWords]();
    },
    popqq: function() {
      window.open("http://wpa.qq.com/msgrd?v=3&uin=469123028&site=qq&menu=yes");
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
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex > 3 && rowIndex < 17) {
        if (columnIndex === 1) {
          return [1, 4];
        }
      }

      if (rowIndex === 0) {
        if (columnIndex === 1) {
          return [4, 1];
        }
      }
      if (rowIndex > 0 && rowIndex < 4) {
        if (columnIndex === 1) {
          return [0, 0];
        }
      }
      if (rowIndex === 4) {
        if (columnIndex === 6) {
          return [11, 1];
        }
      }
      if (rowIndex > 3 && rowIndex < 18) {
        if (columnIndex > 1 && columnIndex < 5) {
          return [0, 0];
        }
      }

      if (rowIndex === 4) {
        if (columnIndex === 0) {
          return [11, 1];
        }
      }
      if (rowIndex > 3 && rowIndex < 15) {
        if (columnIndex === 0) {
          return [0, 0];
        }
      }
      if (rowIndex > 3 && rowIndex < 15) {
        if (columnIndex === 6) {
          return [0, 0];
        }
      }
      if (rowIndex > 14 && rowIndex < 16) {
        if (columnIndex === 6 || columnIndex === 0) {
          return [2, 1];
        }
      }
      if (rowIndex === 16) {
        if (columnIndex === 6 || columnIndex === 0) {
          return [0, 0];
        }
      }
      if (rowIndex === 17) {
        if (columnIndex === 0) {
          return [1, 3];
        }
      }
      if (rowIndex === 17) {
        if (columnIndex  === 1) {
          return [1, 4];
        }
      }
      if (rowIndex === 17) {
        if (columnIndex  > 1) {
          return [0, 0];
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
.el-footer {
  color: #fff;
  text-align: center;
  min-width: 1320px;
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

.pricetable {
  width: 1320px;
  margin: 20px auto;
  h2 {
    font-size: 22px;
    color: #3b94f9;
    margin: 20px auto;
  }
  /deep/ .el-table .cell {
    white-space: pre-line; /*保留换行符*/
  }
  /deep/ .el-table th {
    background-color: #3b94f9;
    color: white;
    font-size: 17px;
  }
  /deep/ .el-table td {
    text-align: left;
    font-size: 12px;
    color: #808080;
  }
  /deep/ .el-table__body-wrapper {
    .el-table__body {
      .el-table__row:nth-of-type(1) {
        td:first-child {
          color: #3b94f9;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
        }
        td:nth-of-type(3) {
          color: #3b94f9;
        }
        td:nth-of-type(6) {
          color: #3b94f9;
        }
        td:nth-of-type(7) {
          color: #333333;
        }
      }
      .el-table__row:nth-of-type(2),
      .el-table__row:nth-of-type(3),
      .el-table__row:nth-of-type(4) {
        td:first-child {
          color: #3b94f9;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
        }
        td:nth-of-type(2) {
          color: #3b94f9;
        }
        td:nth-of-type(5) {
          color: #3b94f9;
        }
        td:nth-of-type(6) {
          color: #333333;
        }
      }
      .el-table__row:nth-of-type(5) {
        td:first-child {
          color: #3b94f9;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
        }
        td:nth-of-type(3) {
          color: #3b94f9;
        }
        td:nth-of-type(4) {
          color: #333333;
        }
      }
      .el-table__row:nth-of-type(6),
      .el-table__row:nth-of-type(7),
      .el-table__row:nth-of-type(8),
      .el-table__row:nth-of-type(9),
      .el-table__row:nth-of-type(10),
      .el-table__row:nth-of-type(11),
      .el-table__row:nth-of-type(12),
      .el-table__row:nth-of-type(13),
      .el-table__row:nth-of-type(14),
      .el-table__row:nth-of-type(15) {
        td:nth-of-type(2) {
          color: #3b94f9;
        }
      }
      .el-table__row:nth-of-type(16) {
        td:first-child {
          color: #3b94f9;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
        }
        td:nth-of-type(3) {
          color: #3b94f9;
        }
      }
      .el-table__row:nth-of-type(17) {
        td:nth-of-type(2) {
          color: #3b94f9;
        }
      }
    }
  }
}
.el-table--border {
  border-color: #dddddd !important;
}
/deep/ .el-table__body-wrapper {
  border-color: #dddddd !important;
  /deep/.el-table__body {
    border-bottom: 1px solid #ddd;
    border-color: #dddddd !important;
    tbody {
      border-color: #dddddd !important;
      /deep/ .el-table__row {
        border-color: #dddddd !important;
        td {
          border-color: #dddddd !important;
          p:nth-of-type(2){
              margin-top: 10px;
          }
        }
      }
    }
  }
}
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
  p {
    margin-top: -5px;
  }
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
.popvx,
.popcode {
  p {
    font-size: 10px;
  }
}
.tabletop {
  position: relative;
  button {
    padding-left: 25px;
    position: absolute;
    top: 0;
    right: 0;
    width: 122px;
    height: 39px;
    background:transparent;
    background-image: url("../assets/back2.png");
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 16%;
    border-radius: 7px;
    border: 0;
    outline: 0;
    cursor: pointer;
    p {
      font-size: 18px;
      color: #3B94F9;
    }
  }
}
</style>