(window.webpackJsonp=window.webpackJsonp||[]).push([[6],Array(20).concat([function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{start:1,end:10,articleList:[]}},created:function(){this.getArticle()},methods:{getArticle:function(){var t=this;this.$http.get("/s/appArticle/favourite",{params:{start:this.start,end:this.end}}).then(function(e){var a=e.data;a.success&&(t.articleList=t.articleList.concat(a.data),console.log(t.articleList))}).catch(function(t){console.log(t)})},goArticleDetail:function(t){location.href="uploads/article/"+t}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{video:{type:Object,required:!0}},data:function(){return{}},methods:{goVideoList:function(){this.$router.push(this.video.path)},noMore:function(){this.$Toast("没有更多啦")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{ad:{type:Object,required:!0},height:{type:String,default:function(){return"--"}},weight:{type:String,default:function(){return"--"}}},data:function(){return{text:"每一次成长都是生命的礼赞，现在就去添加宝宝信息关注宝宝成长吧~"}},methods:{goAdDetail:function(){this.$router.push(this.ad.href)},goAllTool:function(){this.$store.commit("loginIn")},go2Read:function(){this.$router.push("/read")},showAlert:function(){this.$Alert({content:"hello world",cancelBtnText:"取消"}).then(function(){console.log("点击了确认")}).catch(function(){console.log("点击了取消")})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{score:{type:Number,required:!0}},data:function(){return{}},computed:{calScore:function(){return Math.min(Math.max(Math.ceil(this.score/9999*100),10),100)+"%"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{location:{type:String,required:!0}},data:function(){return{}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(a(116)),n=r(a(113));function r(t){return t&&t.__esModule?t:{default:t}}e.default={props:{baby:{type:Object,required:!0}},data:function(){return{location:"朝阳区",score:100}},computed:{babyPhoto:function(){return this.baby.src},calBabyAge:function(){var t=this.baby.age,e={Y:"岁",M:"月",D:"天"};for(var a in e)t.replace(new RegExp(a),e[a]);return t}},components:{Location:i.default,Score:n.default}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(a(5)),n=s(a(119)),r=s(a(110)),o=s(a(107)),c=s(a(104));function s(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{isLogin:!1,babyInfoObject:{age:"1年2月",nickname:"生日快乐",icon:"/src/images/index/baby-default.png"},ad:{},video:{}}},created:function(){var t=this;this.$http.get(i.default.userInfo).then(function(e){t.isLogin=e.data.data,t.getData(),t.$store.commit("setUserInfo",e.data.data)}).catch(function(t){console.log(t)})},computed:{},components:{BabyInfo:n.default,Tool:r.default,Video:o.default,Article:c.default},methods:{getData:function(){this.getAdObject().getDefaultBabyInfo().getVideoObject()},getDefaultBabyInfo:function(){var t=this;return this.$http.get(i.default.getDefaultBabyInfo).then(function(e){e.data&&e.data.data&&(t.babyInfoObject=e.data.data)}).catch(function(t){console.log(t)}),this},getAdObject:function(){var t=this;return this.$http.get(i.default.queryShowBanner,{params:{place:1}}).then(function(e){var a=e.data;a.success&&(t.ad=a.data.length>0?a.data[0]:{href:"http://toc.minganonline.com/pages/trainChildTool.html",image:"/uploads/banner/eefc5603c6cd4848af9fc9b841faf9f0.jpg"})}).catch(function(t){}),this},getVideoObject:function(){var t=this;return this.$http.get(i.default.getArticlesByCatalogId,{params:{start:1,end:1,catalogId:22}}).then(function(e){var a=e.data;a.success&&(t.video=a.data[0]||{description:"描述",path:"/uploads/onLineFile/4/2504.html",picture:"/uploads/article//titleImgFile/4/b3c99de38f2748b2acc28da4bb1f8566.png"})}).catch(function(t){}),this}}}},,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-page"},[e("BabyInfo",{attrs:{baby:this.babyInfoObject}}),this._v(" "),e("Tool",{attrs:{ad:this.ad}}),this._v(" "),e("Video",{attrs:{video:this.video}}),this._v(" "),e("Article")],1)},n=[]},function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-wrap"},[t._m(0),t._v(" "),t.articleList.length>0?a("div",t._l(t.articleList,function(e){return a("div",{key:e.id,staticClass:"article",on:{click:function(a){t.goArticleDetail(e.path)}}},[a("div",{staticClass:"article-info"},[a("p",[t._v(t._s(e.title))]),t._v(" "),a("span",[a("img",{attrs:{src:"/src/images/index/article-see.png",alt:""}}),t._v("\n\t\t\t\t\t"+t._s(e.scanCount)+"\n\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"article-img"},[a("img",{attrs:{src:"/uploads/article"+e.picture,alt:""}})])])})):a("div",{staticClass:"nomsg"},[a("img",{attrs:{src:"/src/images/product/nomsg-icon.png",alt:""}}),t._v(" "),a("p",[t._v("没有文章")])])])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"article-title"},[e("span",[e("i"),this._v("\n\t\t\t健康资讯\n\t\t")]),this._v(" "),e("button",[this._v("更多")])])}]},function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video"},[a("div",{staticClass:"title"},[t._m(0),t._v(" "),a("button",{on:{click:t.noMore}},[t._v("更多")])]),t._v(" "),a("div",{staticClass:"body",on:{click:t.goVideoList}},[a("div",[a("img",{attrs:{src:t.video.picture,alt:""}}),t._v(" "),a("p",{staticClass:"video-title"},[t._v(t._s(t.video.description))])])])])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i"),this._v("\n\t\t\t益儿剧场\n\t\t")])}]},function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-tool"},[a("div",{staticClass:"everyday-read"},[a("p",[t._v(t._s(t.text))]),t._v(" "),a("button",{on:{click:t.go2Read}},[t._v("更多")])]),t._v(" "),a("div",{staticClass:"growth"},[a("p",[t._v("\n\t\t\t生长发育：\n\t\t\t"),a("span",[t._v(t._s(t.height)+" cm")]),t._v(" "),a("span",[t._v(t._s(t.weight)+" kg")])]),t._v(" "),a("button",{on:{click:t.showAlert}},[t._v("修改")])]),t._v(" "),a("div",{staticClass:"ad"},[a("img",{attrs:{src:t.ad.image,alt:""},on:{click:t.goAdDetail}})]),t._v(" "),a("div",{staticClass:"tool-btn"},[a("a",{attrs:{href:"javascript:;"},on:{click:t.goAllTool}},[a("i"),t._v(" "),a("span",[t._v("全部工具")])])])])},n=[]},function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"baby-content"},[a("Location",{attrs:{location:t.location}}),t._v(" "),a("Score",{attrs:{score:t.score}}),t._v(" "),a("div",{staticClass:"baby"},[a("div",{staticClass:"baby-photo"},[a("img",{attrs:{src:t.baby.icon,alt:""}})]),t._v(" "),a("div",{staticClass:"baby-info"},[a("p",[t._v(t._s(t.calBabyAge))]),t._v(" "),a("p",[t._v(t._s(t.baby.nickname))])])])],1)},n=[]},function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"score"},[e("img",{attrs:{src:"/src/images/index/score-icon.png",alt:""}}),this._v(" "),e("div",[e("span",[this._v("健康阳光值")]),this._v(" "),e("span",{staticClass:"score-wrap"},[e("i",{style:{width:this.calScore}})])])])},n=[]},function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"location"},[e("img",{attrs:{src:"/src/images/index/location-icon.png",alt:""}}),this._v(" "),e("span",[this._v(this._s(this.location))])])},n=[]},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){(t.exports=a(2)(!1)).push([t.i,'.article-wrap[data-v-535ccf64]{height:auto}.article-wrap .article-title[data-v-535ccf64]{height:.83rem;-webkit-justify-content:space-between;justify-content:space-between;padding:0 .2rem;font-size:24px;border-bottom:4px solid #ff950c}.article-wrap .article-title[data-v-535ccf64],.article-wrap .article-title span[data-v-535ccf64]{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.article-wrap .article-title i[data-v-535ccf64]{display:inline-block;margin-right:.2rem;width:.44rem;height:.44rem;background:url("/src/images/index/article-title-icon.png") no-repeat 50%;background-size:cover}.article-wrap .article-title button[data-v-535ccf64]{font-size:24px;color:#ff950c}.article-wrap .article[data-v-535ccf64]{height:1.9rem;width:100%;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;padding:.2rem}.article-wrap .article[data-v-535ccf64]:not(:last-child){border-bottom:1px solid #e6e6e6}.article-wrap .article>div[data-v-535ccf64]{height:100%}.article-wrap .article>div.article-info[data-v-535ccf64]{-webkit-flex-grow:1;flex-grow:1;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:flex-start;align-items:flex-start}.article-wrap .article>div.article-info span[data-v-535ccf64]{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.article-wrap .article>div.article-info span img[data-v-535ccf64]{width:.44rem;height:.44rem;margin-right:.2rem}.article-wrap .article>div.article-img[data-v-535ccf64]{width:2.1rem;-webkit-flex-shrink:0;flex-shrink:0}.article-wrap .article>div.article-img img[data-v-535ccf64]{width:100%;height:100%}.article-wrap .nomsg[data-v-535ccf64]{font-size:0}.article-wrap .nomsg img[data-v-535ccf64]{display:block;width:3.3rem;height:3.28rem;margin:auto}.article-wrap .nomsg p[data-v-535ccf64]{color:#a0a0a0;font-size:28px;text-align:center;margin-top:.4rem}',""])},function(t,e,a){var i=a(102);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(1).default)("a82d2dfa",i,!0,{})},function(t,e,a){"use strict";a.r(e);var i=a(20),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);var o=a(49),c=a(0);var s=function(t){a(103)},d=Object(c.a)(n.a,o.a,o.b,!1,s,"data-v-535ccf64",null);e.default=d.exports},function(t,e,a){(t.exports=a(2)(!1)).push([t.i,'.video .title[data-v-1c20c6f5]{height:.83rem;padding:0 .2rem;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:4px solid #ff950c}.video .title[data-v-1c20c6f5],.video .title span[data-v-1c20c6f5]{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.video .title span i[data-v-1c20c6f5]{display:inline-block;margin-right:.2rem;width:.44rem;height:.44rem;background:url("/src/images/index/video-title-icon.png") no-repeat 50%;background-size:cover}.video .title button[data-v-1c20c6f5]{color:#ff950c;font-size:24px}.video .body[data-v-1c20c6f5]{height:4.2rem}.video .body div[data-v-1c20c6f5]{height:100%;background:url("/src/images/index/video-icon.png") 50% no-repeat;background-size:1.04rem;position:relative}.video .body div .video-title[data-v-1c20c6f5]{position:absolute;bottom:0;padding:0 .32rem;color:#fff;width:100%;min-height:.8rem;background-image:linear-gradient(hsla(0,0%,100%,0),rgba(0,0,0,.3))}.video .body div img[data-v-1c20c6f5]{width:100%;height:100%}',""])},function(t,e,a){var i=a(105);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(1).default)("da680adc",i,!0,{})},function(t,e,a){"use strict";a.r(e);var i=a(21),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);var o=a(50),c=a(0);var s=function(t){a(106)},d=Object(c.a)(n.a,o.a,o.b,!1,s,"data-v-1c20c6f5",null);e.default=d.exports},function(t,e,a){(t.exports=a(2)(!1)).push([t.i,'.index-tool[data-v-5aad0aaa]{width:100%;height:auto;background:#fff;margin-top:.3rem;border-bottom:1px solid #e1e1e1}.index-tool div[data-v-5aad0aaa]{width:7.1rem;height:auto;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;padding:.2rem;font-size:24px;margin:auto;border:1px solid #e1e1e1;border-radius:.1rem}.index-tool div.everyday-read[data-v-5aad0aaa]{-webkit-flex-direction:column;flex-direction:column}.index-tool div.everyday-read p[data-v-5aad0aaa]{text-indent:2em}.index-tool div.everyday-read button[data-v-5aad0aaa]{-webkit-align-self:flex-end;align-self:flex-end}.index-tool div[data-v-5aad0aaa]:not(:first-child){margin-top:.1rem}.index-tool div.growth[data-v-5aad0aaa]{-webkit-justify-content:space-between;justify-content:space-between;height:1.1rem}.index-tool div.growth span[data-v-5aad0aaa]:last-child{margin-left:.4rem}.index-tool div.ad[data-v-5aad0aaa]{height:1.4rem;padding:0;overflow:hidden}.index-tool div.ad img[data-v-5aad0aaa]{width:100%;height:100%}.index-tool div.tool-btn[data-v-5aad0aaa]{height:.83rem;padding:0;border:0}.index-tool div.tool-btn a[data-v-5aad0aaa]{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;width:100%;height:100%}.index-tool div.tool-btn a i[data-v-5aad0aaa]{display:block;width:.44rem;height:.44rem;background:url("/src/images/index/tool-icon.png") 50% no-repeat;background-size:contain}.index-tool div.tool-btn a span[data-v-5aad0aaa]{margin-left:.2rem;color:#ff950c}.index-tool div button[data-v-5aad0aaa]{color:#f7aa2b;border:0;outline:0;background:none;font-size:24px}',""])},function(t,e,a){var i=a(108);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(1).default)("49a82300",i,!0,{})},function(t,e,a){"use strict";a.r(e);var i=a(22),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);var o=a(51),c=a(0);var s=function(t){a(109)},d=Object(c.a)(n.a,o.a,o.b,!1,s,"data-v-5aad0aaa",null);e.default=d.exports},function(t,e,a){(t.exports=a(2)(!1)).push([t.i,".score[data-v-73a7c578]{position:absolute;top:.28rem;right:0;width:2.24rem;height:.82rem;background:rgba(135,106,80,.4);display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;padding-left:.1rem;padding-right:2px;border-top-left-radius:.4rem;border-bottom-left-radius:.4rem;color:#fff}.score img[data-v-73a7c578]{width:.44rem;height:.44rem;margin-right:.1rem}.score div[data-v-73a7c578]{font-size:20px}.score div .score-wrap[data-v-73a7c578]{display:-webkit-flex;display:flex;-webkit-justify-content:flex-end;justify-content:flex-end;width:1.2rem;height:.3rem;border-radius:.3rem;border:1px solid #fff;background:#e6e6e6;overflow:hidden}.score div .score-wrap i[data-v-73a7c578]{display:block;height:100%;background:#90e15a}",""])},function(t,e,a){var i=a(111);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(1).default)("b76225da",i,!0,{})},function(t,e,a){"use strict";a.r(e);var i=a(23),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);var o=a(53),c=a(0);var s=function(t){a(112)},d=Object(c.a)(n.a,o.a,o.b,!1,s,"data-v-73a7c578",null);e.default=d.exports},function(t,e,a){(t.exports=a(2)(!1)).push([t.i,".location[data-v-286abfde]{position:absolute;top:.28rem;left:.22rem;width:auto;height:.82rem;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;background:rgba(135,106,80,.4);border-radius:.4rem;padding-left:.1rem;padding-right:.3rem;color:#fff;font-size:20px}.location img[data-v-286abfde]{width:.44rem;height:.44rem;margin-right:.1rem}",""])},function(t,e,a){var i=a(114);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(1).default)("79226f54",i,!0,{})},function(t,e,a){"use strict";a.r(e);var i=a(24),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);var o=a(54),c=a(0);var s=function(t){a(115)},d=Object(c.a)(n.a,o.a,o.b,!1,s,"data-v-286abfde",null);e.default=d.exports},function(t,e,a){(t.exports=a(2)(!1)).push([t.i,'.baby-content[data-v-6d1b67ca]{position:relative;height:4rem;background:url("/src/images/index/baby-bg.png") no-repeat top;background-size:7.5rem 3rem}.baby-content .baby[data-v-6d1b67ca]{position:absolute;bottom:0;width:100%;height:2rem;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}.baby-content .baby div[data-v-6d1b67ca]{height:2.1rem}.baby-content .baby div[data-v-6d1b67ca]:first-child{width:2.1rem;border-radius:100%;overflow:hidden;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;background:#fff}.baby-content .baby div:first-child img[data-v-6d1b67ca]{width:1.8rem;height:1.8rem;border-radius:100%;outline:0;box-shadow:0 0 4px 1px hsla(0,0%,49%,.3)}.baby-content .baby div.baby-info[data-v-6d1b67ca]{width:4rem;height:1.8rem;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;-webkit-align-items:flex-start;align-items:flex-start;padding-left:.4rem}.baby-content .baby div.baby-info p[data-v-6d1b67ca]:first-child{padding:.1rem .2rem;margin-bottom:.4rem;background:#fa5e2d;color:#fff;border-radius:.1rem}',""])},function(t,e,a){var i=a(117);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(1).default)("8e9a24c4",i,!0,{})},function(t,e,a){"use strict";a.r(e);var i=a(25),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);var o=a(52),c=a(0);var s=function(t){a(118)},d=Object(c.a)(n.a,o.a,o.b,!1,s,"data-v-6d1b67ca",null);e.default=d.exports},function(t,e,a){(t.exports=a(2)(!1)).push([t.i,".index-page[data-v-13232dd7]{position:absolute;top:0;left:0;right:0;bottom:1rem;overflow:auto;-webkit-overflow-scrolling:touch}",""])},function(t,e,a){var i=a(120);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(1).default)("4e65e754",i,!0,{})},,,,,,,function(t,e,a){"use strict";a.r(e);var i=a(26),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);var o=a(48),c=a(0);var s=function(t){a(121)},d=Object(c.a)(n.a,o.a,o.b,!1,s,"data-v-13232dd7",null);e.default=d.exports}])]);