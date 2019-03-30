/**
 * Created by admirer on 3/30/19.
 */
Vue.config.devtools = true;

app = new Vue(
    {
        el: '#app',
        data: {
            sortValue: 'time',
            reverse: 1,
            searchString: '',
            searchFields: ['title', 'time'],
            courses: [
                {
                    title: "Learn PHP",
                    difficulty : "Advanced",
                    time : "05:20:00",
                    complete: false
                },
                {
                    title: "Learn Javascript",
                    difficulty : "Beginner",
                    time : "07:50:30",
                    complete: true
                },
                {
                    title: "Learn Vuejs",
                    difficulty : "Advanced",
                    time : "02:10:45",
                    complete: false
                }
            ]
        },
        methods: {
            sortBy: function (value) {
                this.reverse *= (this.sortValue == value) ? -1 : 1;
                this.sortValue = value;
            }
        },
        filters: {
            reverseLetters: function (value) {
                return value.split('').reverse().join('');
            },
            isComplete: function (values) {
                return values.filter(function (value) {
                    return  value.complete;
                })
                
            }
            
        }
    }
);