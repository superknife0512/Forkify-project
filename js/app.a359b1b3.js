(function(e){function t(t){for(var n,a,_=t[0],o=t[1],c=t[2],u=0,p=[];u<_.length;u++)a=_[u],s[a]&&p.push(s[a][0]),s[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,_=1;_<i.length;_++){var o=i[_];0!==s[o]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},s={app:0},r=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/Forkify-project/";var _=window["webpackJsonp"]=window["webpackJsonp"]||[],o=_.push.bind(_);_.push=t,_=_.slice();for(var c=0;c<_.length;c++)t(_[c]);var l=o;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},1:function(e,t){},2:function(e,t){},2856:function(e,t,i){},"28a3":function(e,t,i){},2922:function(e,t,i){"use strict";var n=i("cde3"),s=i.n(n);s.a},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,i){"use strict";i.r(t);i("ac6a"),i("a481"),i("cadf"),i("551c"),i("097d");var n=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("v-header"),i("v-result"),i("div",{staticClass:"recipe"},[e.isLoading?i("loader"):e._e(),i("v-recipe")],1),i("v-shop-list")],1)},r=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("img",{staticClass:"header__logo",attrs:{src:i("cf05"),alt:"Logo"}}),n("form",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"search__field",attrs:{type:"text",placeholder:"Search over 1,000,000 recipes..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),n("button",{staticClass:"btn search__btn",on:{click:function(t){return t.preventDefault(),e.fetchData(t)}}},[n("i",{staticClass:"fas fa-search search__icon"}),n("span",[e._v("Search")])])]),n("div",{staticClass:"likes"},[e._m(0),n("div",{staticClass:"likes__panel"},[n("ul",{staticClass:"likes__list"},[n("v-like")],1)])])])},_=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"likes__field"},[i("i",{staticClass:"fas fa-heart likes__icon"})])}],o=(i("386d"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",e._l(e.getLikes,function(t){return i("li",{key:t.id,on:{click:function(i){e.getRecipe(t.id)}}},[i("a",{staticClass:"likes__link",attrs:{href:"#"+t.id}},[i("figure",{staticClass:"likes__fig"},[i("img",{attrs:{src:t.image,alt:t.title}})]),i("div",{staticClass:"likes__data"},[i("h4",{staticClass:"likes__name"},[e._v(e._s(e._f("formatTitle")(t.title)))]),i("p",{staticClass:"likes__author"},[e._v(e._s(t.author))])])])])}))}),c=[],l=(i("28a5"),{filters:{formatTitle:function(e){if(e.length>17){var t=e.split(" "),i=0,n=[];return t.forEach(function(e){e.length+i<17&&(i+=e.length,n.push(e))}),"".concat(n.join(" "),"...")}return e}}}),u={mixins:[l],computed:{getLikes:function(){return this.$store.state.likes}},methods:{getRecipe:function(e){this.$store.commit("clearData","recipe"),this.$store.dispatch("fetchRecipe",e)}}},p=u,d=(i("f772"),i("2877")),f=Object(d["a"])(p,o,c,!1,null,null,null);f.options.__file="like.vue";var g=f.exports,h={data:function(){return{search:null}},components:{vLike:g},methods:{fetchData:function(){this.$store.commit("clearData","results"),this.$store.dispatch("fetchData",this.search),this.search=""}}},v=h,m=(i("2922"),Object(d["a"])(v,a,_,!1,null,null,null));m.options.__file="header.vue";var C=m.exports,b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"results"},[e.isLoadingRes?i("loader"):e._e(),i("ul",{staticClass:"results__list"},e._l(e.getResults,function(t){return i("result-each",{key:t.recipe_id,attrs:{data:t,isActive:e.isActive},on:{changeActive:function(t){e.changeActive(t)}}})})),i("result-page",{attrs:{totalPages:e.allPages,page:e.page},on:{goFront:e.goFront,goBack:e.goBack}})],1)},E=[],k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{on:{click:function(t){e.getRecipe(e.data.recipe_id)}}},[i("a",{staticClass:"results__link results__link",class:{"results__link--active":e.isActive===e.data.recipe_id},attrs:{href:"#"+e.data.recipe_id}},[i("figure",{staticClass:"results__fig"},[i("img",{attrs:{src:""+e.data.image_url,alt:""+e.data.title}})]),i("div",{staticClass:"results__data"},[i("h4",{staticClass:"results__name"},[e._v(e._s(e._f("formatTitle")(e.data.title)))]),i("p",{staticClass:"results__author"},[e._v(e._s(e.data.publisher))])])])])},O=[],P={mixins:[l],props:["data","isActive"],methods:{getRecipe:function(e){this.$emit("changeActive",e),this.$store.commit("clearData","recipe"),this.$store.dispatch("fetchRecipe",this.data.recipe_id)}}},L=P,M=Object(d["a"])(L,k,O,!1,null,null,null);M.options.__file="resultEach.vue";var D=M.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"results__pages"},[i("button",{directives:[{name:"show",rawName:"v-show",value:e.page-1!==0,expression:"page-1 !== 0"}],staticClass:"btn-inline results__btn--prev",on:{click:e.back}},[i("span",[e._v("Page "+e._s(e.page-1))]),i("i",{staticClass:"fas fa-caret-left search__icon"})]),i("button",{directives:[{name:"show",rawName:"v-show",value:e.page+1<=e.totalPages,expression:"page+1 <= totalPages"}],staticClass:"btn-inline results__btn--next",on:{click:e.front}},[i("span",[e._v("Page "+e._s(e.page+1))]),i("i",{staticClass:"fas fa-caret-right search__icon"})])])},A=[],y={data:function(){return{}},props:["totalPages","page"],methods:{front:function(){this.$emit("goFront")},back:function(){this.$emit("goBack")}}},x=y,j=(i("f624"),Object(d["a"])(x,w,A,!1,null,null,null));j.options.__file="resultPage.vue";var I=j.exports,R={data:function(){return{page:1,isActive:null}},components:{resultEach:D,resultPage:I},computed:{allPages:function(){var e=this.$store.state.results;if(e)return Math.ceil(e.length/10)},getResults:function(){var e=9*(this.page-1),t=9*this.page,i=this.$store.state.results;if(i)return i.slice(e,t)},isLoadingRes:function(){return this.$store.state.isLoading}},methods:{goFront:function(){this.page++},goBack:function(){this.page--},changeActive:function(e){this.isActive=e}}},T=R,U=(i("8388"),Object(d["a"])(T,b,E,!1,null,null,null));U.options.__file="result.vue";var B=U.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.recipe?i("div",[i("figure",{staticClass:"recipe__fig"},[i("img",{staticClass:"recipe__img",attrs:{src:e.recipe.image_url,alt:"Tomato"}}),i("h1",{staticClass:"recipe__title"},[i("span",[e._v(e._s(e.recipe.title))])])]),i("div",{staticClass:"recipe__details"},[i("div",{staticClass:"recipe__info"},[i("i",{staticClass:"fas fa-stopwatch recipe__info-icon"}),i("span",{staticClass:"recipe__info-data recipe__info-data--minutes"},[e._v(e._s(e.time))]),i("span",{staticClass:"recipe__info-text"},[e._v(" minutes")])]),i("div",{staticClass:"recipe__info"},[i("i",{staticClass:"fas fa-users recipe__info-icon"}),i("span",{staticClass:"recipe__info-data recipe__info-data--people"},[e._v(e._s(e.serving))]),i("span",{staticClass:"recipe__info-text"},[e._v(" servings")]),i("div",{staticClass:"recipe__info-buttons"},[i("button",{staticClass:"btn-tiny",on:{click:function(t){e.changeServing("incr")}}},[i("i",{staticClass:"fas fa-plus-circle"})]),i("button",{staticClass:"btn-tiny",on:{click:function(t){e.changeServing("decr")}}},[i("i",{staticClass:"fas fa-minus-circle"})])])]),i("button",{staticClass:"recipe__love",on:{click:function(t){e.addToLikes()}}},[i("i",{staticClass:"fa-heart heart__likes",class:e.checkLike?"fas":"far"})])]),i("div",{staticClass:"recipe__ingredients"},[i("ul",{staticClass:"recipe__ingredient-list"},e._l(e.parseIngredient,function(t){return i("li",{key:t.ingredient,staticClass:"recipe__item"},[i("i",{staticClass:"fas fa-utensils recipe__icon"}),i("div",{staticClass:"recipe__count"},[e._v(e._s(e._f("formatCount")(t.count)))]),i("div",{staticClass:"recipe__ingredient"},[i("span",{staticClass:"recipe__unit"},[e._v(e._s(t.unit))]),e._v("\n                        "+e._s(t.ingredient)+"\n                    ")])])})),i("button",{staticClass:"btn-small recipe__btn",on:{click:function(t){e.addShopList()}}},[i("i",{staticClass:"fas fa-shopping-cart search__icon"}),i("span",[e._v("Add to shopping list")])])]),i("div",{staticClass:"recipe__directions"},[i("h2",{staticClass:"heading-2"},[e._v("How to cook it")]),i("p",{staticClass:"recipe__directions-text"},[e._v("\n                This recipe was carefully designed and tested by\n                "),i("span",{staticClass:"recipe__by"},[e._v(e._s(e.recipe.publisher))]),e._v(". Please check out directions at their website.\n            ")]),i("a",{staticClass:"btn-small recipe__btn",attrs:{href:e.recipe.source_url,target:"_blank"}},[i("span",[e._v("Directions")]),i("i",{staticClass:"fas fa-caret-right search__icon"})])])]):e._e()},K=[],W=i("ca09"),S=W["a"],q=(i("9e94"),Object(d["a"])(S,$,K,!1,null,null,null));q.options.__file="recipe.vue";var N=q.exports,F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shopping"},[i("h2",{staticClass:"heading-2"},[e._v("My Shopping List")]),i("div",{staticClass:"shopping__add"},[i("div",{staticClass:"shopping__group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"count"}],staticClass:"shopping__input-count",attrs:{type:"number",placeholder:"count"},domProps:{value:e.count},on:{input:function(t){t.target.composing||(e.count=t.target.value)}}}),i("select",{directives:[{name:"model",rawName:"v-model",value:e.unit,expression:"unit"}],staticClass:"shopping__input-unit",attrs:{name:"unit",id:"unit"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.unit=t.target.multiple?i:i[0]}}},e._l(e.allUnits,function(t){return i("option",{key:t,domProps:{value:t}},[e._v("\n                            "+e._s(t)+"\n                    ")])}))]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.ingredient,expression:"ingredient"}],staticClass:"shopping__input-ingredient",attrs:{type:"text",placeholder:"ingredient"},domProps:{value:e.ingredient},on:{input:function(t){t.target.composing||(e.ingredient=t.target.value)}}}),i("button",{staticClass:"shopping__add-btn",on:{click:e.addMoreList}},[e._v("Add Item")])]),i("ul",{staticClass:"shopping__list"},e._l(e.shopList,function(t){return i("li",{key:t.ingredient,staticClass:"shopping__item"},[i("div",{staticClass:"shopping__count"},[i("input",{attrs:{type:"number",step:t.count},domProps:{value:t.count},on:{input:function(i){e.updateCount(t.id)}}}),i("p",[e._v(e._s(t.unit))])]),i("p",{staticClass:"shopping__description"},[e._v(e._s(t.ingredient))]),i("button",{staticClass:"shopping__delete btn-tiny",on:{click:function(i){e.deleteIngre(t.id)}}},[i("i",{staticClass:"fas fa-times-circle"})])])})),e.shopList!=[]&&""!=e.shopList?i("button",{staticClass:"shopping__clear-all btn-small",on:{click:e.clearAll}},[e._v("\n            Clear all list\n        ")]):e._e(),e._m(0)])},J=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"copyright"},[e._v("\n            ©Design by Jonas Schmedtmann. Powered by\n            "),i("a",{staticClass:"link",attrs:{href:"http://food2fork.com",target:"_blank"}},[e._v("Food2Fork.com")]),e._v(".\n        ")])}],z=(i("6b54"),{data:function(){return{count:"",unit:"tsp",ingredient:"",allUnits:["tsp","tbsp","cup","oz","gram"]}},computed:{shopList:function(){return this.$store.state.shopList}},methods:{updateCount:function(e){var t=event.target.value,i={id:e,newVal:t};this.$store.commit("updateCount",i)},deleteIngre:function(e){this.$store.commit("deleteIngre",e)},clearAll:function(){this.$store.commit("clearData","shopList")},addMoreList:function(){if(""!==this.count&&""!==this.ingredient){var e=this.count,t=this.unit,i=this.ingredient,n=Math.random().toString(35).substr(2,8),s={id:n,count:e,unit:t,ingredient:i};this.$store.commit("addMoreList",s),this.count="",this.ingredient=""}else alert("you must add full field first")}}}),H=z,V=(i("ff56"),Object(d["a"])(H,F,J,!1,null,null,null));V.options.__file="shopList.vue";var G=V.exports,Q={components:{vHeader:C,vResult:B,vRecipe:N,vShopList:G},computed:{isLoading:function(){return this.$store.state.loadingRec}}},X=Q,Y=(i("5c0b"),Object(d["a"])(X,s,r,!1,null,null,null));Y.options.__file="App.vue";var Z=Y.exports,ee=(i("96cf"),i("3040")),te=(i("20d6"),i("7514"),i("2f62")),ie=i("7338"),ne=i.n(ie),se={key:"af385d3b36d6694f553b7a4b3ef9a0ee",proxy:"https://cors-anywhere.herokuapp.com/"};n["a"].use(te["a"]);var re=new te["a"].Store({state:{results:null,recipe:null,shopList:[],likes:[],isLoading:!1,loadingRec:!1},mutations:{getResult:function(e,t){e.results=t},getRecipe:function(e,t){e.recipe=t},Loading:function(e,t){e[t]=!0},noneLoading:function(e,t){e[t]=!1},clearData:function(e,t){e[t]=""},addShopList:function(e,t){e.shopList=t},updateCount:function(e,t){var i=e.shopList.find(function(e){return e.id===t.id});i.count=t.newVal},deleteIngre:function(e,t){var i=e.shopList.findIndex(function(e){return e.id===t});e.shopList.splice(i,1)},addToLikes:function(e,t){var i=e.likes.find(function(e){return e.id===t.id});i?e.likes.splice(e.likes.indexOf(i),1):e.likes.push(t),localStorage.setItem("like",JSON.stringify(e.likes))},restore:function(e){var t=localStorage.getItem("like");e.likes=JSON.parse(t)},addMoreList:function(e,t){e.shopList.unshift(t)}},actions:{fetchData:function(){var e=Object(ee["a"])(regeneratorRuntime.mark(function e(t,i){var n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,n("Loading","isLoading"),e.next=5,ne.a.get("".concat(se.proxy,"https://www.food2fork.com/api/search?key=").concat(se.key,"&q=").concat(i));case 5:s=e.sent,n("getResult",s.data.recipes),n("noneLoading","isLoading"),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0),n("noneLoading","isLoading");case 14:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t,i){return e.apply(this,arguments)}}(),fetchRecipe:function(){var e=Object(ee["a"])(regeneratorRuntime.mark(function e(t,i){var n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,n("Loading","loadingRec"),e.next=5,ne.a.get("".concat(se.proxy,"https://www.food2fork.com/api/get?key=").concat(se.key,"&rId=").concat(i));case 5:s=e.sent,n("getRecipe",s.data.recipe),n("noneLoading","loadingRec"),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0),n("noneLoading","loadingRec");case 14:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t,i){return e.apply(this,arguments)}}()},getters:{checkLike:function(e){return function(t){return e.likes.find(function(e){return e.id===t})}}}}),ae=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_e=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"loader"},[i("i",{staticClass:"fas fa-spinner"})])}],oe=(i("f1d8"),{}),ce=Object(d["a"])(oe,ae,_e,!1,null,null,null);ce.options.__file="loader.vue";var le=ce.exports;i("e57f"),i("1c46");n["a"].config.productionTip=!1,n["a"].component("loader",le),new n["a"]({store:re,render:function(e){return e(Z)},created:function(){var e=this,t=window.location.hash.replace("#","");t&&["hashchange","load"].forEach(function(i){window.addEventListener(i,e.$store.dispatch("fetchRecipe",t))}),localStorage.length>0&&window.addEventListener("load",function(){e.$store.commit("restore")})}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var n=i("2856"),s=i.n(n);s.a},8388:function(e,t,i){"use strict";var n=i("e2e2"),s=i.n(n);s.a},"894e":function(e,t,i){},"915a":function(e,t,i){},"9e94":function(e,t,i){"use strict";var n=i("894e"),s=i.n(n);s.a},ca09:function(module,__webpack_exports__,__webpack_require__){"use strict";var E_Advanced_Js_complete_javascript_course_master_9_forkify_vue_forkify_node_modules_babel_runtime_helpers_builtin_es6_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("9393"),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("6b54"),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("ac6a"),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("6762"),core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("2fdb"),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("20d6"),core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("28a5"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("a481"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("cadf"),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("551c"),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("097d"),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_10__),fractional__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("a4f5"),fractional__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(fractional__WEBPACK_IMPORTED_MODULE_11__);__webpack_exports__["a"]={data:function(){return{serving:4}},computed:{recipe:function(){var e=this.$store.state.recipe;if(e)return e},time:function(){var e=this.recipe.ingredients;return e.length/3*15},parseIngredient:function parseIngredient(){var ingredients=this.recipe.ingredients,longUnit=["tablespoon","tablespoons","tbsps","teaspoon","teaspoons","tsps","cup","cups","ounces"],shortUnit=["tbsp","tbsp","tbsp","tsp","tsp","tsp","cup","cup","oz"],otherUnit=["gram","pound","pounds"],newIngredient=ingredients.map(function(ele){longUnit.forEach(function(e,t){ele=ele.replace(e,shortUnit[t])}),ele=ele.replace(/ *\([^)]*\) */g," ");var ingreArr=ele.split(" "),indexCount=ingreArr.findIndex(function(e){return shortUnit.concat(otherUnit).includes(e)}),objIng;if(-1===indexCount)objIng=isNaN(parseInt(ingreArr[0]))?{count:1,unit:"",ingredient:ingreArr.join(" ")}:{count:parseInt(ingreArr[0]),unit:"",ingredient:ingreArr.slice(1,ingreArr.length).join(" ")};else if(indexCount>0)if(2===indexCount){var count=eval(ingreArr.slice(0,indexCount).join("+")),unit=ingreArr[indexCount];objIng={count:count,unit:unit,ingredient:ingreArr.slice(indexCount+1,ingreArr.length).join(" ")}}else if(1===indexCount){var _count;ingreArr[0].includes("-")&&(_count=eval(ingreArr[0].split("-").join("+"))),_count=parseInt(ingreArr[0]);var _unit=ingreArr[indexCount];objIng={count:_count,unit:_unit,ingredient:ingreArr.slice(indexCount+1,ingreArr.length).join(" ")}}return objIng});return newIngredient},checkLike:function(){return this.$store.getters.checkLike(this.recipe.recipe_id)}},methods:{changeServing:function(e){var t,i=this;if("incr"===e)t=this.serving+1;else if("decr"===e){if(!(this.serving>1))return!1;t=this.serving-1}this.parseIngredient.forEach(function(e){e.count*=t/i.serving}),this.serving=t},addShopList:function(){var e=this.parseIngredient,t=e.map(function(e){return{count:e.count,unit:e.unit,ingredient:e.ingredient,id:Math.random().toString(35).substr(2,8)}});this.$store.commit("clearData","shopList"),this.$store.commit("addShopList",t)},addToLikes:function(){var e=this.recipe,t={id:e.recipe_id,title:e.title,author:e.publisher,image:e.image_url};this.$store.commit("addToLikes",t)}},filters:{formatCount:function(e){var t=e.toString();if(t.includes(".")){var i=t.split("."),n=Object(E_Advanced_Js_complete_javascript_course_master_9_forkify_vue_forkify_node_modules_babel_runtime_helpers_builtin_es6_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["a"])(i,2),s=n[0];n[1];if(0==s){var r=new fractional__WEBPACK_IMPORTED_MODULE_11__["Fraction"](e),a=Math.round(1e3*r.numerator)/1e3,_=Math.round(1e3*r.denominator)/1e3;return"".concat(a,"/").concat(_)}if(0!=s){var o=e-parseInt(s),c=new fractional__WEBPACK_IMPORTED_MODULE_11__["Fraction"](o),l=Math.round(1e3*c.numerator)/1e3,u=Math.round(1e3*c.denominator)/1e3;return"".concat(parseInt(s)," ").concat(l,"/").concat(u)}}return e}}}},cde3:function(e,t,i){},cf05:function(e,t,i){e.exports=i.p+"img/logo.31e29312.png"},dc6b:function(e,t,i){},e2e2:function(e,t,i){},f1d8:function(e,t,i){"use strict";var n=i("28a3"),s=i.n(n);s.a},f624:function(e,t,i){"use strict";var n=i("915a"),s=i.n(n);s.a},f772:function(e,t,i){"use strict";var n=i("dc6b"),s=i.n(n);s.a},fdb6:function(e,t,i){},ff56:function(e,t,i){"use strict";var n=i("fdb6"),s=i.n(n);s.a}});
//# sourceMappingURL=app.a359b1b3.js.map