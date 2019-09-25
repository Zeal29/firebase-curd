<template>
  <div class="">
    <nav class="nav-extended indigo">
      <div class=" nav-wrapper valign-wrapper" style="height: 100px">
        <router-link :to="{name:'home'}" class="brand-logo ml-3 title">Zeal Smoothies</router-link>

        <router-link :to="{name:'add-smoothie'}" class="btn-floating btn-large halfway-fab waves-effect waves-light pink pulse">
          <i class="material-icons">add</i>
        </router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
  nav > .nav-wrapper {
    padding: 0 20px;
  }

</style>
