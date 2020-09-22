new Vue({
    el: '#desafio',
    data: {
        age: 26,
        name: 'João Antonio Martins Filho',
        imageSource: 'https://v3.vuejs.org/logo.png'
    },
    methods: {
        ageTimes(numberToMultiply) {
            return this.age * numberToMultiply;
        },
        randNumber() {
            return Math.random();
        }
    }
})