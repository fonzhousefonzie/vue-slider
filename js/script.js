const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

const appVue = new Vue({
    el: "#app",
    data: {
        slidesList: slides,
        posted: slides[0],
        id: 0,
        photoInterval: null,
    },
    methods: {
        goUp(){
            if(this.id > 0){
                this.id--;
            } else {
                this.id = 4;
            }
            this.posted = slides[this.id];
        },
        goDown(){
            if(this.id < 4){
                this.id++;
            } else {
                this.id = 0;
            }
            this.posted = slides[this.id];
        },
        active(i){
            this.posted = this.slidesList[i];
            this.id = i;
        },
        selected(i){
            if(i === this.id){
                return "active";
            };
        },
        changeAfter3Seconds(){
            const th = this;
            this.photoInterval = setInterval(function(){
                if(th.id < 4){
                    th.id++;
                    th.posted = slides[th.id];
                } else {
                    th.id = 0;
                    th.posted = slides[th.id];
                };
             }, 3000);
        },
        pauseAutoplay(){
            clearInterval(this.photoInterval);
        }
    },
    
    mounted(){
        this.changeAfter3Seconds()
        
    }
});
