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
export default { originalData, buttonContainerData };
