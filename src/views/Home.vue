<template >
  <div class="" >
    <div class="container" >

      <div v-if="dataIsLoading" class="loading-bar-style" >
        <div class="preloader-wrapper big active " >
          <div class="spinner-layer spinner-blue" >
            <div class="circle-clipper left" >
              <div class="circle" ></div >
            </div >
            <div class="gap-patch" >
              <div class="circle" ></div >
            </div >
            <div class="circle-clipper right" >
              <div class="circle" ></div >
            </div >
          </div >

          <div class="spinner-layer spinner-red" >
            <div class="circle-clipper left" >
              <div class="circle" ></div >
            </div >
            <div class="gap-patch" >
              <div class="circle" ></div >
            </div >
            <div class="circle-clipper right" >
              <div class="circle" ></div >
            </div >
          </div >

          <div class="spinner-layer spinner-yellow" >
            <div class="circle-clipper left" >
              <div class="circle" ></div >
            </div >
            <div class="gap-patch" >
              <div class="circle" ></div >
            </div >
            <div class="circle-clipper right" >
              <div class="circle" ></div >
            </div >
          </div >

          <div class="spinner-layer spinner-green" >
            <div class="circle-clipper left" >
              <div class="circle" ></div >
            </div >
            <div class="gap-patch" >
              <div class="circle" ></div >
            </div >
            <div class="circle-clipper right" >
              <div class="circle" ></div >
            </div >
          </div >
        </div >
      </div >


      <div class="shop-cart-container" >




        <div v-for="smoothie of smoothies" :key="smoothie.id" class="card hoverable" >

          <button @click="deleteSmoothies(smoothie.id)" class="btn-flat delete-icon btn-floating  " >
            <i class="material-icons grey-text " >delete</i >
          </button >

          <div class="card-content" >
            <h2 class="indigo-text" >{{smoothie.title}}</h2 >
            <ul class="ingridents " >
              <li v-for="ingredient of smoothie.ingredients" :key="ingredient" class="chip" >{{ingredient}}</li >
            </ul >
            <router-link tag="button" :to="{name:'edit-smoothie',params:{slug:smoothie.slug}}" class="btn-floating halfway-fab pink btn-large " >
              <i class="material-icons" >edit</i >
            </router-link >
          </div >
        </div >
      </div >

    </div >

  </div>
</template >

<script >
  import db from '../firebase/init'

  export default {
    name      : 'home',
    components: {},
    data () {
      return {
        dataIsLoading: true,
        smoothies    : []
      }
    },

    methods: {
      deleteSmoothies: function (id) {

        db.collection('smoothie').doc(id).delete().then(() => {
          this.smoothies.forEach((smoothe, i) => {
            if (smoothe.id === id) {
              this.smoothies.splice(i, 1)
            }
          })
        })

      }
    },


    created () {

      db.collection('smoothie').get().then(snapshot => {
        let arr = snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })

        this.smoothies.push(...arr)
        this.dataIsLoading = false
      })
    }

  }
</script >

<style scoped >

  .container .card
  {
    margin-top : 30px;
  }


  .shop-cart-container
  {
    display               : grid;
    grid-template-columns : 1fr 1fr 1fr;
    grid-gap              : 30px;
    margin-top            : 40px;
    margin-bottom         : 5rem;
  }


  .delete-icon
  {
    position : absolute;
    top      : 5px;
    right    : 5px;
  }


  .delete-icon:hover
  {
    background : #ebebeb;
  }


  .loading-bar-style
  {
    position  : fixed;
    top       : 0;
    left      : 0;
    transform : translate(50%, 45%);
    height    : 100vh;
    width     : 100vw;
  }


</style >

