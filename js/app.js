Vue.createApp({
    data() {
        return {
            valueInput: '',
            needDoList: [],
            completeDoList: []
        };
    },
    methods: {
        handlerInput(e) {
            this.valueInput = e.target.value;
        },
        addTask() {
            if (this.valueInput === '') {
                return
            };
            this.needDoList.push({
                title: this.valueInput,
                id: Math.random()
            });
            this.valueInput = ''
            this.localStor()
        },
        doCheck(index, type) {
            if (type === 'need') {
                const completeMask = this.needDoList.splice(index, 1);
                this.completeDoList.push(...completeMask)
                this.localStor()
            } else {
                const noCompleteMask = this.completeDoList.splice(index, 1);
                this.needDoList.push(...noCompleteMask)
                this.localStor()
            }
        },
        removeMask(index, type) {
            const toDoList = type === 'need' ? this.needDoList : this.completeDoList;
            toDoList.splice(index, 1)
            this.localStor()
        },
        removeStorage() {
            localStorage.removeItem("needDoList");
            localStorage.removeItem("completeDoList");
            window.location.reload();
        },
        localStor() {
            localStorage.setItem("needDoList", JSON.stringify(this.needDoList));
            localStorage.setItem("completeDoList", JSON.stringify(this.completeDoList));
        }
    },
    created() {
        this.needDoList = JSON.parse(localStorage.getItem("needDoList") || '[]')
        this.completeDoList = JSON.parse(localStorage.getItem("completeDoList") || '[]')
    }
}).mount('#app');