Vue.component('modal', {
    data(){
      return{
        title: 'Modal',
        display: false,
      }
    },
    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{title}}</h3>
            <slot name="body"></slot>
            <footer>
              <button v-on:click="closeModal">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`,
    methods: {
      closeModal(){
        this.diaplay = !this.display
        this.$emit('close', this.display)
      }
   
    }
  })
  
  new Vue({
    el: '#app',
    data(){
      return{
        showModal: false,
      }
    },
    methods:{
      toogleModal(showModal){
        this.showModal = showModal
        return this.showModal 
      }
    }
  })