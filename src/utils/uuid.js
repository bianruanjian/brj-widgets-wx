/**
 * 参考自 https://github.com/dojo/core 的 uuid 模块
 * 
 * Returns a v4 compliant UUID.
 *
 * @returns {string}
 */
export default function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}