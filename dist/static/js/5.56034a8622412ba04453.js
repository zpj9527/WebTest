webpackJsonp([5],{"3Pm7":function(t,e){},"3q7q":function(t,e){},OrHJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={name:"MemberList",data:function(){return{UrLHeader:this.api.api_pro_dev+"/v1/",memberData:{},checkdialogVisible:!1,memberData_index:"",memberList:[],statusDict:{O:"初始",E:"有效",L:"销卡",R:"挂失",B:"损坏",S:"停用",D:"休眠"},tableData:[],srcDic:{RP:"注册赠送",PC:"积分录入",PA:"消费产生",LF:"积分转入",LT:"积分转出",CH:"积分兑换",PP:"充值赠送"},selfDialog:!1,transferDialog:!1,changeDialog:!1,currentPage:1,pagesize:10,total:0,checked:!0,SearchContent:"",param:{},custom_wayArr:[{code:"point",descript:"积分"},{code:"money",descript:"现金"}]}},created:function(){this.$route.query.memberData&&this.$route.query.memberData.id?(this.memberData=this.$route.query.memberData,this.get_point_list()):(this.checkdialogVisible=!0,this.get_card_list())},methods:{handleCurrentChange:function(t){console.log(t);this.memberData.card_no=t.card_no,this.memberData.id=t.id},setCurrent:function(t){this.$refs.singleTable.setCurrentRow(t)},get_memberData:function(t,e){this.memberData=t,this.memberData_index=e},get_memberData_confirm:function(){var t=this;t.memberData.card_no&&t.memberData.id?(t.checkdialogVisible=!1,t.get_certain_card_base_list(t.memberData.id),this.get_point_list()):t.$confirm("是否不选择会员卡进行操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.checkdialogVisible=!1}).catch(function(){})},get_card_list:function(){var t=this.UrLHeader+"customer/company/get_company_base_list/?page=1&page_size=100",e=this;e.$axios.get(t).then(function(t){console.log(t.data),"success"===t.data.message&&t.data.data.results.length&&(e.memberList=t.data.data.results,console.log(t.data.data.results[0]),e.setCurrent(t.data.data.results[0]),e.get_point_list())}).catch(function(t){})},get_certain_card_base_list:function(t){var e=this.UrLHeader+"customer/company/get_company_base_info/"+t+"/",a=this;a.$axios.get(e).then(function(t){"success"==t.data.message&&(console.log(t.data.data),a.memberData=t.data.data)}).catch(function(t){})},get_point_list:function(){var t=this,e=t.UrLHeader+"customer/company/get_company_point_list/";t.memberData.id&&t.$axios.post(e,{company_id:t.memberData.id}).then(function(e){console.log("积分列表",e.data.data),(e.data.message="success")&&(t.tableData=e.data.data.results)}).catch(function(t){})},addIntegral:function(){var t=this,e=t.UrLHeader+"customer/member/entry_card_point/";this.validateData()&&(t.param.charge=Number(t.param.charge),t.param.point_type="entering",t.param.card_id=t.memberData.id,t.param.card_no=t.memberData.card_no?t.memberData.card_no:"",t.param.biz_date=new Date,t.param.gen_date=new Date,this.$axios.post(e,t.param).then(function(e){t.$message({message:"添加成功",type:"success"}),t.selfDialog=!1}).catch(function(t){}))},handleInfoById:function(){},getData:function(){},handleSizeChange:function(){},validateData:function(){return this.validateBlank(this.param.charge,"消费金额是必填项",this)&&this.validateNAN(this.param.charge,"消费金额必须是数字",this)},validateBlank:function(t,e,a,l){return e?""===t||null===t||void 0===t?(a.$message({message:e,type:"error"}),!1):(l&&a.$message({message:l,type:"success"}),!0):!(""===t||null===t||void 0===t)},validateNAN:function(t,e,a,l){if(""===t||null===t||void 0===t)return!0;var s=/^(\-|\+)?\d+(\.\d+)?$/;return e?s.test(t)?(l&&a.$message({message:l,type:"success"}),!0):(a.$message({message:e,type:"error"}),!1):s.test(t)}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"IntegralList"},[a("p",{staticClass:"iconLogo"},[t._v("积分列表")]),t._v(" "),a("div",{staticStyle:{margin:"20px 0"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.checkdialogVisible=!0}}},[t._v("切换协议单位")])],1),t._v(" "),a("div",{staticClass:"search"},[a("div",{staticClass:"inputCell"},[t._v("\n      协议卡号：\n      "),t._v(" "),a("el-input",{staticStyle:{width:"200px",margin:"0 16px"},attrs:{placeholder:"请输入内容"},model:{value:t.memberData.card_no,callback:function(e){t.$set(t.memberData,"card_no",e)},expression:" memberData.card_no "}})],1),t._v(" "),a("div",{staticClass:"inputCell"},[t._v("\n      持卡人 ：\n      "),t._v(" "),a("el-input",{staticStyle:{width:"200px",margin:"0 16px"},attrs:{placeholder:"请输入内容"},model:{value:t.memberData.name,callback:function(e){t.$set(t.memberData,"name",e)},expression:" memberData.name "}})],1),t._v(" "),a("div",{staticClass:"inputCell"},[t._v("\n      协议计划：\n      "),t._v(" "),a("el-input",{staticStyle:{width:"200px",margin:"0 16px"},attrs:{placeholder:"请输入内容"},model:{value:t.memberData.card_type,callback:function(e){t.$set(t.memberData,"card_type",e)},expression:" memberData.card_type "}})],1),t._v(" "),a("div",{staticClass:"inputCell"},[t._v("\n      积分余额：\n      "),t._v(" "),a("el-input",{staticStyle:{width:"200px",margin:"0 16px"},attrs:{placeholder:"请输入内容"},model:{value:t.memberData.card_type,callback:function(e){t.$set(t.memberData,"card_type",e)},expression:" memberData.card_type "}})],1),t._v(" "),a("div",{staticClass:"inputCell"},[t._v("\n      所属酒店：\n      "),t._v(" "),a("el-input",{staticStyle:{width:"200px",margin:"0 16px"},attrs:{placeholder:"请输入内容"},model:{value:t.memberData.card_type,callback:function(e){t.$set(t.memberData,"card_type",e)},expression:" memberData.card_type "}})],1),t._v(" "),a("div",{staticClass:"inputCell"},[t._v("\n      卡等级 ：\n      "),t._v(" "),a("el-input",{staticStyle:{width:"200px",margin:"0 16px"},attrs:{placeholder:"请输入内容"},model:{value:t.memberData.card_level,callback:function(e){t.$set(t.memberData,"card_level",e)},expression:" memberData.card_level "}})],1),t._v(" "),a("div",{staticClass:"btn-group"},[a("div",{staticClass:"single-btn",on:{click:function(e){t.transferDialog=!0}}},[t._v("积分转移")]),t._v(" "),a("div",{staticClass:"single-btn",on:{click:function(e){t.changeDialog=!0}}},[t._v("积分调整")]),t._v(" "),a("div",{staticClass:"single-btn"},[t._v("积分兑换")]),t._v(" "),a("div",{staticClass:"single-btn"},[t._v("兑换撤销")]),t._v(" "),a("div",{staticClass:"single-btn"},[t._v("兑换账单")]),t._v(" "),a("div",{staticClass:"single-btn",on:{click:function(e){t.selfDialog=!0,t.param={}}}},[t._v("手工录入")])])]),t._v(" "),a("div",{staticClass:"table",staticStyle:{width:"100%"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,height:300,"header-cell-style":{background:"#BFCAD1",color:"#68819E"}},on:{"row-click":t.handleInfoById}},[a("el-table-column",{attrs:{type:"index",width:"55",label:"编号",prop:"id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"biz_date",label:"营业日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"iss_hotel",label:"积分产生酒店"}}),t._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"产生金额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"point",label:"产生积分"}}),t._v(" "),a("el-table-column",{attrs:{prop:"balance",label:"余额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"order_no",label:"结账单号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"account_no",label:"账号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"src",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(t.srcDic[e.row.src]))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"invalid_date",label:"失效时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"invalid_sta",label:"失效状态"}}),t._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注"}})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pagesize,layout:"total, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.getData}})],1),t._v(" "),a("el-dialog",{staticClass:"houseTypeClass",attrs:{title:"积分转移",visible:t.transferDialog,"close-on-click-modal":!1},on:{"update:visible":function(e){t.transferDialog=e}}},[a("div",{staticStyle:{height:"400px"}},[a("el-col",{attrs:{span:8}},[a("el-row",[a("span",[t._v("转出卡:")]),a("el-input",{staticStyle:{width:"200px"}})],1),t._v(" "),a("el-row",{staticClass:"secondClass"},[a("span",{staticStyle:{display:"block",width:"50px",float:"left"}},[t._v("卡信息:")]),a("el-input",{staticStyle:{width:"200px"},attrs:{type:"textarea",rows:4}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-row",{staticStyle:{"margin-top":"10px"}},[a("span",[t._v("转积分数量:")])]),t._v(" "),a("el-row",{staticStyle:{"margin-top":"30px"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{type:"textarea",rows:2}})],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"15px"}},[a("el-button",{attrs:{type:"primary"}},[t._v("重置")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("保存")])],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-row",[a("span",[t._v("转入卡:")]),a("el-input",{staticStyle:{width:"200px"}})],1),t._v(" "),a("el-row",{staticClass:"secondClass"},[a("span",{staticStyle:{display:"block",width:"50px",float:"left"}},[t._v("卡信息:")]),a("el-input",{staticStyle:{width:"200px"},attrs:{type:"textarea",rows:4}})],1)],1)],1)]),t._v(" "),a("el-dialog",{staticClass:"houseTypeClass",attrs:{title:"积分调整",visible:t.changeDialog,"close-on-click-modal":!1},on:{"update:visible":function(e){t.changeDialog=e}}},[a("div",{staticStyle:{height:"400px"}},[a("el-col",{attrs:{span:8}},[a("el-row",[a("span",[t._v("转出卡:")]),a("el-input",{staticStyle:{width:"200px"}})],1),t._v(" "),a("el-row",{staticClass:"secondClass"},[a("span",{staticStyle:{display:"block",width:"50px",float:"left"}},[t._v("卡信息:")]),a("el-input",{staticStyle:{width:"200px"},attrs:{type:"textarea",rows:6}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-row",[a("div",[a("span",{staticStyle:{"margin-left":"28px"}},[t._v("调整方向:")]),a("el-select",{staticStyle:{width:"200px"}})],1),t._v(" "),a("div",{staticStyle:{"margin-top":"15px"}},[a("span",{staticStyle:{"margin-left":"28px"}},[t._v("调整原因:")]),a("el-select",{staticStyle:{width:"200px"}})],1),t._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("span",[t._v("积分失效日期:")]),a("el-input",{staticStyle:{width:"200px"}})],1),t._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("span",[t._v("转移积分数量:")]),a("el-input",{staticStyle:{width:"200px"}})],1)])],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-row",[a("span",[t._v("备注:")])]),t._v(" "),a("el-row",{staticClass:"secondClass"},[a("el-input",{staticStyle:{width:"200px"},attrs:{type:"textarea",rows:7}})],1)],1)],1)]),t._v(" "),a("el-dialog",{staticClass:"houseTypeClass",attrs:{title:"手工录入",visible:t.selfDialog,"close-on-click-modal":!1},on:{"update:visible":function(e){t.selfDialog=e}}},[a("div",{staticStyle:{height:"400px"}},[a("div",{staticClass:"search"},[a("div",{staticClass:"inputCellBlock"},[t._v("\n          消费金额：\n          "),t._v(" "),a("el-input",{staticStyle:{width:"220px",margin:"0 16px"},attrs:{placeholder:"请输入内容"},model:{value:t.param.charge,callback:function(e){t.$set(t.param,"charge","string"==typeof e?e.trim():e)},expression:"param.charge"}})],1),t._v(" "),a("div",{staticClass:"inputCellBlock"},[t._v("\n          付款代码：\n          "),t._v(" "),a("el-input",{staticStyle:{width:"220px",margin:"0 16px"},attrs:{placeholder:"请输入内容"},model:{value:t.param.ta_code,callback:function(e){t.$set(t.param,"ta_code",e)},expression:"param.ta_code"}})],1),t._v(" "),a("div",{staticClass:"inputCellBlock"},[t._v("\n          付款方式：\n          "),t._v(" "),a("el-select",{staticStyle:{width:"220px",margin:"0 16px"},attrs:{placeholder:"请输入内容"},model:{value:t.param.pay_code,callback:function(e){t.$set(t.param,"pay_code",e)},expression:"param.pay_code "}},t._l(t.custom_wayArr,function(t,e){return a("el-option",{key:e,attrs:{label:t.descript,value:t.code}})}),1)],1),t._v(" "),a("div",{staticClass:"inputCellBlock"},[t._v("\n          消费酒店：\n          "),t._v(" "),a("el-input",{staticStyle:{width:"220px",margin:"0 16px"},attrs:{placeholder:"请输入内容"},model:{value:t.param.consume_hotel,callback:function(e){t.$set(t.param,"consume_hotel",e)},expression:"param.consume_hotel"}})],1),t._v(" "),a("div",{staticClass:"inputCellBlock"},[t._v("\n          消费类型：\n          "),t._v(" "),a("el-select",{staticStyle:{width:"220px",margin:"0 16px"},attrs:{placeholder:"请输入内容"},model:{value:t.param.cat_sum,callback:function(e){t.$set(t.param,"cat_sum",e)},expression:"param.cat_sum "}},t._l(t.custom_wayArr,function(t,e){return a("el-option",{key:e,attrs:{label:t.descript,value:t.code}})}),1)],1),t._v(" "),a("div",{staticClass:"pull-right",staticStyle:{height:"100px","padding-top":"50px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.param={}}}},[t._v("重置")]),t._v(" "),a("el-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary"},on:{click:function(e){t.addIntegral()}}},[t._v("保存")])],1)])])]),t._v(" "),a("el-dialog",{attrs:{title:"协议单位选择",visible:t.checkdialogVisible,width:"80%"},on:{"update:visible":function(e){t.checkdialogVisible=e}}},[a("div",{staticClass:"charge_detail"},[a("div",{staticClass:"table",staticStyle:{width:"100%"}},[a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{border:"",data:t.memberList,"highlight-current-row":"","header-cell-style":{background:"#303A41",color:"white",textAlign:"center"},"cell-style":{textAlign:"center",color:"#333333"},height:"460",size:"mini"},on:{"current-change":t.handleCurrentChange}},[a("el-table-column",{attrs:{property:"id",label:"编号"}}),t._v(" "),a("el-table-column",{attrs:{property:"name",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{property:"card_no",label:"卡号"}}),t._v(" "),a("el-table-column",{attrs:{property:"card_type",label:"协议单位计划"}}),t._v(" "),a("el-table-column",{attrs:{property:"card_level",label:"协议单位等级"}}),t._v(" "),a("el-table-column",{attrs:{property:"phone",label:"手机"}}),t._v(" "),a("el-table-column",{attrs:{property:"email",label:"Email"}}),t._v(" "),a("el-table-column",{attrs:{property:"point_pay",label:"积分累计"}}),t._v(" "),a("el-table-column",{attrs:{property:"point_charge",label:"积分消耗"}}),t._v(" "),a("el-table-column",{attrs:{property:"address",label:"积分余额"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.point_pay-e.row.point_charge))])]}}])}),t._v(" "),a("el-table-column",{attrs:{property:"money_pay",label:"付费"}}),t._v(" "),a("el-table-column",{attrs:{property:"money_charge",label:"消费"}}),t._v(" "),a("el-table-column",{attrs:{property:"address",label:"储值余额"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.money_pay-e.row.money_charge-e.row.money_freeze))])]}}])}),t._v(" "),a("el-table-column",{attrs:{property:"credit",label:"信用"}}),t._v(" "),a("el-table-column",{attrs:{property:"date_end",label:"有效期"}}),t._v(" "),a("el-table-column",{attrs:{property:"status_desc",label:"卡状态"}})],1)],1)]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("span",{staticClass:"pull-left"},[t._v("记录总数： "+t._s(t.memberList.length))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.get_memberData_confirm()}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var i=a("VU/8")(l,s,!1,function(t){a("3q7q"),a("3Pm7"),a("fbSd")},"data-v-40f6dfc2",null);e.default=i.exports},fbSd:function(t,e){}});