// directives: {
//     /**
//      * checkSubmit 与 validate 相关联  inputValue 请注意不要在 el-xxx 上或别的标签方使用  tips定位非动态 引用时可以根据标签具体高度自行修改
//      * 指令解释：validate 负责单项 input 正则或判空验证  并在插入到dom后判断空时 添加 input-error(为checkSubmit提供服务)  验证时为每个 input 添加 inputValue 类 用于全部验证时候 通过className 获取这些输入框
//      *          checkSubmit 负责全部的 正则或非空验证  通过获取 inputValue  为每个元素添加 Events 监听事件 用于出发全部的blur 正则验证   如果没有input-error 则可以处理请求
//      */

//     // 修饰input框的指令
//     validate: {
//       inserted: function (el, validateStr) {
//         let isRequired = validateStr.value.indexOf("required") > -1;
//         console.log(validateStr.value);
//         el.children[0].classList.add("inputValue");
//         if (isRequired) {
//           if (!el.children[0].value || el.children[0].value === "") {
//             console.log();
//             el.children[0].classList.add("input-error");
//           }
//         }
//         // 将验证规则拆分为验证数组
//         let validateRuleArr = validateStr.value.split("|");
//         // 监听失去焦点的时候
//         el.children[0].addEventListener("blur", function (event) {
//           //失去焦点进行验证
//           console.log("why aaaa");
//           el.children[0].classList.remove("input-error");
//           checkedfun();
//         });
//         // 循环进行验证
//         function checkedfun() {
//           for (var i = 0; i < validateRuleArr.length; ++i) {
//             let requiredRegex = /^required$/; // 判断设置了required
//             let emailRegex = /^email$/; // 判断设置了email
//             let phoneRegex = /^phone$/; // 判断设置了 phone
//             let commonRegex = /^common$/; // 判断设置了 个人企业名称
//             // 判断设置了required
//             console.log(el.children[0].classList, "为数组");
//             if (requiredRegex.test(validateRuleArr[i])) {
//               if (!required()) {
//                 if (
//                   ![].slice
//                     .call(el.children[0].classList)
//                     .includes("input-error")
//                 ) {
//                   el.children[0].classList.add("input-error");
//                 }
//                 break;
//               } else {
//                 removeTips();
//               }
//             }
//             // 判断设置了email
//             if (emailRegex.test(validateRuleArr[i])) {
//               if (!email()) {
//                 if (
//                   ![].slice
//                     .call(el.children[0].classList)
//                     .includes("input-error")
//                 ) {
//                   el.children[0].classList.add("input-error");
//                 }
//                 break;
//               } else {
//                 removeTips();
//               }
//             }
//             // 判断设置了 phone
//             if (phoneRegex.test(validateRuleArr[i])) {
//               if (!phone()) {
//                 if (
//                   ![].slice
//                     .call(el.children[0].classList)
//                     .includes("input-error")
//                 ) {
//                   el.children[0].classList.add("input-error");
//                 }
//                 break;
//               } else {
//                 removeTips();
//               }
//             }
//             // 判断设置了 phone
//             if (commonRegex.test(validateRuleArr[i])) {
//               if (!region()) {
//                 if (
//                   ![].slice
//                     .call(el.children[0].classList)
//                     .includes("input-error")
//                 ) {
//                   el.children[0].classList.add("input-error");
//                 }
//                 break;
//               } else {
//                 removeTips();
//               }
//             }
//           }
//         }
//         // 验证是否是必填项
//         function required() {
//           if (el.value == "" || el.value == null) {
//             console.log("不能为空");
//             tipMsg("不能为空");
//             return false;
//           }
//           return true;
//         }
//         // 验证是否是邮箱
//         function email() {
//           let emailRule = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
//           if (!emailRule.test(el.value)) {
//             tipMsg("请输入正确的邮箱地址");
//             return false;
//           }
//           return true;
//         }
//         // 验证是否是手机号码
//         function phone() {
//           let phoneRule = /^[1][3,4,5,7,8][0-9]{9}$/;
//           if (!phoneRule.test(el.value)) {
//             tipMsg("请输入正确的手机号码");
//             return false;
//           }
//           return true;
//         }
//         // 验证个人企业名称字符是否含有<> 及length
//         function common() {
//           if (!commonRegex || getByteLength(val) > 100) {
//             tipMsg("字符中不能含有<>符号且字符长度不能超过100");
//             return false;
//           }
//           return true;
//         }
//         // 添加提示信息
//         function tipMsg(msg) {
//           console.log(el.offsetLeft, el.offsetTop, "---");
//           removeTips();
//           let tipsDiv = document.createElement("div");
//           let curDate = Date.parse(new Date());
//           tipsDiv.innerText = msg;
//           tipsDiv.className = "tipsDiv";
//           tipsDiv.id = curDate;
//           tipsDiv.style.position = "absolute";
//           tipsDiv.style.top = -el.children[0].offsetTop - 24 + "px";
//           //   tipsDiv.style.top = '-24' + "px";
//           tipsDiv.style.left = el.children[0].offsetLeft + "px";
//           //   document.body.appendChild(tipsDiv);
//           el.parentNode.style.position = "relative";
//           el.parentNode.appendChild(tipsDiv);
//           setTimeout(() => {
//             removeTips();
//           }, 1000);
//         }
//         // 移除提示信息
//         function removeTips() {
//           if (document.getElementsByClassName("tipsDiv")[0]) {
//             document.getElementsByClassName("tipsDiv")[0].remove();
//           }
//         }
//       },
//     },

//     checkSubmit: {
//       // 新的events构造函数 代替将要被废弃的 initEvent(document.create('event'))  主流浏览器几乎都在支持
//       //    var event = new Event('build');
//       // // Listen for the event.
//       // elem.addEventListener('build', function (e) { ... }, false);
//       // // Dispatch the event.
//       // elem.dispatchEvent(event);
//       inserted: function (el, validateStr, vNode) {
//         el.addEventListener("click", function (event) {
//           let elements = document.getElementsByClassName("inputValue");
//           // var evObj = document.createEvent("Event");
//           // evObj.initEvent("blur", true, true);
//           // console.log(elements[0], "是否获取到");
//           let newEvent = new Event("blur");
//           for (let element of elements) {
//             element.addEventListener("blur", function (e) {}, false);
//           }
//           setTimeout(() => {
//             for (let element of elements) {
//               element.dispatchEvent(newEvent);
//             }
//             let errorInputs = document.getElementsByClassName("input-error");
//             if (errorInputs.length === 0) {
//               vNode.context.submit();
//             }
//           }, 200);
//         });
//       },
//     },
//   },
// };

// <style lang="scss" scoped>
// >>> .tipsDiv {
//   min-width: 140px;
//   padding: 0px 10px;
//   text-align: center;
//   height: 34px;
//   line-height: 32px;
//   font-size: 14px;
//   color: #ff0000;
//   background: #ffeced;
//   border: 1px solid #fdbbbb;
//   box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
//   box-sizing: border-box;
//   border-radius: 6px;
//   &::after {
//     content: "";
//     width: 0px; /*  宽高设置为0，很重要，否则达不到效果 */
//     height: 0px;
//     border: 10px solid #ffeced;
//     // border-bottom-color: transparent; /* 设置透明背景色 */
//     // border-left-color: transparent;
//     // border-right-color: transparent;
//     overflow: hidden;
//     pointer-events: none;
//     -webkit-transform: rotate(45deg);
//     -mz-transform: rotate(45deg);
//     transform: rotate(45deg);
//     display: block;
//     position: absolute;
//     bottom: -5px;
//     left: 8px;
//   }
//   &::before {
//     content: "";
//     width: 0px; /*  宽高设置为0，很重要，否则达不到效果 */
//     height: 0px;
//     border: 10px solid #fdbbbb;
//     border-bottom-color: transparent; /* 设置透明背景色 */
//     border-left-color: transparent;
//     border-right-color: transparent;
//     display: block;
//     position: absolute;
//     bottom: -20px;
//     left: 8px;
//   }
// }
// </style>