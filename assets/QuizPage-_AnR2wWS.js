import{e as j,f as M,Q as A,a as E,c as R,u as O,d as U,b as W}from"./QCard-B1HL1isL.js";import{h as G,u as H,d as J,a as X,Q as S}from"./QBtn-DODlhEDm.js";import{k as I,h as p,c as d,r as N,M as Y,N as Z,g as ee,d as T,z as c,A as V,B as s,f as a,I as m,G as f,D as C,E as Q,O as te,P as ae,H as ne,o as se,J as oe,F as ue,K as y,C as w}from"./index-D6reY5Tk.js";import{u as ie}from"./questions-UbPxSEP3.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as re,b as ce}from"./navigation-CjgD1FBW.js";const L=I({name:"QSpace",setup(){const e=p("div",{class:"q-space"});return()=>e}}),z=I({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const i=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>p("div",{class:i.value},G(o.default))}}),de=I({name:"QItem",props:{...j,...H,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:i}){const{proxy:{$q:v}}=ee(),g=M(e,v),{hasLink:h,linkAttrs:b,linkClass:n,linkTag:B,navigateOnClick:x}=J(),_=N(null),k=N(null),q=d(()=>e.clickable===!0||h.value===!0||e.tag==="label"),l=d(()=>e.disable!==!0&&q.value===!0),r=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(g.value===!0?" q-item--dark":"")+(h.value===!0&&e.active===null?n.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(l.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),u=d(()=>e.insetLevel===void 0?null:{["padding"+(v.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function $(t){l.value===!0&&(k.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===_.value?k.value.focus():document.activeElement===k.value&&_.value.focus()),x(t))}function D(t){if(l.value===!0&&Y(t,[13,32])===!0){Z(t),t.qKeyEvent=!0;const P=new MouseEvent("click",t);P.qKeyEvent=!0,_.value.dispatchEvent(P)}i("keyup",t)}function F(){const t=X(o.default,[]);return l.value===!0&&t.unshift(p("div",{class:"q-focus-helper",tabindex:-1,ref:k})),t}return()=>{const t={ref:_,class:r.value,style:u.value,role:"listitem",onClick:$,onKeyup:D};return l.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,b.value)):q.value===!0&&(t["aria-disabled"]="true"),p(B.value,t,F())}}}),me={key:0},fe={key:1},ve=["src"],he={key:0,class:"text-h6 blurred-text"},_e={key:1},ke={class:"text-h6"},ye={class:""},be=T({__name:"AnswerCard",props:{isConfirmed:{type:Boolean},answer:{},author:{}},setup(e){const o=e;return(i,v)=>(c(),V(R,{class:te(o.answer.check?"q-my-md clickable green-shadow-card":"q-my-md clickable")},{default:s(()=>[a(A,null,{default:s(()=>[a(de,null,{default:s(()=>[a(z,{thumbnail:""},{default:s(()=>[i.isConfirmed?f("",!0):(c(),m("div",me,[a(E,{size:"60px",icon:"mdi-check",color:o.answer.check?"green":"grey-5","text-color":"white"},null,8,["color"])])),i.isConfirmed?(c(),m("div",fe,[a(E,{size:"60px"},{default:s(()=>[C("img",{src:o.author.photoUrl},null,8,ve)]),_:1})])):f("",!0)]),_:1}),a(z,null,{default:s(()=>[i.isConfirmed?f("",!0):(c(),m("div",he,"Kandydat")),i.isConfirmed?(c(),m("div",_e,[C("div",ke,Q(o.author.name),1)])):f("",!0),C("div",ye,Q(o.answer.content),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["class"]))}}),K=le(be,[["__scopeId","data-v-69f6af8c"]]),Ce={class:"text-h5"},ge={key:0},qe={key:0},pe={key:1},Ie=T({__name:"QuizPage",setup(e){const o=ie(),i=O(),v=ae(),g=ne();se(async()=>{await o.loadQuestions(),await i.loadAuthors()});const h=d(()=>v.params.id),b=d(()=>v.query.kandydat?.toString().split(",")||[]),n=d(()=>o.getQuestionById(+h.value)),B=d(()=>o.questions.length),x=d(()=>{if(n.value)return n.value?.answers.filter(l=>l.check).length>0}),_=l=>{l.check=!0},k=l=>{l.check=!1},q=()=>{if(!n.value){console.error("Question is undefined");return}n.value.isConfirm=!0};return(l,r)=>(c(),V(U,{padding:""},{default:s(()=>[a(R,null,{default:s(()=>[a(A,null,{default:s(()=>[C("h4",null,"Pytanie: "+Q(n.value?.id),1),C("p",Ce,Q(n.value?.content),1)]),_:1}),a(A,null,{default:s(()=>[(c(!0),m(ue,null,oe(n.value?.answers,u=>(c(),m("div",{key:u.id},[b.value.includes(u.author)?(c(),m("div",ge,[n.value?.isConfirm?f("",!0):(c(),m("div",qe,[a(K,{onClick:$=>u.check?k(u):_(u),answer:u,"is-confirmed":n.value?.isConfirm,author:y(i).getAuthorById(u.author)},null,8,["onClick","answer","is-confirmed","author"])])),n.value?.isConfirm?(c(),m("div",pe,[a(K,{answer:u,"is-confirmed":n.value?.isConfirm,author:y(i).getAuthorById(u.author)},null,8,["answer","is-confirmed","author"])])):f("",!0)])):f("",!0)]))),128))]),_:1}),a(W,null,{default:s(()=>[a(S,{icon:"mdi-chevron-left",color:"primary",onClick:r[0]||(r[0]=u=>y(re)(y(g),+h.value,b.value))},{default:s(()=>r[2]||(r[2]=[w("Previous")])),_:1}),a(L),a(S,{icon:"mdi-text-box-check-outline",disable:!x.value,color:"secondary",onClick:q},{default:s(()=>r[3]||(r[3]=[w("Sprawdź")])),_:1},8,["disable"]),a(L),a(S,{"icon-right":"mdi-chevron-right",color:"primary",disable:!n.value?.isConfirm,onClick:r[1]||(r[1]=u=>y(ce)(y(g),+h.value,B.value,b.value))},{default:s(()=>r[4]||(r[4]=[w("NEXT")])),_:1},8,["disable"])]),_:1})]),_:1})]),_:1}))}});export{Ie as default};
