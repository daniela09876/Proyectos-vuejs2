new Vue({
    el: '#app',
  
    data () {
      return {
        courses: [],
        title: '',
        time: null,
      }
    },

    computed: {
        totalTime(){
            let temp = 0
            this.courses.forEach(p => {
                temp += parseInt(p.time)
            });
            return temp
        }
    },

    methods: {
        addCourse(){
            let newCourse = { title: this.title, time: this.time }
            this.courses.push(newCourse)
            this.title = ''
            this.time = null
        }
    }

})