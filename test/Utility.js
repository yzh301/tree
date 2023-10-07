// 通用的工具函数
class Utility {
  /**
   * 深度克隆对象。
   * @param {Object} obj - 要克隆的对象。
   * @param hash
   * @returns {Object} - 克隆后的对象。
   */
  static deepClone(obj, hash = new WeakMap()) {
    // 深拷贝逻辑
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
  static uniq(arr) {
    // 数组去重逻辑
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
  static empty(ele) {
    // 清空 DOM 元素逻辑
    while (ele.firstChild) {
      ele.removeChild(ele.firstChild);
    }
  }
  /**
   * 执行动画效果。
   * @param {number} duration - 动画持续时间（毫秒）。
   * @param {Object} callback - 动画回调函数对象。
   */
  static animation(duration, callback) {
    // 动画逻辑
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
}
const Utility = new Utility();

export default Utility;
