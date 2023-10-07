// TreeNode.js
// 这个模块负责表示树的节点。
export default class TreeNode {
  constructor(data) {
    this.id = data.id || "";
    this.label = data.label || "";
    this.type = data.type || "";
    this.parent = null;
    this.children = [];
    this.symbolType = data.symbolType || 0;
    this.checked = data.checked || false;
    this.disabled = data.disabled || false;
  }
}
