/**
 * Created by admirer on 3/30/19.
 */
Vue.config.devtools = true;
app = new Vue(
    {
        el: '#app',
        ready: function () {
            this.fetchEvents();
        },
        data: {
            event: {
                name: '',
                description: '',
                date: ''
            },
            events : [
                /*{
                 id: 1,
                 name: 'TIFF',
                 description: 'Toronto International Film Festival',
                 date: '2015-09-10'
                 },
                 {
                 id: 2,
                 name: 'The Martian Premiere',
                 description: 'The Martian comes to theatres.',
                 date: '2015-10-02'
                 },
                 {
                 id: 3,
                 name: 'SXSW',
                 description: 'Music, film and interactive festival in Austin, TX.',
                 date: '2016-03-11'
                 }*/
            ]
        },
        methods: {
            pushEvent: function () {
                $.post("api/events",
                    {
                        name : this.event.name,
                        description : this.event.description,
                        date : this.event.date
                    }
                ).done(function () {
                    if(this.event.name)
                        this.events.push(this.event);
                    this.event = {
                        name: '',
                        description: '',
                        date: ''
                    };
                }.bind(this))
            },
            removeEvent: function (event) {
                if(confirm("Are you sure?")){
                    $.post("api/events/" + event.id, {
                        _method: 'delete'
                    }).done(function () {
                        this.events.$remove(event);
                    }.bind(this))
                }
            },
            fetchEvents: function () {
                $.get("api/events").done(function (events) {
                    console.log(events);
                    this.$set('events', events);
                }.bind(this))
            }

        }

    }
);
