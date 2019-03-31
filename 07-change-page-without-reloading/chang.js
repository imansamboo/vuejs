app = new Vue(
    {
        el: '#app',
        data: {
            component: 'homepage'
        },
        methods: {
            changeComponent: function (value) {
                this.component = value;                
            }
                
        },
        components:{
            homepage: {
                template: '#homepage'
            },
            aboutus:{
                template: '#aboutus'
            }
        }
    }
);