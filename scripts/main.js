//图像切换器
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

//获取按钮
let myButton = document.querySelector("button");
//获取标题
let myHeading = document.querySelector("h1");
//设置个性化欢迎信息的函数
function setUserName() {
  const myName = prompt("Please enter your name.");
  //检查用户没有输入空名字
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

//初始化代码
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
//设置按钮的onclick事件处理器
myButton.onclick = function () {
  setUserName();
};

/*
    const myHeading = document.querySelector("h1");
    myHeading.textContent = "Hello world!";
*/

/* 变量：存储值的容器 
    let myVariable;
*/

/* 赋值 
    myVariable = "鲍勃";
*/

/* 变量可以存储不同数据类型的值
    字符串  文本序列，单引号或双引号括起来
    数字    数字周围没有引号
    布尔    真/假值，单词true/false是不需要引号的关键字
    数组    让你在单一引用中存储多个值的结构
    对象    可以是任何内容，JavaScript里的一切都是对象，对象能在变量中存储
*/

/* 运算符
    赋值        =       为变量赋值
    严格相等    ===      测试两个值是否相等以及是否是相同类型，返回布尔值
    非/不等于   !、!==   返回和先前逻辑上相反的值
*/

/* 函数
    alert("字符串参数")   在浏览器窗口内弹出一个警告框
*/

/* 创建函数
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
  */

/* 事件 选择元素->调用函数->传递要监听的事件和事件发生时要运行的函数
    //匿名函数
    document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼！");
});
    //箭头函数
    document.querySelector("html").addEventListener("click", () => {
    alert("别戳我，我怕疼！");
});
*/
