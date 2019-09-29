<template>
  <div class="container">
    <h1 class="indigo-text center-align">Add new Smoothie Recipe</h1>

    <div class="row">
      <div class="input-field col s12 m10 offset-m1 indigo-text ">
        <input id="title" v-model="title" type="text" class="validate">
        <label for="title">Smoothie Title</label>
      </div>

      <div v-for="(ingredient,i) of (ingredients)" :key="i" class="input-field col s12 m10 offset-m1 ">
        <input id="Ingredients" type="text" v-model="ingredients[i]" class="validate">
      </div>

      <div class="input-field col s12 m10 offset-m1 ">
        <input id="Ingredient" @keydown.enter="addIngredients()" v-model="currentIngredient" type="text" class="validate">
        <label for="Ingredient">Add an Ingredient</label>
      </div>

      <div class="col s12 modify-button-parent">
        <button class="btn pink  " @click="addingSmoothie()">ADD SMOOTHIE</button>
      </div>

    </div>


  </div>
</template>

<script>
    import db from '../firebase/init'

    export default {
        name      : 'home',
        components: {},
        data()
        {
            return {
                ingredients      : [],
                currentIngredient: '',
                id               : '',
                title            : ''
            }
        },
        methods   : {
            addIngredients()
            {
                this.ingredients.push(this.currentIngredient);
                this.ingredients       = Array.from(new Set(this.ingredients));
                this.currentIngredient = '';

                document.getElementById('Ingredient').focus();
            },
            addingSmoothie()
            {
                db.collection('smoothie').add({
                    ingredients:this.ingredients,
                    title:this.title,
                    slug:this.slug
                }).then(res => {
                  alert(res);
                  this.$router.push({name:'home'})
                }).catch(err => alert(err))
            }

        },
        computed  : {
            slug ()
            {
                return this.title.replace(/\s/ig, '-').toLocaleLowerCase();
            }
        }
    }
</script>

<style scoped>
  .container form {

  }

  .modify-button-parent {
    display: flex;
    justify-content: center;
  }

  .modify-button-parent button {

    margin-top: 30px;
  }

</style>
