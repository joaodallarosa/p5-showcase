import{_ as X,d as Y,r as s,o as Z,a as N,c as O,b as e,f as T,g as j,j as P,i as V}from"./entry-e785c886.mjs";const A=Y({__name:"index",setup(L,{expose:c}){c();let y,l,h=s(null),_=s(null);var r=s(null),n=s(null),x=s(null),k=s(null),$=s(null),w=s(null);const B=700,S=180,m=500;y=()=>{const i=r.value;i.classList.add("cube__face--top--opened"),i.style.transform=`translateZ(${-m/2}px) translateY(0px) rotateX(120deg)`},Z(()=>{var i=_.value,C=h.value,g="";const I=()=>{var o=C.querySelector(":checked"),a="show-"+o.value;g&&i.classList.remove(g),i.classList.add(a),g=a};I();const R=(o,a,t)=>{const d=$.value;d.style.height=`${a}px`,d.style.width=`${o}px`,d.style.background="#e32929",d.style.transform=`rotateY(0deg) translateZ(${t/2}px)`;const u=n.value;u.style.height=`${a}px`,u.style.width=`${t}px`,u.style.background="#cc2424",u.style.transform=`rotateY(90deg) translateZ(${o-t/2}px)`;const f=k.value;f.style.height=`${a}px`,f.style.width=`${t}px`,f.style.background="#cc2424",f.style.transform=`rotateY(90deg) translateZ(${-t/2}px)`;const p=w.value;p.style.height=`${a}px`,p.style.width=`${o}px`,p.style.background="#b52020",p.style.transform=`rotateY(180deg) translateZ(${t/2}px)`;const b=x.value;b.style.height=`${t}px`,b.style.width=`${o}px`,b.style.background="#b52020",b.style.transform=`rotateX(90deg) translateZ(${t/2-a}px) translateX(${0}px)`;const v=r.value;v.style.height=`${t}px`,v.style.width=`${o}px`,v.style.background="yellow",v.style.transform=`translateZ(${-t/2}px) translateY(0px) rotateX( 90deg)`};l=()=>{window.location.reload()},C.addEventListener("change",I),R(B,S,m),_.value.style.display="block"});const E={openBox:y,reset:l,radio:h,cubeRef:_,top:r,right:n,bottom:x,left:k,front:$,back:w,BOX_WIDTH:B,BOX_HEIGHT:S,BOX_DEPTH:m};return Object.defineProperty(E,"__isScriptSetup",{enumerable:!1,value:!0}),E}}),G={class:"container mx-auto flex justify-center items-center h-screen"},H={class:"flex flex-col"},M=e("button",{class:"px-5 py-2 hover:bg-black hover:text-white"}," Back ",-1),q={class:"scene"},F={class:"cube",ref:"cubeRef",style:{display:"none"}},U={class:"cube__face cube__face--front",ref:"front"},z={class:"cube__face cube__face--back",ref:"back"},J={class:"cube__face cube__face--right",ref:"right"},K={class:"cube__face cube__face--left",ref:"left"},Q={class:"cube__face cube__face--bottom",ref:"bottom"},W={class:"cube__face cube__face--top",ref:"top"},D=e("img",{src:"/images/pollos.png"},null,-1),ee=[D],te=e("div",{class:"cube__face cube__face--inside"}," THIS WAS MADE ONLY WITH CSS ",-1),ae=e("div",{class:"cube__face cube__face--left-label"},null,-1),se=e("div",{class:"cube__face cube__face--rigt-label"},null,-1),le={class:"radio-group",ref:"radio"},oe=P('<label><input type="radio" name="rotate-cube-side" value="front" checked> front </label><label><input type="radio" name="rotate-cube-side" value="right"> right </label><label><input type="radio" name="rotate-cube-side" value="back"> back </label><label><input type="radio" name="rotate-cube-side" value="left"> left </label><label><input type="radio" name="rotate-cube-side" value="top"> top </label><label><input type="radio" name="rotate-cube-side" value="bottom"> bottom </label>',6);function ce(L,c,y,l,h,_){const r=V;return N(),O("div",G,[e("div",H,[e("div",null,[T(r,{to:"/"},{default:j(()=>[M]),_:1}),e("button",{onClick:c[0]||(c[0]=(...n)=>l.reset&&l.reset(...n)),class:"display px-5 py-2 hover:bg-black hover:text-white"}," Reset ")]),e("div",q,[e("div",F,[e("div",U," SURPRISE INSIDE! ",512),e("div",z,null,512),e("div",J,null,512),e("div",K,null,512),e("div",Q,null,512),e("div",W,ee,512),te,ae,se],512)]),e("p",le,[oe,e("button",{class:"px-5 py-2 hover:bg-black hover:text-white",onClick:c[1]||(c[1]=(...n)=>l.openBox&&l.openBox(...n))}," Open the Box! ")],512)])])}var re=X(A,[["render",ce]]);export{re as default};
