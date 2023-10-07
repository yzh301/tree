const originalData = [
  {
    id: "root",
    label: "场景管理",
    type: "root",
    children: [
      {
        id: 6195165138,
        label: "默认图层组",
        type: "milStdLayerGroup",
        children: [
          {
            id: 1577735545,
            label: "默认图层",
            type: "milStdLayer",
            children: [
              {
                id: 1748113525,
                label: "yzh998",
                type: "symbol",
                symbolType: 0,
                children: [],
              },
              {
                id: 5002699450,
                label: "yzh99812121",
                type: "symbol",
                symbolType: 1,
                children: [],
              },
            ],
          },
          {
            id: 1577734545,
            label: "默认图层1",
            type: "milStdLayer",
            children: [
              {
                id: 17413525,
                label: "yzh998-1",
                type: "symbol",
                symbolType: 5,
                children: [],
              },
              {
                id: 500299450,
                label: "yzh998-2",
                type: "symbol",
                symbolType: 6,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 123165465,
        label: "啊啊啊",
        type: "milStdLayerGroup",
        children: [
          {
            id: 2452121545665,
            label: "默认图1但是层",
            type: "milStdLayer",
            children: [],
          },
        ],
      },
      {
        id: 9999999999,
        label: "新图层组",
        type: "milStdLayerGroup",
        children: [
          {
            id: 8888888888,
            label: "新图层",
            type: "milStdLayer",
            children: [
              {
                id: 7777777777,
                label: "新符号1",
                type: "symbol",
                symbolType: 2,
                children: [],
              },
              {
                id: 6666666666,
                label: "新符号2",
                type: "symbol",
                symbolType: 3,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
const buttonContainerData = {
  root: [
    {
      label: "新建图层组",
      clickHandler: function (e, data) {
        console.log(e, data);
      },
      className: "add",
      iconName: "icon-xinjian",
    },
    {
      label: "保存SML文件",
      clickHandler: function (data) {
        console.log(data);
      },
      className: "saveSMLFile",
      iconName: "icon-baocun",
    },
    {
      label: "打开SML文件",
      clickHandler: function (data) {
        console.log(data);
      },
      className: "openSMLFile",
      iconName: "icon-dakai",
    },
    {
      label: "清空所有组",
      clickHandler: function (data) {
        console.log(data);
      },
      className: "Clear",
      iconName: "icon-qingkong",
    },
  ],
  milStdLayerGroup: [
    {
      label: "新建图层",
      clickHandler: function (data) {
        console.log(data);
      },
      className: "AddMilStdLayerGroup",
      iconName: "icon-xinjian",
    },

    {
      label: "修改名称",
      clickHandler: function (e, data) {
        console.log("🚀 ~ file: tree.js:143 ~ e, data:", e, data);
      },
      className: "ChangeName",
      iconName: "icon-bianji",
    },

    {
      label: "清空组",
      clickHandler: function (data) {
        console.log(data);
      },
      className: "ClearGroup",
      iconName: "icon-qingkong",
    },
    {
      label: "删除组",
      clickHandler: function (data) {
        console.log(data);
      },
      className: "DeleteGroup",
      iconName: "icon-shanchu",
    },
  ],
  milStdLayer: [
    {
      label: "设为活动图层",
      clickHandler: function (data) {
        console.log(data);
      },
      className: "SetToActiveLayer",
      iconName: "icon-shezhi",
    },
    {
      label: "修改名称",
      clickHandler: function (e, data) {
        console.log(data);
      },
      className: "ChangeName",
      iconName: "icon-bianji",
    },
    {
      label: "清空图层",
      clickHandler: function (data) {
        console.log(data);
      },
      className: "ClearLayer",
      iconName: "icon-qingkong",
    },
    {
      label: "删除图层",
      clickHandler: function (data) {
        console.log(data);
      },
      className: "DeleteLayer",
      iconName: "icon-shanchu",
    },
  ],
  symbol: [
    {
      label: "修改名称",
      clickHandler: function (e, data) {
        console.log(data);
      },
      className: "ChangeName",
      iconName: "icon-bianji",
    },
    {
      label: "添加动画",
      clickHandler: function (data) {
        console.log(data);
      },
      className: "AddAnimation",
      iconName: "icon-tianjiadonghua",
    },
    {
      label: "删除jb",
      clickHandler: function (data) {
        console.log(data);
      },
      className: "deleteJb",
      iconName: "icon-shanchu",
    },
  ],
};

/**
 * 表示树节点的类。
 */
class TreeNode {
  /**
   * 创建一个树节点。
   * @param {string} id - 节点的唯一标识符。
   * @param {string} label - 节点显示的标签文本。
   * @param {string} type - 节点的类型或分类。
   * @param {string|null} [parentId=null] - 父节点的唯一标识符（可选）。
   */
  constructor(id, label, type, parentId = null) {
    this.id = id;
    this.label = label;
    this.type = type;
    this.parentId = parentId;
    this.children = [];
    this.status = 0;
    this.disabled = false;
  }

  /**
   * 将子节点添加到当前节点。
   * @param {TreeNode} childNode - 要添加的子节点。
   */
  addChild(childNode) {
    this.children.push(childNode);
  }

  /**
   * 从当前节点中移除指定的子节点。
   * @param {TreeNode} childNode - 要移除的子节点。
   */
  removeChild(childNode) {
    const index = this.children.indexOf(childNode);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }
}

/**
 * 深度克隆对象。
 * @param {Object} obj - 要克隆的对象。
 * @param hash
 * @returns {Object} - 克隆后的对象。
 */
function deepClone(obj, hash = new WeakMap()) {
  if (Object(obj) !== obj) return obj; // 基本数据类型直接返回
  if (hash.has(obj)) return hash.get(obj); // 避免循环引用
  const result = Array.isArray(obj) ? [] : {};
  // 记录到WeakMap中，以便处理循环引用
  hash.set(obj, result);
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = deepClone(obj[key], hash);
    }
  }
  return result;
}
/**
 * 从数组中移除重复项。
 * @param {Array} arr - 要处理的数组。
 * @returns {Array} - 移除重复项后的数组。
 */
function uniq(arr) {
  const map = {};
  return arr.reduce((acc, item) => {
    if (!map[item]) {
      map[item] = true;
      acc.push(item);
    }
    return acc;
  }, []);
}
/**
 * 清空HTML元素的子元素。
 * @param {HTMLElement} ele - 要清空的HTML元素。
 */
function empty(ele) {
  while (ele.firstChild) {
    ele.removeChild(ele.firstChild);
  }
}
/**
 * 执行动画效果。
 * @param {number} duration - 动画持续时间（毫秒）。
 * @param {Object} callback - 动画回调函数对象。
 */
function animation(duration, callback) {
  requestAnimationFrame(() => {
    callback.enter();
    requestAnimationFrame(() => {
      callback.active();
      setTimeout(() => {
        callback.leave();
      }, duration);
    });
  });
}
function collapseFromLeaf(tree, leafNode) {
  try {
    const nodeLiElement = tree.liElementsById[leafNode.parent.id];
    if (!nodeLiElement.classList.contains("treejs-node__close"))
      nodeLiElement.getElementsByClassName("treejs-switcher")[0].click();
  } catch (error) {
    return;
  }
  if (leafNode.hasOwnProperty("parent")) collapseFromLeaf(tree, leafNode.parent);
}

function expandFromRoot(tree, root) {
  const nodeLiElement = tree.liElementsById[root.id];
  if (nodeLiElement.classList.contains("treejs-node__close"))
    nodeLiElement.getElementsByClassName("treejs-switcher")[0].click();
  if (root.hasOwnProperty("children")) for (let child of root.children) expandFromRoot(tree, child);
}

class Tree {
  static defaultOptions = {
    selectMode: "checkbox", // 选择模式，可选值：single, checkbox
    values: [], // 初始选中的值
    disables: [], // 初始禁用的值
    beforeLoad: null, // 加载数据前执行的函数
    loaded: null, // 加载数据后执行的函数
    // url: null, // 数据源URL
    method: "GET", // 数据源请求方式
    closeDepth: null, // 关闭节点时，关闭的深度
  };
  /**
   * 将树的原始数据解析为树节点对象和相关索引。
   * @param {Array} data - 树的原始数据。
   * @returns {Object} - 包含树节点和索引的对象。
   */
  static parseTreeData(data) {
    const treeNodes = deepClone(data);
    const nodesById = {};
    const leafNodesById = {};
    const values = [];
    const disables = [];
    const walkTree = (nodes, parent) => {
      nodes.forEach((node) => {
        nodesById[node.id] = node;
        if (node.checked) values.push(node.id);
        if (node.disabled) disables.push(node.id);
        if (parent) node.parent = parent;
        if (node.children && node.children.length) {
          walkTree(node.children, node);
        } else {
          leafNodesById[node.id] = node;
        }
      });
    };
    walkTree(treeNodes);
    return {
      treeNodes, // 树节点
      nodesById, // 树节点id
      leafNodesById,
      defaultValues: values, // 默认值
      defaultDisables: disables, // 默认禁用
    };
  }
  /**
   * 创建表示树的根元素的div。
   * @returns {HTMLElement} - 根元素的div。
   */
  static createRootEle() {
    const div = document.createElement("div");
    div.classList.add("treejs");
    return div;
  }
  /**
   * 创建表示树的UL元素。
   * @returns {HTMLElement} - UL元素。
   */
  static createUlEle() {
    const ul = document.createElement("ul");
    ul.classList.add("treejs-nodes");
    return ul;
  }
  /**
   * 创建单独的某个li元素的button按钮
   * @param {object} node -节点参数
   * @param {string} label - 按钮名称
   * @param {function} clickHandler -按钮方法
   * @param {string} className -单独的按钮class name
   * @returns {HTMLElement} -BUTTON元素
   */
  static createButton(node, item) {
    const { label, clickHandler, className, iconName } = item;
    const button = document.createElement("button");
    button.classList.add("treejs-button", "icon", "iconfont", iconName, className);
    button.dataset.nodeId = node.id;
    button.dataset.label = label;
    button.dataset.type = node.type;
    button.title = label;

    const handleButtonClick = (e) => {
      const { target } = e;
      if (target.classList.contains("ChangeName")) {
        tree.handleEditButtonClick(target);
      } else if (
        target.classList.contains("DeleteGroup") ||
        target.classList.contains("DeleteLayer") ||
        target.classList.contains("deleteJb")
      ) {
        tree.handleDeleteButtonClick(target.dataset.nodeId, "delete");
      } else if (
        target.classList.contains("Clear") ||
        target.classList.contains("ClearGroup") ||
        target.classList.contains("ClearLayer")
      ) {
        tree.handleDeleteButtonClick(target.dataset.nodeId, "clear");
      } else if (target.classList.contains("add") || target.classList.contains("AddMilStdLayerGroup")) {
        tree.handleAddButtonClick(target.dataset.nodeId, "xxxx1", "milStdLayerGroup");
      } else if (target.classList.contains("SetToActiveLayer")) {
        tree.setDefaultLayer(target.dataset.nodeId);
      }
      clickHandler(e, node);
    };

    button.addEventListener("click", handleButtonClick);
    // button.innerHTML = label; // 临时使用名称为文本 添加按钮的图标
    return button;
  }
  /**
   * 创建表示树的LI元素。
   * @param {Object} node - 节点对象。
   * @param {boolean} closed - 是否关闭该节点。
   * @returns {HTMLElement} - LI元素。
   */
  static createLiEle(node, closed) {
    // 创建一个新的 <li> 元素用于节点
    const li = document.createElement("li");
    // 创建一个容器用于放置按钮
    const buttonContainer = document.createElement("span");
    buttonContainer.classList.add("treejs-button-container");
    // 为 <li> 元素添加基本的样式类
    li.classList.add("treejs-node");
    // 如果节点是关闭状态，则添加关闭状态的样式类
    if (closed) li.classList.add("treejs-node__close");
    // 如果节点有子节点，则添加一个切换按钮
    if (node.children && node.children.length) {
      const switcher = document.createElement("span");
      switcher.classList.add("treejs-switcher");
      li.appendChild(switcher);
    } else {
      // 如果节点没有子节点，添加一个占位符样式类
      li.classList.add("treejs-placeholder");
    }
    // 添加一个复选框按钮
    const checkbox = document.createElement("span");
    checkbox.classList.add("treejs-checkbox");
    li.appendChild(checkbox);
    // 创建节点的标签部分
    const label = document.createElement("span");
    label.dataset.nodeId = node.id; // 设置节点的ID
    label.classList.add("treejs-label");
    const text = document.createTextNode(node.label);
    label.appendChild(text);
    // 生成按钮
    buttonContainerData[node.type].forEach((item) => {
      buttonContainer.appendChild(this.createButton(node, item));
    });
    // 将标签添加到节点
    li.appendChild(label);
    li.appendChild(buttonContainer);
    // 将节点的 id 存储在自定义属性中
    li.nodeId = node.id;
    label.addEventListener("mouseenter", () => {
      label.classList.add("treejs-node-hover"); // 添加悬停样式
    });

    label.addEventListener("mouseleave", () => {
      label.classList.remove("treejs-node-hover"); // 移除悬停样式
    });
    return li;
  }
  /**
   * 创建一个新的树实例。
   *
   * @param {string} container - 容器元素的 ID 或选择器。
   * @param {Object} options - 配置树的选项。
   * @param {string} options.selectMode - 选择模式（'checkbox' 或 'radio'）。
   * @param {string[]} options.values - 选定节点的值。
   * @param {string[]} options.disables - 禁用节点的值。
   * @param {Function} options.beforeLoad - 在加载数据之前执行的回调函数。
   * @param {Function} options.loaded - 在加载数据之后执行的回调函数。
   * @param {string} options.url - 从中获取树数据的 URL。
   * @param {string} options.method - 获取数据的 HTTP 方法（默认为 'GET'）。
   * @param {number} options.closeDepth - 初始关闭的节点深度。
   * @param {Function} options.onChange - 节点选择发生变化时执行的回调函数。
   * @param {Function} options.onDeleteNode - 删除节点时执行的回调函数。
   * @param {Function} options.onClearNode - 清除节点时执行的回调函数。
   * @param {Function} options.onAddNode - 添加新节点时执行的回调函数。
   * @param {Function} options.onsetDefaultLayer - 选择节点图层时执行的回调函数。
   */
  constructor(container, options) {
    this.treeNodes = []; // 树的节点数据
    this.nodesById = {}; // 通过节点ID索引的节点对象
    this.leafNodesById = {}; // 通过叶子节点ID索引的节点对象
    this.liElementsById = {}; // 通过li元素索引的节点对象
    this.willUpdateNodesById = {}; // 初始化一个空对象，用于存储id和node的映射关系
    this.container = container;
    this.options = Object.assign({}, Tree.defaultOptions, options);
    // 初始化时没有节点处于编辑状态
    this.editingNode = null;
    this.defaultLayerId = null; // 默认图层的 ID，初始值为 null
    // 设置属性的getter和setter方法
    Object.defineProperties(this, {
      /**获取选中节点的ID数组。
       * @type {Array}
       */
      values: {
        get() {
          return this.getValues();
        },
        set(values) {
          return this.setValues(uniq(values));
        },
      },
      /**获取禁用节点的ID数组。
       * @type {Array}
       */
      disables: {
        get() {
          return this.getDisables();
        },
        set(values) {
          return this.setDisables(uniq(values));
        },
      },
      /**获取选中的节点对象数组。
       * @type {Array}
       */
      selectModes: {
        get() {
          let nodes = [];
          let nodesById = this.nodesById;
          for (let id in nodesById) {
            if (nodesById.hasOwnProperty(id) && (nodesById[id].status === 1 || nodesById[id].status === 2)) {
              const node = Object.assign({}, nodesById[id]);
              delete node.parent;
              delete node.children;
              nodes.push(node);
            }
          }
          return nodes;
        },
      },
      /**获取禁用的节点对象数组。
       * @type {Array}
       */
      disableNodes: {
        get() {
          let nodes = [];
          let nodesById = this.nodesById;
          for (let id in nodesById) {
            if (nodesById.hasOwnProperty(id) && nodesById[id].disabled) {
              let node = Object.assign({}, nodesById[id]);
              delete node.parent;
              nodes.push(node);
            }
          }
          return nodes;
        },
      },
    });
    // // 根据配置选项加载数据或者初始化树
    // if (this.options.url) {
    //   this.load((data) => {
    //     this.init(data);
    //   });
    // } else {

    // }
    this.init(this.options.data);
  }
  // load = function (callback) {
  //   const { url, method, beforeLoad } = this.options;
  //   ajax({
  //     url,
  //     method,
  //     success: (result) => {
  //       let data = result;
  //       if (beforeLoad) {
  //         data = beforeLoad(result);
  //       }
  //       callback(data);
  //     },
  //   });
  // };
  /**
   * 初始化树结构并加载数据。
   * @param {Array} data - 树的原始数据，通常是一个包含树节点信息的数组。
   */
  init(data) {
    let { treeNodes, nodesById, leafNodesById, defaultValues, defaultDisables } = Tree.parseTreeData(data);
    // 更新树的内部数据结构
    this.treeNodes = treeNodes;
    this.nodesById = nodesById;
    this.leafNodesById = leafNodesById;
    this.render(this.treeNodes);
    // 处理配置选项中的默认值和回调函数
    const { values, disables, loaded } = this.options;
    // 如果配置中指定了默认选中的节点ID数组，则设置这些节点为选中状态
    if (values && values.length) defaultValues = values;
    defaultValues.length && this.setValues(defaultValues);
    // 如果配置中指定了默认禁用的节点ID数组，则设置这些节点为禁用状态
    if (disables && disables.length) defaultDisables = disables;
    defaultDisables.length && this.setDisables(defaultDisables);
    // 执行加载完成后的回调函数
    loaded && loaded.call(this);
  }
  /**
   * 渲染树结构到指定的容器。
   * @param {Array} treeNodes - 树节点数据数组。
   */
  render(treeNodes) {
    // 创建表示树的根元素的div。
    const treeEle = Tree.createRootEle();
    // 构建整个树结构，并将根元素添加到树容器中
    treeEle.appendChild(this.buildTree(treeNodes, 0));
    // 绑定树的事件处理程序
    this.bindEvent(treeEle);
    // 获取指定容器的DOM元素，并清空其内容
    const ele = document.querySelector(this.container);
    empty(ele);
    // 将树的根元素添加到容器中
    ele.appendChild(treeEle);
  }
  /**
   * 递归构建树的节点结构并返回根UL元素。
   * @param {Array} nodes - 当前树节点数据数组。
   * @param {number} depth - 当前节点的深度。
   * @returns {HTMLElement} - 根UL元素包含了树的节点结构。
   */
  buildTree(nodes, depth) {
    // 创建表示树节点的UL元素。
    const rootUlEle = Tree.createUlEle();
    // 遍历当前节点数据数组
    if (nodes && nodes.length) {
      nodes.forEach((node) => {
        //创建表示树节点的LI元素。
        const liEle = Tree.createLiEle(node, depth === this.options.closeDepth - 1);
        // 将LI元素添加到通过节点ID索引的对象中
        this.liElementsById[node.id] = liEle;
        // 表示子树的UL元素，如果有子节点的话。
        let ulEle = null;
        // 如果当前节点有子节点，递归构建子树
        if (node.children && node.children.length) {
          ulEle = this.buildTree(node.children, depth + 1);
        }
        // 如果子树存在，则将UL元素添加为LI的子元素
        ulEle && liEle.appendChild(ulEle);
        // 将LI元素添加到根UL元素中
        rootUlEle.appendChild(liEle);
      });
    }
    // 返回包含树节点结构的根UL元素
    return rootUlEle;
  }
  /**
   * 为指定的元素绑定点击事件处理程序，用于处理树节点的点击事件。
   * @param {HTMLElement} ele - 要绑定事件的HTML元素。
   */
  bindEvent(ele) {
    ele.addEventListener(
      "click",
      (e) => {
        // 点击事件的目标元素
        const { target } = e;
        // 检查目标元素的类型，并根据类型调用相应的处理方法
        if (target.nodeName === "SPAN" && target.classList.contains("treejs-switcher")) {
          // 选择的三角小箭头
          this.onSwitcherClick(target);
        }
        if (target.nodeName === "SPAN" && target.classList.contains("treejs-checkbox")) {
          this.onCheckBox(target.parentNode);
        }
        if (target.nodeName === "SPAN" && target.classList.contains("treejs-label")) {
          this.onItemClick(target.parentNode.nodeId);
        }
      },
      false
    );
  }

  /**
   * 处理修改按钮点击事件
   * @param {HTMLElement} target - 被点击的元素
   */
  handleEditButtonClick(target) {
    // 从按钮的自定义数据属性中获取节点ID
    let targetID = target.dataset.nodeId;
    // 获取节点的标签元素
    let labelElement = tree.getLabelElementById(targetID, "treejs-label");
    // 进入编辑模式
    tree.enterEditMode(labelElement);

    // 添加失去焦点事件监听器，用于检测编辑完成
    labelElement.addEventListener(
      "blur",
      (e) => {
        const { target } = e;
        // 如果失去焦点的元素是编辑状态的标签
        if (target.nodeName === "SPAN" && target.classList.contains("treejs-editing")) {
          // 退出编辑模式，保存修改
          tree.exitEditMode(target, true);
        }
      },
      false
    );
  }
  /**
   * 处理树节点的点击事件，并根据节点ID执行相应操作。
   * @param {string} id - 节点的唯一标识符。
   */
  onItemClick(id, callback) {
    // 获取当前点击的节点对象
    const node = this.nodesById[id];
    console.log("🚀 ~ file: tree.js:621 ~ Tree ~ onItemClick ~ node:", node);
  }
  /**
   * 处理checkbox的点击事件
   * @param {*} target 目标
   */
  onCheckBox(target) {
    const { nodeId } = target;
    // 获取当前点击的节点对象
    const node = this.nodesById[nodeId];
    // 获取配置选项中的`onChange`回调函数
    const { onChange } = this.options;
    // 检查节点是否被禁用，如果未禁用，则执行相应操作
    if (!node.disabled) {
      // 设置节点的值
      this.setValue(nodeId);
      // 更新树节点的LI元素
      this.updateLiElements();
    }
    // 如果存在`onChange`回调函数，则调用它
    onChange && onChange.call(this);
  }
  /**
   * 设置指定节点的状态值，并更新相关节点状态。
   * @param {string} value - 节点的唯一标识符。
   */
  setValue(value) {
    // 获取当前节点对象
    const node = this.nodesById[value];
    // 如果节点不存在，直接返回
    if (!node) return;
    // 获取节点的先前状态
    const prevStatus = node.status;
    // 根据先前状态设置新的状态值，0表示未选中，2表示选中
    // 更新节点的状态
    node.status = prevStatus === 1 || prevStatus === 2 ? 0 : 2;
    // 标记将要更新的节点
    this.markWillUpdateNode(node);
    // 向上遍历并更新相关节点的状态
    this.walkUp(node, "status");
    // 向下遍历并更新相关节点的状态
    this.walkDown(node, "status");
  }
  /**获取选中节点的值*/
  getValues() {
    // 用于存储选中节点值的数组
    const values = [];
    // 遍历叶子节点，检查其状态，将选中节点的值添加到数组中
    for (let id in this.leafNodesById) {
      if (this.leafNodesById.hasOwnProperty(id)) {
        if (this.leafNodesById[id].status === 1 || this.leafNodesById[id].status === 2) {
          values.push(id);
        }
      }
    }
    // 返回包含选中节点值的数组
    return values;
  }
  /**
   * 获取具有指定类名的元素。
   * @param {string} id - 要查找元素的标识符。
   * @param {string} className - 要查找的类名。
   * @returns {HTMLElement|null} - 具有指定类名的元素，如果未找到则返回 null。
   */
  getLabelElementById(id, className) {
    const labelElement = this.liElementsById[id];
    if (labelElement) {
      const elementWithClass = labelElement.querySelector(`.${className}`);
      return elementWithClass;
    }
    return null;
  }
  /**
   * 设置选中节点的值，同时清空未选中节点的状态。
   * @param {string[]} values - 包含要设置为选中状态的节点值的数组。
   */
  setValues(values) {
    // 清空所有未选中节点的状态
    this.emptyNodesCheckStatus();
    // 遍历设置选中状态的节点值
    values.forEach((value) => {
      this.setValue(value);
    });
    // 更新树节点的LI元素
    this.updateLiElements();
    // 获取配置选项中的`onChange`回调函数
    const { onChange } = this.options;
    // 如果存在`onChange`回调函数，则调用它
    onChange && onChange.call(this);
  }
  /**
   * 禁用指定节点，同时更新相关节点的禁用状态。
   * @param {string} value - 节点的唯一标识符。
   */
  setDisable(value) {
    // 获取当前节点对象
    const node = this.nodesById[value];
    // 如果节点不存在，直接返回
    if (!node) return;
    // 获取节点的先前禁用状态
    const prevDisabled = node.disabled;
    // 如果先前未禁用，将节点禁用，并标记将要更新的节点
    if (!prevDisabled) {
      node.disabled = true;
      this.markWillUpdateNode(node);
      // 向上遍历并更新相关节点的禁用状态
      this.walkUp(node, "disabled");
      // 向下遍历并更新相关节点的禁用状态
      this.walkDown(node, "disabled");
    }
  }
  /**
   * 获取已禁用节点的值。
   * @returns {string[]} 包含已禁用节点值的数组。
   */
  getDisables() {
    // 用于存储已禁用节点值的数组
    const values = [];
    // 遍历叶子节点，检查其禁用状态，将已禁用节点的值添加到数组中
    for (let id in this.leafNodesById) {
      if (this.leafNodesById.hasOwnProperty(id)) {
        if (this.leafNodesById[id].disabled) {
          values.push(id);
        }
      }
    }
    // 返回包含已禁用节点值的数组
    return values;
  }
  /**
   * 设置节点的禁用状态，同时清空未禁用节点的状态。
   * @param {string[]} values - 包含要设置为禁用状态的节点值的数组。
   */
  setDisables(values) {
    // 清空所有未禁用节点的禁用状态
    this.emptyNodesDisable();
    // 遍历设置禁用状态的节点值
    values.forEach((value) => {
      this.setDisable(value);
    });
    // 更新树节点的LI元素
    this.updateLiElements();
  }
  /**
   * 清空所有未选中节点的状态，将它们的状态设置为未选中 (0)。
   */
  emptyNodesCheckStatus() {
    // 获取所有选中节点的信息
    this.willUpdateNodesById = this.getSelectedNodesById();
    // 遍历选中节点，并将未禁用的节点状态设置为未选中 (0)
    Object.values(this.willUpdateNodesById).forEach((node) => {
      if (!node.disabled) node.status = 0;
    });
  }
  /**
   * 清空所有未禁用节点的禁用状态，将它们的禁用状态设置为未禁用 (false)。
   */
  emptyNodesDisable() {
    // 获取所有已禁用节点的信息
    this.willUpdateNodesById = this.getDisabledNodesById();
    // 遍历已禁用节点，并将禁用状态设置为未禁用 (false)
    Object.values(this.willUpdateNodesById).forEach((node) => {
      node.disabled = false;
    });
  }
  /**
   * 获取所有已选中节点的信息，并以节点ID为键值构建一个对象。
   * @returns {Object} 包含已选中节点信息的对象，键为节点ID，值为节点对象。
   */
  getSelectedNodesById() {
    // 使用reduce函数将已选中节点构建为对象
    return Object.entries(this.nodesById).reduce((acc, [id, node]) => {
      if (node.status === 1 || node.status === 2) {
        acc[id] = node;
      }
      return acc;
    }, {});
  }
  /**
   * 获取所有已禁用节点的信息，并以节点ID为键值构建一个对象。
   * @returns {Object} 包含已禁用节点信息的对象，键为节点ID，值为节点对象。
   */
  getDisabledNodesById() {
    // 使用reduce函数将已禁用节点构建为对象
    return Object.entries(this.nodesById).reduce((acc, [id, node]) => {
      if (node.disabled) {
        acc[id] = node;
      }
      return acc;
    }, {});
  }
  /**
   * 更新树节点的LI元素，以反映节点的最新状态。
   */
  updateLiElements() {
    // 遍历将要更新的节点，并更新对应的LI元素
    Object.values(this.willUpdateNodesById).forEach((node) => {
      this.updateLiElement(node);
    });
    // 清空将要更新的节点列表
    this.willUpdateNodesById = {};
  }
  /**
   * 标记将要更新的节点，以便在更新树节点LI元素时使用。
   * @param {Object} node - 将要更新的节点对象。
   */
  markWillUpdateNode(node) {
    this.willUpdateNodesById[node.id] = node;
  }
  /**
   * 处理树节点展开/折叠操作的点击事件。
   * @param {HTMLElement} target - 点击的HTML元素。
   */
  onSwitcherClick(target) {
    const liEle = target.parentNode;
    const ele = liEle.lastChild;
    const height = ele.scrollHeight;
    if (liEle.classList.contains("treejs-node__close")) {
      // 执行折叠动画
      animation(150, {
        enter() {
          ele.style.height = 0;
          ele.style.opacity = 0;
        },
        active() {
          ele.style.height = `${height}px`;
          ele.style.opacity = 1;
        },
        leave() {
          ele.style.height = "";
          ele.style.opacity = "";
          liEle.classList.remove("treejs-node__close");
        },
      });
    } else {
      // 执行展开动画
      animation(150, {
        enter() {
          ele.style.height = `${height}px`;
          ele.style.opacity = 1;
        },
        active() {
          ele.style.height = 0;
          ele.style.opacity = 0;
        },
        leave() {
          ele.style.height = "";
          ele.style.opacity = "";
          liEle.classList.add("treejs-node__close");
        },
      });
    }
  }

  /**
   * 递归向上更新节点的状态。
   * @param {Object} node - 节点对象。
   * @param {string} changeState - 要更新的状态属性，可以是 "status" 或 "disabled"。
   */
  walkUp(node, changeState) {
    const { parent } = node;
    if (parent) {
      if (changeState === "status") {
        // 计算子节点状态的总和以更新父节点状态
        let pStatus = null;
        const statusCount = parent.children.reduce((acc, child) => {
          if (!isNaN(child.status)) return acc + child.status;
          return acc;
        }, 0);
        if (statusCount) {
          pStatus = statusCount === parent.children.length * 2 ? 2 : 1;
        } else {
          pStatus = 0;
        }
        if (parent.status === pStatus) return;
        parent.status = pStatus;
      } else {
        // 检查子节点是否都被禁用以更新父节点的禁用状态
        const pDisabled = parent.children.reduce((acc, child) => acc && child.disabled, true);
        if (parent.disabled === pDisabled) return;
        parent.disabled = pDisabled;
      }
      this.markWillUpdateNode(parent);
      this.walkUp(parent, changeState);
    }
  }
  /**
   * 递归向下更新节点的状态。
   * @param {Object} node - 节点对象。
   * @param {string} changeState - 要更新的状态属性，可以是 "status" 或 "disabled"。
   */
  walkDown(node, changeState) {
    if (node.children && node.children.length) {
      node.children.forEach((child) => {
        if (changeState === "status" && child.disabled) return;
        child[changeState] = node[changeState];
        this.markWillUpdateNode(child);
        this.walkDown(child, changeState);
      });
    }
  }
  /**
   * 更新节点的HTML元素的样式类，以反映节点的状态和禁用状态。
   * @param {Object} node - 节点对象。
   */
  updateLiElement(node) {
    const { classList } = this.liElementsById[node.id];
    // 更新节点状态的样式类
    switch (node.status) {
      case 0:
        classList.remove("treejs-node__halfchecked", "treejs-node__checked");
        break;
      case 1:
        classList.remove("treejs-node__checked");
        classList.add("treejs-node__halfchecked");
        break;
      case 2:
        classList.remove("treejs-node__halfchecked");
        classList.add("treejs-node__checked");
        break;
    }
    // 更新节点禁用状态的样式类
    switch (node.disabled) {
      case true:
        if (!classList.contains("treejs-node__disabled")) classList.add("treejs-node__disabled");
        break;
      case false:
        if (classList.contains("treejs-node__disabled")) classList.remove("treejs-node__disabled");
        break;
    }
  }
  /**
   * 折叠树中的所有节点，使所有叶子节点都处于折叠状态。
   */
  collapseAll() {
    const leafNodesById = this.leafNodesById;
    for (let id in leafNodesById) {
      const leafNode = leafNodesById[id];
      collapseFromLeaf(this, leafNode);
    }
  }

  /**
   * 修改节点的标签名称。
   * @param {string} nodeId - 要修改标签的节点的唯一标识符。
   * @param {string} newLabel - 新的标签名称。
   */
  updateNodeLabel(nodeId, newLabel) {
    // 获取要修改的节点对象
    const node = this.nodesById[nodeId];
    if (node) {
      // 更新节点的标签
      node.label = newLabel;
      // 更新节点的 LI 元素的标签内容
      if (this.liElementsById[nodeId]) {
        const labelElement = this.liElementsById[nodeId].querySelector(".treejs-label");
        if (labelElement) {
          labelElement.textContent = newLabel;
        }
      }

      // 更新 treeNodes 中相应节点的标签值
      this.updateTreeNodesLabel(this.treeNodes, nodeId, newLabel);

      // 重新渲染树结构
      this.render(this.treeNodes);
    }
  }

  // 递归更新 treeNodes 中节点的标签值
  updateTreeNodesLabel(nodes, nodeId, newLabel) {
    for (const node of nodes) {
      if (node.id === nodeId) {
        node.label = newLabel;
        return;
      }
      if (node.children && node.children.length > 0) {
        this.updateTreeNodesLabel(node.children, nodeId, newLabel);
      }
    }
  }

  // 进入编辑模式
  enterEditMode(labelElement) {
    // 检查是否已经有节点处于编辑状态
    if (this.editingNode) {
      // 如果有，先退出编辑模式
      this.exitEditMode(this.editingNode, true);
    }
    // 设置标签为可编辑状态
    if (!labelElement.classList.contains("treejs-editing")) {
      labelElement.contentEditable = true;
      labelElement.classList.add("treejs-editing");
      labelElement.focus();
      // 禁用点击事件
      labelElement.addEventListener(
        "click",
        (e) => {
          e.stopPropagation(); // 阻止点击事件冒泡
        },
        true // 使用捕获阶段以确保阻止点击事件
      );
      // 将当前节点设置为处于编辑状态
      this.editingNode = labelElement;
    }
  }

  // 退出编辑模式
  exitEditMode(labelElement, saveChanges) {
    // 中文、英文、数字但不包括下划线等符号
    const rsg = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;
    if (labelElement.textContent && rsg.test(labelElement.textContent)) {
      if (labelElement.classList.contains("treejs-editing")) {
        labelElement.contentEditable = false;
        labelElement.classList.remove("treejs-editing");
        if (saveChanges) {
          // 保存修改
          const nodeId = labelElement.dataset.nodeId;
          const newNodeLabel = labelElement.textContent;

          this.updateNodeLabel(nodeId, newNodeLabel);
        }
      }
      labelElement.removeEventListener("click", (e) => e.stopPropagation(), true);
    }
    this.bindEvent(labelElement);
    // 清除当前处于编辑状态的节点
    this.editingNode = null;
  }
  /**
   * 处理清空删除按钮点击事件。
   *
   * @param {string} nodeId - 要处理的节点的 ID。
   * @param {string} type - 操作类型，可以是 "delete"（删除） 或 "clear"（清除）。
   */
  handleDeleteButtonClick(nodeId, type) {
    const node = this.nodesById[nodeId];
    if (!node) {
      return;
    }

    if (type === "delete") {
      this.deleteNode(node);
    } else if (type === "clear") {
      this.clearNode(node);
    }
  }

  /**
   * 删除节点及其子节点。
   *
   * @param {TreeNode} node - 要删除的节点对象。
   */
  deleteNode(node) {
    const parent = node.parent;
    if (parent) {
      parent.children = parent.children.filter((child) => child.id !== node.id);
    } else {
      this.treeNodes = this.treeNodes.filter((n) => n.id !== node.id);
    }
    this.deleteChildNodes(node);
    this.updateLiElements();
    this.render(this.treeNodes);
    const { onDeleteNode } = this.options;
    onDeleteNode && onDeleteNode.call(this, node);
  }

  /**
   * 清除节点的子节点，保留当前节点。
   *
   * @param {TreeNode} node - 要清除子节点的节点对象。
   */
  clearNode(node) {
    this.deleteChildNodes(node);
    this.updateLiElements();
    this.render(this.treeNodes);
    const { onClearNode } = this.options;
    onClearNode && onClearNode.call(this, node);
  }

  /**
   * 删除指定节点的所有子节点。
   *
   * @param {TreeNode} node - 要删除子节点的节点对象。
   * @throws {Error} 如果节点无效，则抛出错误。
   * @private
   */
  deleteChildNodes(node) {
    // 检查节点是否有子节点
    if (node.children && node.children.length > 0) {
      // 遍历子节点
      for (let child of node.children) {
        // 递归调用 deleteChildNodes 方法来删除子节点及其子节点
        this.deleteChildNodes(child);
        // 删除节点及其对应的 LI 元素和相关数据
        delete this.nodesById[child.id];
        delete this.liElementsById[child.id];
      }
      // 清空节点的 children 属性，确保子节点被正确删除
      node.children = [];
    }
  }
  /**
   * 处理添加按钮点击事件
   * @param {string} parentId - 要添加子节点的父节点的 ID。
   * @param label
   * @param type
   * @param labelID
   */
  handleAddButtonClick(parentId, label, type, labelID) {
    const parentNode = this.nodesById[parentId];
    if (!parentNode) {
      return;
    }
    const newNode = this.createNode(label, type, labelID, parentId); // 创建一个新节点
    this.updateLiElements(); // 更新相关元素
    this.render(this.treeNodes); // 重新渲染树
    const { onAddNode } = this.options;
    onAddNode && onAddNode.call(this, newNode);
  }
  /**
   * 创建一个新的树节点。
   * @param {string} label - 节点的标签。
   * @param {string} type - 节点的类型。
   * @param {*} labelID - 标签id
   * @param {*} parentId -父节点id
   * @returns
   */
  createNode(label, type, labelID, parentId) {
    labelID = labelID || this.generateUniqueId();
    // 创建新节点对象
    const newNode = new TreeNode(labelID, label, type, parentId);

    // 设置父节点
    if (parentId) {
      const parentNode = this.nodesById[parentId];
      if (parentNode) {
        newNode.parent = parentNode;
        parentNode.children.push(newNode);
      } else {
        throw new Error(`Parent node with ID ${parentId} not found.`);
      }
    }
    // 添加新节点到节点字典
    this.nodesById[newNode.id] = newNode;
    return newNode;
  }
  /**
   * 生成唯一的节点 ID。
   * @returns {string} - 唯一的节点 ID。
   */
  generateUniqueId() {
    const timestamp = new Date().getTime().toString(16); // 使用时间戳的16进制表示
    const randomPart = Math.random().toString(16).slice(2, 10); // 使用随机数的16进制表示

    return timestamp + randomPart;
  }
  /**
   * 设置指定的图层为默认图层，并将其文本颜色更改为红色。
   * @param {string} layerId - 要设置为默认图层的图层的 ID。
   */
  setDefaultLayer(layerId) {
    if (this.defaultLayerId !== null) {
      // 如果已经存在默认图层，取消其红色文字颜色
      const defaultLayerLi = this.liElementsById[this.defaultLayerId];
      if (defaultLayerLi) {
        const labelElement = defaultLayerLi.querySelector(".treejs-label");
        if (labelElement) {
          labelElement.style.color = ""; // 清除文字颜色
        }
      }
    }
    // 更新默认图层 ID
    this.defaultLayerId = layerId;
    // 设置新的默认图层的文字颜色为红色
    const newDefaultLayerLi = this.liElementsById[layerId];
    if (newDefaultLayerLi) {
      const labelElement = newDefaultLayerLi.querySelector(".treejs-label");
      if (labelElement) {
        labelElement.style.color = "red"; // 设置文字颜色为红色
      }
    }
    const { onsetDefaultLayer } = this.options;
    onsetDefaultLayer && onsetDefaultLayer.call(this, layerId);
  }
  // 初始化拖拽和拖放事件
  initDragAndDrop() {
    const treeElement = document.querySelector(this.container);
    treeElement.addEventListener("dragstart", (e) => {
      const nodeId = e.target.dataset.nodeId;
      this.draggedNode = this.nodesById[nodeId];
    });

    treeElement.addEventListener("dragover", (e) => {
      e.preventDefault(); // 阻止默认的拖拽行为
      const nodeId = e.target.dataset.nodeId;
      this.dropTargetNode = this.nodesById[nodeId];
    });

    treeElement.addEventListener("drop", (e) => {
      e.preventDefault();
      if (this.draggedNode && this.dropTargetNode) {
        this.handleNodeDrop(this.draggedNode, this.dropTargetNode);
        this.draggedNode = null;
        this.dropTargetNode = null;
      }
    });
  }
  handleNodeDrop(draggedNode, dropTargetNode) {
    if (!draggedNode || !dropTargetNode) {
      return;
    }

    // 获取目标节点的父节点
    const parent = dropTargetNode.parent;

    if (parent) {
      // 找到目标节点在父节点的子节点数组中的索引
      const dropIndex = parent.children.indexOf(dropTargetNode);

      // 将拖拽节点从其原来的父节点中移除
      const draggedIndex = parent.children.indexOf(draggedNode);
      parent.children.splice(draggedIndex, 1);

      // 插入拖拽节点到目标节点的后面
      parent.children.splice(dropIndex + 1, 0, draggedNode);

      // 更新树的结构
      this.render(this.treeNodes);
    }
  }
}

// 使用示例
const tree = new Tree("#tree", {
  data: originalData,
});
console.log("🚀 ~ file: tree.js:973 ~ tree:", tree);
