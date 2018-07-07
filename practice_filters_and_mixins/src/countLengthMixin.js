export const countLengthMixin = {
    computed: {
        countLength() {
            return this.text + ' (' + this.text.length + ')'
        }
    }
}