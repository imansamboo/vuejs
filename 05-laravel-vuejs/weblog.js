/**
 * Created by admirer on 3/30/19.
 */
Vue.config.devtools = true;
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {

        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.
        xhr.open(method, url, true);

    } else if (typeof XDomainRequest != "undefined") {

        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url);

    } else {

        // Otherwise, CORS is not supported by the browser.
        xhr = null;

    }
    return xhr;
}
url = 'http://127.0.0.1:8000/api/events';
var xhr = createCORSRequest('GET', url);
if (!xhr) {
    throw new Error('CORS not supported');
}
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
            pushEvent: function (event) {
                if(this.event.name)
                    this.events.push(this.event);
                this.event = {
                    name: '',
                    description: '',
                    date: ''
                };
            },
            removeEvent: function (event) {
                if(confirm("Are you sure?"))
                    this.events.$remove(event);
            },
            fetchEvents: function () {
                $.get("http://localhost/iman/05-laravel-vuejs/backend/public?method=index").done(function (events) {
                    console.log(events);
                    this.$set('events', events);
                }.bind(this))
            }

        }

    }
);
