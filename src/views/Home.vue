<template>
  <div class="container">
    <div class="shop-cart-container">
      <div v-for="smoothie of smoothies" :key="smoothie.id" class="card hoverable">

        <button @click="deleteSmoothies(smoothie.id)" class="btn-flat delete-icon btn-floating  ">
          <i class="material-icons grey-text ">delete</i>
        </button>

        <div class="card-content">
          <h2 class="indigo-text">{{smoothie.title}}</h2>
          <ul class="ingridents ">
            <li v-for="ingredient of smoothie.ingredients" :key="ingredient" class="chip">{{ingredient}}</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data() {
            return {
                smoothies: [
                    {
                        id: '1', title: 'Zeal Brew', slug: 'zeal-brew', ingredients: ['banana', 'pineapple', 'coffee']
                    },
                    {
                        id: '2', title: 'Choco Mello', slug: 'choco-melo', ingredients: ['chocos', 'mellon', 'coffee']
                    },
                    {
                        id: '3',
                        title: 'Creme Cola',
                        slug: 'creme-cola',
                        ingredients: ['coco cola', 'pepsi', 'bon vitan']
                    }
                ]
            }
        },

        methods: {
            deleteSmoothies (id) {
                debugger
                this.smoothies.forEach((smoothe, i) => {
                    if (smoothe.id === id) {
                        this.smoothies.splice(i, 1)
                    }
                });

            }
        },

        computed: {}

    }
</script>

<style scoped>

  .container .card {
    margin-top: 30px;
  }

  .shop-cart-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 40px;
  }

  .delete-icon{
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .delete-icon:hover{
    background: #ebebeb;
  }

</style>
