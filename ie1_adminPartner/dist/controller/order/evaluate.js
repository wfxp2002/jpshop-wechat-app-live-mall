/** layuiAdmin.pro-v1.0.0-beta7 LPPL License By http://www.layui.com/admin/ */
 ;layui.define(function(e){layui.use(["table","jquery","admin","setter"],function(){var e,t,a=layui.table,s=layui.$,l=layui.admin,i=layui.setter,r=i.baseUrl,o=i.successMsg,n=i.errorMsg,d=i.timeOutCode,u=i.timeOutMsg,m={"Access-Token":layui.data(i.tableName).access_token},y=1,c={shade:.3},g=10,f=[10,20,30],p=sessionStorage.getItem("saa_key"),h=r+"/merchantComment",b="?key="+p,v=[{field:"user_id",title:"买家名称",width:"20%"},{field:"content",title:"评论内容",width:"20%"},{field:"pics_url",title:"评论图片",templet:"#imgTpl",width:"20%"},{field:"type",title:"评价",templet:"#typeTpl",width:"20%"},{field:"operations",title:"操作",toolbar:"#operations",width:"20%"}];a.on("tool(pageTable)",function(a){var i=a.data,r=a.event;t=i.id,"del"===r?layer.confirm("确定要删除这条评价么?",function(t){layer.close(t),s.ajax({url:h+"/"+i.id,data:{key:p},type:"delete",async:!1,headers:m,beforeSend:function(){e=layer.load(y,c)},success:function(t){return t.status==d?(layer.msg(u),l.exit(),!1):(layer.close(e),200!=t.status?(layer.msg(t.message),!1):(layer.msg(o["delete"]),void a.del()))},error:function(){layer.msg(n),layer.close(e)}})}):layer.msg(n)});a.render({elem:"#pageTable",url:h+b,page:!0,limit:g,limits:f,loading:!0,cols:[v],response:{statusName:"status",statusCode:"200",dataName:"data"},headers:m,done:function(e){return e.status==d?(layer.msg(u),l.exit(),!1):200!=e.status?(layer.msg(e.message),!1):void 0}})}),e("order/evaluate",{})});