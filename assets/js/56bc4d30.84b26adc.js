"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[784],{5788:(e,a,t)=>{t.d(a,{Iu:()=>i,yg:()=>g});var n=t(1504);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),y=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},i=function(e){var a=y(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),c=y(t),d=s,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return t?n.createElement(g,p(p({ref:a},i),{},{components:t})):n.createElement(g,p({ref:a},i))}));function g(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,p=new Array(r);p[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[c]="string"==typeof e?e:s,p[1]=o;for(var y=2;y<r;y++)p[y]=t[y];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7956:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>y});var n=t(5072),s=(t(1504),t(5788));const r={id:"canvas",title:"Canvas",sidebar_label:"Overview",slug:"/canvas/overview"},p=void 0,o={unversionedId:"canvas/canvas",id:"canvas/canvas",title:"Canvas",description:"The Canvas component is the root of your Skia drawing.",source:"@site/docs/canvas/canvas.md",sourceDirName:"canvas",slug:"/canvas/overview",permalink:"/react-native-skia/docs/canvas/overview",draft:!1,editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/canvas/canvas.md",tags:[],version:"current",frontMatter:{id:"canvas",title:"Canvas",sidebar_label:"Overview",slug:"/canvas/overview"},sidebar:"tutorialSidebar",previous:{title:"Bundle Size",permalink:"/react-native-skia/docs/getting-started/bundle-size"},next:{title:"Contexts",permalink:"/react-native-skia/docs/canvas/contexts"}},l={},y=[{value:"Getting the Canvas size",id:"getting-the-canvas-size",level:2},{value:"Getting a Canvas Snapshot",id:"getting-a-canvas-snapshot",level:2},{value:"Example",id:"example",level:3},{value:"Accessibilty",id:"accessibilty",level:2}],i={toc:y},c="wrapper";function m(e){let{components:a,...t}=e;return(0,s.yg)(c,(0,n.c)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"The Canvas component is the root of your Skia drawing.\nYou can treat it as a regular React Native view and assign a view style.\nBehind the scenes, it is using its own React renderer."),(0,s.yg)("table",null,(0,s.yg)("thead",{parentName:"table"},(0,s.yg)("tr",{parentName:"thead"},(0,s.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,s.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,s.yg)("th",{parentName:"tr",align:"left"},"Description."))),(0,s.yg)("tbody",{parentName:"table"},(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},"style?"),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"ViewStyle")),(0,s.yg)("td",{parentName:"tr",align:"left"},"View style")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},"ref?"),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"Ref<SkiaView>")),(0,s.yg)("td",{parentName:"tr",align:"left"},"Reference to the ",(0,s.yg)("inlineCode",{parentName:"td"},"SkiaView")," object")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},"mode?"),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"default")," or ",(0,s.yg)("inlineCode",{parentName:"td"},"continuous")),(0,s.yg)("td",{parentName:"tr",align:"left"},"By default, the canvas is only updated when the drawing tree or animation values change. With ",(0,s.yg)("inlineCode",{parentName:"td"},'mode="continuous"'),", the canvas will redraw on every frame")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},"onSize?"),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"SharedValue<Size>")),(0,s.yg)("td",{parentName:"tr",align:"left"},"Reanimated value to which the canvas size will be assigned  (see ",(0,s.yg)("a",{parentName:"td",href:"/docs/animations/hooks#canvas-size"},"canvas size"),")")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},"onLayout?"),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"NativeEvent<LayoutEvent>")),(0,s.yg)("td",{parentName:"tr",align:"left"},"Invoked on mount and on layout changes (see ",(0,s.yg)("a",{parentName:"td",href:"https://reactnative.dev/docs/view#onlayout"},"onLayout"),")")))),(0,s.yg)("h2",{id:"getting-the-canvas-size"},"Getting the Canvas size"),(0,s.yg)("p",null,"If the size of the Canvas is unknown, there are two ways to access it:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"On the JS thread"),", using the ",(0,s.yg)("a",{parentName:"li",href:"https://reactnative.dev/docs/view#onlayout"},(0,s.yg)("inlineCode",{parentName:"a"},"onLayout"))," prop, like you would on any regular React Native View. "),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"On the UI thread"),", using the ",(0,s.yg)("a",{parentName:"li",href:"/docs/animations/hooks#canvas-size"},(0,s.yg)("inlineCode",{parentName:"a"},"onSize"))," prop with ",(0,s.yg)("a",{parentName:"li",href:"/docs/animations/animations"},"Reanimated"),".")),(0,s.yg)("h2",{id:"getting-a-canvas-snapshot"},"Getting a Canvas Snapshot"),(0,s.yg)("p",null,"You can save your drawings as an image by using the ",(0,s.yg)("inlineCode",{parentName:"p"},"makeImageSnapshotAsync")," method. This method returns a promise that resolves to an ",(0,s.yg)("a",{parentName:"p",href:"/docs/images"},"Image"),".\nIt executes on the UI thread, ensuring access to the same Skia context as your on-screen canvases, including ",(0,s.yg)("a",{parentName:"p",href:"https://shopify.github.io/react-native-skia/docs/animations/textures"},"textures"),"."),(0,s.yg)("p",null,"If your drawing does not contain textures, you may also use the synchronous ",(0,s.yg)("inlineCode",{parentName:"p"},"makeImageSnapshot")," method for simplicity."),(0,s.yg)("h3",{id:"example"},"Example"),(0,s.yg)("div",{className:"shiki-twoslash-fragment"},(0,s.yg)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,s.yg)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.yg)("div",{parentName:"pre",className:"code-container"},(0,s.yg)("code",{parentName:"div"},(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) function useEffect(effect: EffectCallback, deps?: DependencyList): void\nimport useEffect"},"useEffect"),"} "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#22863A"}},'"react"'),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.yg)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const useCanvasRef: () => React.RefObject<SkiaDomView>\nimport useCanvasRef"},"useCanvasRef")),(0,s.yg)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle"),"} "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const Demo: () => React.JSX.Element"},"Demo")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const ref: React.RefObject<SkiaDomView>"},"ref")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) useCanvasRef(): React.RefObject<SkiaDomView>\nimport useCanvasRef"},"useCanvasRef")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"();")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined): void\nimport useEffect"},"useEffect")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"(() "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"function setTimeout(handler: () => void, timeout: number): number (+2 overloads)"},"setTimeout")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"(() "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,s.yg)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// you can pass an optional rectangle")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,s.yg)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// to only save part of the image")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const image: SkImage | undefined"},"image")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const ref: React.RefObject<SkiaDomView>"},"ref")),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},"."),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) React.RefObject<SkiaDomView>.current: SkiaDomView | null"},"current")),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},"?.",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(method) SkiaDomView.makeImageSnapshot(rect?: SkRect | undefined): SkImage"},"makeImageSnapshot")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"();")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"if"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," (",(0,s.yg)("data-lsp",{parentName:"span",lsp:"const image: SkImage | undefined"},"image"),") {")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,s.yg)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// you can use image in an <Image> component")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,s.yg)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// Or save to file using encodeToBytes -> Uint8Array")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const bytes: Uint8Array"},"bytes")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const image: SkImage"},"image")),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(method) SkImage.encodeToBytes(fmt?: ImageFormat | undefined, quality?: number | undefined): Uint8Array"},"encodeToBytes")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"();")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"      }")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"    }"),(0,s.yg)("span",{parentName:"div",style:{color:"#212121"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},"1000"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},")")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"  });")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," }} "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) ref?: (React.RefObject<SkiaDomView> & React.Ref<SkiaDomView>) | undefined"},"ref")),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,s.yg)("data-lsp",{parentName:"span",lsp:"const ref: React.RefObject<SkiaDomView>"},"ref"),"}>")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) r: number"},"r")),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},"128"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) cx: AnimatedProp<number>"},"cx")),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},"128"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) cy: AnimatedProp<number>"},"cy")),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},"128"),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,s.yg)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) color: string"},"color")),(0,s.yg)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#22863A"}},'"red"'),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,s.yg)("span",{parentName:"div",style:{color:"#1976D2"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,s.yg)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,s.yg)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.yg)("div",{parentName:"pre",className:"code-container"},(0,s.yg)("code",{parentName:"div"},(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) function useEffect(effect: EffectCallback, deps?: DependencyList): void\nimport useEffect"},"useEffect")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"react"),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const useCanvasRef: () => React.RefObject<SkiaDomView>\nimport useCanvasRef"},"useCanvasRef")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"export"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const Demo: () => React.JSX.Element"},"Demo")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const ref: React.RefObject<SkiaDomView>"},"ref")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) useCanvasRef(): React.RefObject<SkiaDomView>\nimport useCanvasRef"},"useCanvasRef")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"()"),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined): void\nimport useEffect"},"useEffect")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"function setTimeout(handler: () => void, timeout: number): number (+2 overloads)"},"setTimeout")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"      "),(0,s.yg)("span",{parentName:"div",style:{color:"#616E88"}},"// you can pass an optional rectangle")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"      "),(0,s.yg)("span",{parentName:"div",style:{color:"#616E88"}},"// to only save part of the image")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const image: SkImage | undefined"},"image")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const ref: React.RefObject<SkiaDomView>"},"ref")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) React.RefObject<SkiaDomView>.current: SkiaDomView | null"},"current")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"?."),(0,s.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(method) SkiaDomView.makeImageSnapshot(rect?: SkRect | undefined): SkImage"},"makeImageSnapshot")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"()"),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"if"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ("),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const image: SkImage | undefined"},"image")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},") "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"        "),(0,s.yg)("span",{parentName:"div",style:{color:"#616E88"}},"// you can use image in an <Image> component")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"        "),(0,s.yg)("span",{parentName:"div",style:{color:"#616E88"}},"// Or save to file using encodeToBytes -> Uint8Array")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const bytes: Uint8Array"},"bytes")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const image: SkImage"},"image")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,s.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(method) SkImage.encodeToBytes(fmt?: ImageFormat | undefined, quality?: number | undefined): Uint8Array"},"encodeToBytes")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"()"),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"},"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#B48EAD"}},"1000"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) ref?: (React.RefObject<SkiaDomView> & React.Ref<SkiaDomView>) | undefined"},"ref")),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"const ref: React.RefObject<SkiaDomView>"},"ref")),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,s.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => React.JSX.Element\nimport Circle"},"Circle")),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) r: number"},"r")),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.yg)("span",{parentName:"div",style:{color:"#B48EAD"}},"128"),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) cx: AnimatedProp<number>"},"cx")),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.yg)("span",{parentName:"div",style:{color:"#B48EAD"}},"128"),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) cy: AnimatedProp<number>"},"cy")),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,s.yg)("span",{parentName:"div",style:{color:"#B48EAD"}},"128"),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(property) color: string"},"color")),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"red"),(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,s.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,s.yg)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FunctionComponent<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,s.yg)("div",{parentName:"code",className:"line"},(0,s.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,s.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,s.yg)("h2",{id:"accessibilty"},"Accessibilty"),(0,s.yg)("p",null,"The Canvas component supports the same properties as a View component including its ",(0,s.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/accessibility#accessible"},"accessibility properties"),".\nYou can make elements inside the canvas accessible as well by overlayings views on top of your canvas.\nThis is the same recipe used for ",(0,s.yg)("a",{parentName:"p",href:"https://shopify.github.io/react-native-skia/docs/animations/gestures/#element-tracking"},"applying gestures on specific canvas elements"),"."))}m.isMDXComponent=!0}}]);