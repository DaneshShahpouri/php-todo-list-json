
const { createApp } = Vue;

createApp({
    data() {
        return {
            list: [],
            newEl: '',
        }
    },

    methods: {
        getArray() {
            axios.get('server.php').then(response => {
                console.log(response);
                for (let i = 0; i < response.data.length; i++) {
                    this.list.push(response.data[i])
                }
            });

        },


        toggleDone(index) {
            if (this.list[index].isDone == true) {
                this.list[index].isDone = false;
            } else {
                this.list[index].isDone = true;
            }
        },

        deleteEl(index) {
            this.list.splice(index, 1)
        }

    },

    mounted() {
        this.getArray();
    }
}).mount('#app')