<template >
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


    <section v-else >
      <h1 class="white-text center-align" >{{isEditRoute ? 'Edit your' : 'Add new'}} Smoothie Recipe</h1 >

      <div class="row" >
        <div class="input-field col s12 m10 offset-m1 indigo-text " >
          <input id="title" autofocus ref="title" v-model="title" type="text" class="validate" >
          <label for="title" >Smoothie Title</label >
        </div >

        <div v-for="(ingredient,i) of (ingredients)" :key="i" class="input-field col s12 m10 offset-m1 " >
          <input id="Ingredients" type="text" v-model="ingredients[i]" class="validate" >
        </div >

        <div class="input-field col s12 m10 offset-m1 " >
          <input id="Ingredient" @keydown.enter="addIngredients()" v-model="currentIngredient" type="text" class="validate" >
          <label for="Ingredient" >Add an Ingredient</label >
        </div >

        <div v-if="!isEditRoute" class="col s12 modify-button-parent" >
          <button class="btn pink  " @click="addingSmoothie()" >ADD SMOOTHIE</button >
        </div >

        <div v-else class="col s12 modify-button-parent" >
          <button class="btn pink  " @click="editSmoothie()" >Edit SMOOTHIE</button >
        </div >

      </div >

    </section >


  </div >
</template >

<script >
  import db from '../firebase/init'

  export default {
    name      : 'home',
    components: {},
    data () {
      return {
        ingredients      : [],
        currentIngredient: '',
        id               : '',
        title            : '',

        dataIsLoading: true,
      }
    },
    created () {
      db.collection('smoothie')
        .where('slug', '==', this.editRoutSlug)
        .get()
        .then(result => {
          let data         = result.docs[0].data()
          this.ingredients = data.ingredients
          this.title       = data.title
          this.id          = result.docs[0].id

          this.dataIsLoading = false

          setTimeout(this.$refs['title'].focus, 1000)
        })
    },
    methods   : {
      editSmoothie () {
        db.collection('smoothie').doc(this.id).update({
          title      : this.title,
          ingredients: this.ingredients,
          slug       : this.slug,
        })
      },

      addIngredients () {
        this.ingredients.push(this.currentIngredient)
        this.ingredients       = Array.from(new Set(this.ingredients))
        this.currentIngredient = ''

        document.getElementById('Ingredient').focus()
      },
      addingSmoothie () {
        db.collection('smoothie').add({
          ingredients: this.ingredients,
          title      : this.title,
          slug       : this.slug
        }).then(res => {
          alert(res)
          this.$router.push({ name: 'home' })
        }).catch(err => alert(err))
      }

    },
    computed  : {
      slug () {
        return this.title.replace(/\s/ig, '-').toLocaleLowerCase()
      },

      isEditRoute () {
        return this.$route.name === 'edit-smoothie'
      },

      editRoutSlug () {
        return this.$route.params.slug || ''
      }
    }
  }
</script >

<style scoped >
  .container form
  {

  }


  .modify-button-parent
  {
    display         : flex;
    justify-content : center;
  }


  .modify-button-parent button
  {

    margin-top : 30px;
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


  /* label color */
  .input-field label
  {
    color : #fbfbfb;
  }


  /* label focus color */
  .input-field input[type=text]:focus + label
  {
    color : #f1f1f1;
  }


  /* label underline focus color */
  .input-field input[type=text]:focus
  {
    border-bottom : 1px solid #e2e2e2;
    box-shadow    : 0 1px 0 0 #e5e5e5;
  }


  .input-field input[type=text]
  {
    border-bottom : 1px solid #ffffff;
    box-shadow    : 0 1px 0 0 #e5e5e5;
  }


  input
  {
    color : white;
  }


  label
  {
    color : white;
  }
</style >
