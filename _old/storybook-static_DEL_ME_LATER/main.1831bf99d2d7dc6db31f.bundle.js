(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(18),__webpack_require__(49),__webpack_require__(7),__webpack_require__(50);var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),ascii_math__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(353),ascii_math__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(ascii_math__WEBPACK_IMPORTED_MODULE_5__),DangMath=(__webpack_require__(812),function(props){var a=props.a,b=props.b,c=props.c,mathML=ascii_math__WEBPACK_IMPORTED_MODULE_5___default()("sum(".concat(a,"+").concat(b,")=").concat(c)).toString();return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"with-ascii",dangerouslySetInnerHTML:{__html:mathML}})});DangMath.displayName="DangMath",__webpack_exports__.a=DangMath,DangMath.__docgenInfo={description:"",methods:[],displayName:"DangMath"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DangMath.jsx"]={name:"DangMath",docgenInfo:DangMath.__docgenInfo,path:"src/components/DangMath.jsx"})},210:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Sum__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(56),_SumWithCssAlias__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(94),App=(__webpack_require__(815),{Sum:_Sum__WEBPACK_IMPORTED_MODULE_0__.a,SumWithCssAlias:_SumWithCssAlias__WEBPACK_IMPORTED_MODULE_1__.a});__webpack_exports__.a=App},343:function(module,exports,__webpack_require__){},354:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/sigma.7420a7d1.png"},355:function(module){module.exports=JSON.parse('{"a":"1.3.0"}')},356:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="This component note is great\n===\n\n**Hello Bold**"},357:function(module,exports,__webpack_require__){__webpack_require__(358),__webpack_require__(460),module.exports=__webpack_require__(461)},461:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(16),__webpack_require__(11),__webpack_require__(7),__webpack_require__(17),__webpack_require__(13);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(44),req1=__webpack_require__(627),req2=__webpack_require__(816);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){req1.keys().forEach(function(filename){return req1(filename)}),req2.keys().forEach(function(filename){return req2(filename)})},module)}.call(this,__webpack_require__(169)(module))},56:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(2),__webpack_require__(12),__webpack_require__(15),__webpack_require__(18),__webpack_require__(11),__webpack_require__(60),__webpack_require__(1),__webpack_require__(61),__webpack_require__(62),__webpack_require__(7),__webpack_require__(14),__webpack_require__(13);var react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__),prop_types__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(10),prop_types__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__),_DangMath__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(155),_images_sigma_png__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(354),_images_sigma_png__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(_images_sigma_png__WEBPACK_IMPORTED_MODULE_15__);__webpack_require__(343);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var _ref=react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h1",{className:"title"},"Sum"),_ref2=react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img",{src:_images_sigma_png__WEBPACK_IMPORTED_MODULE_15___default.a,alt:"sigma"}),_ref3=react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"equal"}),Sum=function(_React$Component){function Sum(){var _getPrototypeOf2,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Sum);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}(this,(_getPrototypeOf2=_getPrototypeOf(Sum)).call.apply(_getPrototypeOf2,[this].concat(args))),_defineProperty(_assertThisInitialized(_this),"state",{}),_defineProperty(_assertThisInitialized(_this),"getPieceToRender",function(){var _this$props=_this.props,a=_this$props.a,b=_this$props.b,useImages=_this$props.useImages,useASCII=_this$props.useASCII,result=a+b,pieceToRender=react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment,null,_ref,react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3",{className:"result"},a," + ",b," = ",result));return useImages&&(pieceToRender=react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment,null,_ref2,react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3",null,a," + ",b," ",_ref3," ",result))),useASCII&&(pieceToRender=react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_DangMath__WEBPACK_IMPORTED_MODULE_14__.a,{a:a,b:b,c:result}))),pieceToRender}),_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Sum,react__WEBPACK_IMPORTED_MODULE_12___default.a.Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Sum,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"sum"},this.getPieceToRender())}}]),Sum}();Sum.displayName="Sum",Sum.propTypes={a:prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.number,b:prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.number,useImages:prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.bool,useASCII:prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.bool},Sum.defaultProps={a:2,b:2,useImages:!1,useASCII:!1},__webpack_exports__.a=Sum,Sum.__docgenInfo={description:"",methods:[{name:"getPieceToRender",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Sum",props:{a:{defaultValue:{value:"2",computed:!1},type:{name:"number"},required:!1,description:""},b:{defaultValue:{value:"2",computed:!1},type:{name:"number"},required:!1,description:""},useImages:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},useASCII:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Sum.jsx"]={name:"Sum",docgenInfo:Sum.__docgenInfo,path:"src/components/Sum.jsx"})},627:function(module,exports,__webpack_require__){var map={"./index.stories.js":628,"./sum.stories.js":657};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=627},628:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(44),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(118),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(344),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(156),withStorySource=__webpack_require__(294).withStorySource,__STORY__="import React from 'react';\n\nimport { storiesOf } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport { linkTo } from '@storybook/addon-links';\n\nimport { Button, Welcome } from '@storybook/react/demo';\n\nstoriesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);\n\nstoriesOf('Button', module)\n  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)\n  .add('with some emoji', () => (\n    <Button onClick={action('clicked')}>\n      <span role=\"img\" aria-label=\"so cool\">\n        😀 😎 👍 💯\n      </span>\n    </Button>\n  ));\n",__ADDS_MAP__={"welcome--to-storybook":{startLoc:{col:33,line:9},endLoc:{col:93,line:9}},"button--with-some-emoji":{startLoc:{col:7,line:13},endLoc:{col:3,line:19}},"button--with-text":{startLoc:{col:7,line:12},endLoc:{col:83,line:12}}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Welcome",module).addDecorator(withStorySource("import React from 'react';\n\nimport { storiesOf } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport { linkTo } from '@storybook/addon-links';\n\nimport { Button, Welcome } from '@storybook/react/demo';\n\nstoriesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);\n\nstoriesOf('Button', module)\n  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)\n  .add('with some emoji', () => (\n    <Button onClick={action('clicked')}>\n      <span role=\"img\" aria-label=\"so cool\">\n        😀 😎 👍 💯\n      </span>\n    </Button>\n  ));\n",__ADDS_MAP__)).add("to Storybook",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_3__.linkTo)("Button")})});var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button",module).addDecorator(withStorySource("import React from 'react';\n\nimport { storiesOf } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport { linkTo } from '@storybook/addon-links';\n\nimport { Button, Welcome } from '@storybook/react/demo';\n\nstoriesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);\n\nstoriesOf('Button', module)\n  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)\n  .add('with some emoji', () => (\n    <Button onClick={action('clicked')}>\n      <span role=\"img\" aria-label=\"so cool\">\n        😀 😎 👍 💯\n      </span>\n    </Button>\n  ));\n",__ADDS_MAP__)).add("with text",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")}).add("with some emoji",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},_ref)})}.call(this,__webpack_require__(169)(module))},657:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(44),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(118),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(345),_src_components_Sum__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(56),components_SumWithCssAlias__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(94),components_DangMath__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(155),components_App__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(210),_package__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(355),_componentNote1_md__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(356),withStorySource=__webpack_require__(294).withStorySource,__STORY__="import React from 'react';\nimport { storiesOf, addDecorator } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport { withInfo } from '@storybook/addon-info';\n// import { linkTo } from '@storybook/addon-links';\n\nimport Sum from '../src/components/Sum';\nimport SumWithCssAlias from 'components/SumWithCssAlias';\n// import SumWithAscii from 'components/SumWithAscii';\nimport DangMath from 'components/DangMath';\nimport App from 'components/App';\n\nimport { version } from '../package';\nimport markdownNotes from './componentNote1.md';\n\naddDecorator(withInfo);\n\nconst group = `Component (v${version})|`;\n\nstoriesOf(group + 'Sum', module)\n  // .addDecorator(withInfo)\n  .add('2+2 (default)', () => <Sum onClick={action('clicked')} />, {\n    notes: 'Hello',\n  })\n  .add('custom numbers', () => <Sum a={3} b={3} />)\n  .add('negative numbers', () => <Sum a={3} b={-2} />)\n  .add('negative numbers (=> 0)', () => <Sum a={3} b={-3} />)\n  .add('useImages', () => <Sum a={4} b={4} useImages />)\n  .add('useASCII', () => <Sum a={5} b={5} useASCII />);\n\nstoriesOf(group + 'Sum with alias', module)\n  .add('default logic', () => <SumWithCssAlias a={6} b={6} />)\n  .add('custom numbers (with notes)', () => <SumWithCssAlias a={7} b={7} />, {\n    // notes: 'A very simple example of addon notes'\n    notes: {\n      Intro: 'A very simple example of addon notes',\n      Design: markdownNotes,\n    },\n  });\n\nstoriesOf('Other|DangMath', module)\n  // .addDecorator(withInfo)\n  .add('simple usage', () => <DangMath a={8} b={8} c={16} />);\n\nstoriesOf('Other|App.Sum').add('2+2', () => <App.Sum />);\nstoriesOf('Other|App.SumWithCssAlias').add('2+2', () => <App.SumWithCssAlias />);\n",__ADDS_MAP__={"other-dangmath--simple-usage":{startLoc:{col:7,line:43},endLoc:{col:60,line:43}},"other-app-sum--2-2":{startLoc:{col:31,line:45},endLoc:{col:55,line:45}},"other-app-sumwithcssalias--2-2":{startLoc:{col:43,line:46},endLoc:{col:79,line:46}}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__.withInfo);var group="Component (v".concat(_package__WEBPACK_IMPORTED_MODULE_8__.a,")|"),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Sum__WEBPACK_IMPORTED_MODULE_4__.a,{a:3,b:3}),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Sum__WEBPACK_IMPORTED_MODULE_4__.a,{a:3,b:-2}),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Sum__WEBPACK_IMPORTED_MODULE_4__.a,{a:3,b:-3}),_ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Sum__WEBPACK_IMPORTED_MODULE_4__.a,{a:4,b:4,useImages:!0}),_ref5=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Sum__WEBPACK_IMPORTED_MODULE_4__.a,{a:5,b:5,useASCII:!0});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(group+"Sum",module).addDecorator(withStorySource("import React from 'react';\nimport { storiesOf, addDecorator } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport { withInfo } from '@storybook/addon-info';\n// import { linkTo } from '@storybook/addon-links';\n\nimport Sum from '../src/components/Sum';\nimport SumWithCssAlias from 'components/SumWithCssAlias';\n// import SumWithAscii from 'components/SumWithAscii';\nimport DangMath from 'components/DangMath';\nimport App from 'components/App';\n\nimport { version } from '../package';\nimport markdownNotes from './componentNote1.md';\n\naddDecorator(withInfo);\n\nconst group = `Component (v${version})|`;\n\nstoriesOf(group + 'Sum', module)\n  // .addDecorator(withInfo)\n  .add('2+2 (default)', () => <Sum onClick={action('clicked')} />, {\n    notes: 'Hello',\n  })\n  .add('custom numbers', () => <Sum a={3} b={3} />)\n  .add('negative numbers', () => <Sum a={3} b={-2} />)\n  .add('negative numbers (=> 0)', () => <Sum a={3} b={-3} />)\n  .add('useImages', () => <Sum a={4} b={4} useImages />)\n  .add('useASCII', () => <Sum a={5} b={5} useASCII />);\n\nstoriesOf(group + 'Sum with alias', module)\n  .add('default logic', () => <SumWithCssAlias a={6} b={6} />)\n  .add('custom numbers (with notes)', () => <SumWithCssAlias a={7} b={7} />, {\n    // notes: 'A very simple example of addon notes'\n    notes: {\n      Intro: 'A very simple example of addon notes',\n      Design: markdownNotes,\n    },\n  });\n\nstoriesOf('Other|DangMath', module)\n  // .addDecorator(withInfo)\n  .add('simple usage', () => <DangMath a={8} b={8} c={16} />);\n\nstoriesOf('Other|App.Sum').add('2+2', () => <App.Sum />);\nstoriesOf('Other|App.SumWithCssAlias').add('2+2', () => <App.SumWithCssAlias />);\n",__ADDS_MAP__)).add("2+2 (default)",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Sum__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")})},{notes:"Hello"}).add("custom numbers",function(){return _ref}).add("negative numbers",function(){return _ref2}).add("negative numbers (=> 0)",function(){return _ref3}).add("useImages",function(){return _ref4}).add("useASCII",function(){return _ref5});var _ref6=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SumWithCssAlias__WEBPACK_IMPORTED_MODULE_5__.a,{a:6,b:6}),_ref7=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SumWithCssAlias__WEBPACK_IMPORTED_MODULE_5__.a,{a:7,b:7});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(group+"Sum with alias",module).addDecorator(withStorySource("import React from 'react';\nimport { storiesOf, addDecorator } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport { withInfo } from '@storybook/addon-info';\n// import { linkTo } from '@storybook/addon-links';\n\nimport Sum from '../src/components/Sum';\nimport SumWithCssAlias from 'components/SumWithCssAlias';\n// import SumWithAscii from 'components/SumWithAscii';\nimport DangMath from 'components/DangMath';\nimport App from 'components/App';\n\nimport { version } from '../package';\nimport markdownNotes from './componentNote1.md';\n\naddDecorator(withInfo);\n\nconst group = `Component (v${version})|`;\n\nstoriesOf(group + 'Sum', module)\n  // .addDecorator(withInfo)\n  .add('2+2 (default)', () => <Sum onClick={action('clicked')} />, {\n    notes: 'Hello',\n  })\n  .add('custom numbers', () => <Sum a={3} b={3} />)\n  .add('negative numbers', () => <Sum a={3} b={-2} />)\n  .add('negative numbers (=> 0)', () => <Sum a={3} b={-3} />)\n  .add('useImages', () => <Sum a={4} b={4} useImages />)\n  .add('useASCII', () => <Sum a={5} b={5} useASCII />);\n\nstoriesOf(group + 'Sum with alias', module)\n  .add('default logic', () => <SumWithCssAlias a={6} b={6} />)\n  .add('custom numbers (with notes)', () => <SumWithCssAlias a={7} b={7} />, {\n    // notes: 'A very simple example of addon notes'\n    notes: {\n      Intro: 'A very simple example of addon notes',\n      Design: markdownNotes,\n    },\n  });\n\nstoriesOf('Other|DangMath', module)\n  // .addDecorator(withInfo)\n  .add('simple usage', () => <DangMath a={8} b={8} c={16} />);\n\nstoriesOf('Other|App.Sum').add('2+2', () => <App.Sum />);\nstoriesOf('Other|App.SumWithCssAlias').add('2+2', () => <App.SumWithCssAlias />);\n",__ADDS_MAP__)).add("default logic",function(){return _ref6}).add("custom numbers (with notes)",function(){return _ref7},{notes:{Intro:"A very simple example of addon notes",Design:_componentNote1_md__WEBPACK_IMPORTED_MODULE_9__.a}});var _ref8=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_DangMath__WEBPACK_IMPORTED_MODULE_6__.a,{a:8,b:8,c:16});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Other|DangMath",module).addDecorator(withStorySource("import React from 'react';\nimport { storiesOf, addDecorator } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport { withInfo } from '@storybook/addon-info';\n// import { linkTo } from '@storybook/addon-links';\n\nimport Sum from '../src/components/Sum';\nimport SumWithCssAlias from 'components/SumWithCssAlias';\n// import SumWithAscii from 'components/SumWithAscii';\nimport DangMath from 'components/DangMath';\nimport App from 'components/App';\n\nimport { version } from '../package';\nimport markdownNotes from './componentNote1.md';\n\naddDecorator(withInfo);\n\nconst group = `Component (v${version})|`;\n\nstoriesOf(group + 'Sum', module)\n  // .addDecorator(withInfo)\n  .add('2+2 (default)', () => <Sum onClick={action('clicked')} />, {\n    notes: 'Hello',\n  })\n  .add('custom numbers', () => <Sum a={3} b={3} />)\n  .add('negative numbers', () => <Sum a={3} b={-2} />)\n  .add('negative numbers (=> 0)', () => <Sum a={3} b={-3} />)\n  .add('useImages', () => <Sum a={4} b={4} useImages />)\n  .add('useASCII', () => <Sum a={5} b={5} useASCII />);\n\nstoriesOf(group + 'Sum with alias', module)\n  .add('default logic', () => <SumWithCssAlias a={6} b={6} />)\n  .add('custom numbers (with notes)', () => <SumWithCssAlias a={7} b={7} />, {\n    // notes: 'A very simple example of addon notes'\n    notes: {\n      Intro: 'A very simple example of addon notes',\n      Design: markdownNotes,\n    },\n  });\n\nstoriesOf('Other|DangMath', module)\n  // .addDecorator(withInfo)\n  .add('simple usage', () => <DangMath a={8} b={8} c={16} />);\n\nstoriesOf('Other|App.Sum').add('2+2', () => <App.Sum />);\nstoriesOf('Other|App.SumWithCssAlias').add('2+2', () => <App.SumWithCssAlias />);\n",__ADDS_MAP__)).add("simple usage",function(){return _ref8});var _ref9=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_App__WEBPACK_IMPORTED_MODULE_7__.a.Sum,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Other|App.Sum").addDecorator(withStorySource("import React from 'react';\nimport { storiesOf, addDecorator } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport { withInfo } from '@storybook/addon-info';\n// import { linkTo } from '@storybook/addon-links';\n\nimport Sum from '../src/components/Sum';\nimport SumWithCssAlias from 'components/SumWithCssAlias';\n// import SumWithAscii from 'components/SumWithAscii';\nimport DangMath from 'components/DangMath';\nimport App from 'components/App';\n\nimport { version } from '../package';\nimport markdownNotes from './componentNote1.md';\n\naddDecorator(withInfo);\n\nconst group = `Component (v${version})|`;\n\nstoriesOf(group + 'Sum', module)\n  // .addDecorator(withInfo)\n  .add('2+2 (default)', () => <Sum onClick={action('clicked')} />, {\n    notes: 'Hello',\n  })\n  .add('custom numbers', () => <Sum a={3} b={3} />)\n  .add('negative numbers', () => <Sum a={3} b={-2} />)\n  .add('negative numbers (=> 0)', () => <Sum a={3} b={-3} />)\n  .add('useImages', () => <Sum a={4} b={4} useImages />)\n  .add('useASCII', () => <Sum a={5} b={5} useASCII />);\n\nstoriesOf(group + 'Sum with alias', module)\n  .add('default logic', () => <SumWithCssAlias a={6} b={6} />)\n  .add('custom numbers (with notes)', () => <SumWithCssAlias a={7} b={7} />, {\n    // notes: 'A very simple example of addon notes'\n    notes: {\n      Intro: 'A very simple example of addon notes',\n      Design: markdownNotes,\n    },\n  });\n\nstoriesOf('Other|DangMath', module)\n  // .addDecorator(withInfo)\n  .add('simple usage', () => <DangMath a={8} b={8} c={16} />);\n\nstoriesOf('Other|App.Sum').add('2+2', () => <App.Sum />);\nstoriesOf('Other|App.SumWithCssAlias').add('2+2', () => <App.SumWithCssAlias />);\n",__ADDS_MAP__)).add("2+2",function(){return _ref9});var _ref10=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_App__WEBPACK_IMPORTED_MODULE_7__.a.SumWithCssAlias,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Other|App.SumWithCssAlias").addDecorator(withStorySource("import React from 'react';\nimport { storiesOf, addDecorator } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport { withInfo } from '@storybook/addon-info';\n// import { linkTo } from '@storybook/addon-links';\n\nimport Sum from '../src/components/Sum';\nimport SumWithCssAlias from 'components/SumWithCssAlias';\n// import SumWithAscii from 'components/SumWithAscii';\nimport DangMath from 'components/DangMath';\nimport App from 'components/App';\n\nimport { version } from '../package';\nimport markdownNotes from './componentNote1.md';\n\naddDecorator(withInfo);\n\nconst group = `Component (v${version})|`;\n\nstoriesOf(group + 'Sum', module)\n  // .addDecorator(withInfo)\n  .add('2+2 (default)', () => <Sum onClick={action('clicked')} />, {\n    notes: 'Hello',\n  })\n  .add('custom numbers', () => <Sum a={3} b={3} />)\n  .add('negative numbers', () => <Sum a={3} b={-2} />)\n  .add('negative numbers (=> 0)', () => <Sum a={3} b={-3} />)\n  .add('useImages', () => <Sum a={4} b={4} useImages />)\n  .add('useASCII', () => <Sum a={5} b={5} useASCII />);\n\nstoriesOf(group + 'Sum with alias', module)\n  .add('default logic', () => <SumWithCssAlias a={6} b={6} />)\n  .add('custom numbers (with notes)', () => <SumWithCssAlias a={7} b={7} />, {\n    // notes: 'A very simple example of addon notes'\n    notes: {\n      Intro: 'A very simple example of addon notes',\n      Design: markdownNotes,\n    },\n  });\n\nstoriesOf('Other|DangMath', module)\n  // .addDecorator(withInfo)\n  .add('simple usage', () => <DangMath a={8} b={8} c={16} />);\n\nstoriesOf('Other|App.Sum').add('2+2', () => <App.Sum />);\nstoriesOf('Other|App.SumWithCssAlias').add('2+2', () => <App.SumWithCssAlias />);\n",__ADDS_MAP__)).add("2+2",function(){return _ref10})}.call(this,__webpack_require__(169)(module))},660:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":300,"./nestedObjectAssign.js":300};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=660},812:function(module,exports,__webpack_require__){},813:function(module,exports,__webpack_require__){var content=__webpack_require__(814);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(341)(content,options);content.locals&&(module.exports=content.locals)},814:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(340)(!1)).push([module.i,".with-alias {\n    color: blue;\n    border: 1px blue dotted;\n}",""])},815:function(module,exports,__webpack_require__){},816:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=816},94:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(2),__webpack_require__(12),__webpack_require__(15),__webpack_require__(18),__webpack_require__(11),__webpack_require__(60),__webpack_require__(1),__webpack_require__(61),__webpack_require__(62),__webpack_require__(7),__webpack_require__(14),__webpack_require__(13);var react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__),prop_types__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(10),prop_types__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);__webpack_require__(343),__webpack_require__(813);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var _ref=react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h1",{className:"with-alias"},"Sum (w alias)"),SumWithCssAlias=function(_React$Component){function SumWithCssAlias(){var _getPrototypeOf2,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,SumWithCssAlias);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}(this,(_getPrototypeOf2=_getPrototypeOf(SumWithCssAlias)).call.apply(_getPrototypeOf2,[this].concat(args))),function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_assertThisInitialized(_this),"state",{}),_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(SumWithCssAlias,react__WEBPACK_IMPORTED_MODULE_12___default.a.Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(SumWithCssAlias,[{key:"render",value:function render(){var _this$props=this.props,a=_this$props.a,b=_this$props.b;return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"sum"},_ref,react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3",null,a," + ",b," = ",a+b))}}]),SumWithCssAlias}();SumWithCssAlias.displayName="SumWithCssAlias",SumWithCssAlias.propTypes={a:prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.number,b:prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.number},SumWithCssAlias.defaultProps={a:2,b:2},__webpack_exports__.a=SumWithCssAlias,SumWithCssAlias.__docgenInfo={description:"",methods:[],displayName:"SumWithCssAlias",props:{a:{defaultValue:{value:"2",computed:!1},type:{name:"number"},required:!1,description:""},b:{defaultValue:{value:"2",computed:!1},type:{name:"number"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SumWithCssAlias.jsx"]={name:"SumWithCssAlias",docgenInfo:SumWithCssAlias.__docgenInfo,path:"src/components/SumWithCssAlias.jsx"})}},[[357,1,2]]]);
//# sourceMappingURL=main.1831bf99d2d7dc6db31f.bundle.js.map