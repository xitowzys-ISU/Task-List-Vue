// const vm = new Vue({
//     el: "#app",
//     data: {

//     },
//     methods: {
        
//     }
// })

Vue.createApp({
    data() {
        return {
            valueInput: '',
            needDoList: []
        };
    },
    methods: {
        handlerInput(e) {
            this.valueInput = e.target.value;
        },
        addTask() {
            if (this.valueInput === '') { return };
            this.needDoList.push({
                title:  this.valueInput,
                id: Math.random()
            });
            this.valueInput = ''
        }
    }
}).mount('#app');
