webpackJsonp([58],{GOg8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"channel-code",data:function(){return{source_table:[],currentPage:1,page_size:10,total:0}},created:function(){this.get_all_source_code()},methods:{get_all_source_code:function(){this.$axios({method:"get",url:""}).then(function(e){console.info(e)}).catch(function(e){console.error(e)})},handleCurrentChange:function(e){},updateRow:function(e){},removeRow:function(e,t,n){}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"global-sty"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-button",{attrs:{size:"mini",type:"primary"}},[e._v("新增")])],1)],1),e._v(" "),n("el-row",{staticStyle:{"margin-top":"0.8vw"}},[n("el-col",{attrs:{span:24}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.source_table,"cell-style":{textAlign:"center"},"header-cell-style":{background:"#303A41",color:"#FFFFFF",textAlign:"center"},size:"mini"}},[n("el-table-column",{attrs:{prop:"",label:"渠道码名称"}}),e._v(" "),n("el-table-column",{attrs:{prop:"",label:"渠道码名称"}}),e._v(" "),n("el-table-column",{attrs:{prop:"",label:"渠道码名称"}}),e._v(" "),n("el-table-column",{attrs:{prop:"",label:"渠道码名称"}}),e._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"mini"},nativeOn:{click:function(n){n.preventDefault(),e.removeRow(t.$index,t.row,e.source_table)}}},[e._v("\n              删除\n            ")]),e._v(" "),n("el-button",{attrs:{type:"text",size:"mini"},nativeOn:{click:function(n){n.preventDefault(),e.updateRow(t.$index,t.row,e.source_table)}}},[e._v("\n              修改\n            ")])]}}])})],1)],1)],1),e._v(" "),n("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.page_size,layout:"total, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var o=n("VU/8")(a,l,!1,function(e){n("kojW")},"data-v-0a7e62e0",null);t.default=o.exports},kojW:function(e,t){}});