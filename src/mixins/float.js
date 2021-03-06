import wepy from 'wepy'
export default class FloatMixin extends wepy.mixin {
    getProps() {
        return {
            float: {
                type: String,
                value: ''
            }
        }
    }

    getClass() {
        let floatClass = [...this._getFloat()]
        return floatClass.join(' ')
    }

    _getFloat() {
        let float = []
        if (this.data.float) {
            float.push('float-' + this.data.float)
        }
        return float
    }

}

