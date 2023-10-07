/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-09-18 17:58:44
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-09-28 11:12:07
 * @FilePath: \新建文件夹 (2)\test\TreeApp.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import TreeData from "./TreeData";
// import TreeRenderer from "./TreeRenderer";
// import TreeActions from "./TreeActions";
// import data from "./data";
import TreeData from "./TreeData.js";
import TreeRender from "./TreeRender.js";
import TreeAction from "./TreeActions.js";
import data from "./data.js";
class TreeApp {
  static defaultOptions = {
    selectMode: "checkbox", // 选择模式，可选值：single, checkbox
    values: [], // 初始选中的值
    disables: [], // 初始禁用的值
    closeDepth: null, // 关闭节点时，关闭的深度
    buttonContainerData: data.buttonContainerData,
  };
  /**
   * 构建树结构
   * @param {string} container - 容器元素的 ID 或选择器。
   * @param {object} options - 配置树的选项。
   * @param {object|Array} options._originalData - 生成树的数据。
   */
  constructor(container, options) {
    this.container = container;
    this.options = Object.assign({}, TreeApp.defaultOptions, options);
    this.treeData = new TreeData();
    this.treeRender = new TreeRender(this.container);
    this.treeAction = new TreeAction(this.treeData, this.treeRender, this.options);
    this.init(options._originalData);
  }

  init(data) {
    this.treeData.init(data);
    this.treeAction.init();
    this.treeRender.render();
  }
}
const container = "#tree"; // 树容器的ID或其他选择器
const Tree = new TreeApp(container, {
  _originalData: data.originalData,
});
console.log("🚀 ~ file: TreeApp.js:39 ~ Tree:", Tree);
