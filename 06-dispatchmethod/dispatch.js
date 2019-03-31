Vue.config.devtools = true;
/*method 1 with direc access don't work*/
/*app = new Vue(
    {
        el: '#app',
        data: {
            messages : []
        },
        events: {
            addMessage: function (message) {
                this.messages.push(message);
            }
        },
        components: {
            'add': {
                template: "#addForm",
                data: function () {
                    return {
                        msg: ''
                    }
                },
                methods: {
                    addMsg: function () {
                        this.messages.push(this.msg);
                        this.msg = '';
                    }
                }

            }
        }
    }
);*/
/*method 2 with dispatch in child objectand "event" in parent object*/
/*
app = new Vue(
    {
        el: '#app',
        data: {
            messages : []
        },
        events: {
            addMessage: function (message) {
                this.messages.push(message);
            }
        },
        components: {
            'add': {
                template: "#addForm",
                data: function () {
                    return {
                        msg: ''
                    }
                },
                methods: {
                    addMsg: function () {
                        this.$dispatch('addMessage', this.msg);
                        this.msg = '';
                    }
                }

            }
        }
    }
);*/
/*method 3 with @method in html and "method" in parent object*/
app = new Vue(
    {
        el: '#app',
        data: {
            messages : []
        },
        methods: {
            addMessage: function (message) {
                this.messages.push(message);
            }
        },
        components: {
            'add': {
                template: "#addForm",
                data: function () {
                    return {
                        msg: ''
                    }
                },
                methods: {
                    addMsg: function () {
                        this.$dispatch('add-this', this.msg);
                        this.msg = '';
                    }
                }

            }
        }
    }
);
