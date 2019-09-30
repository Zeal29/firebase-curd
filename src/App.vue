<template >
  <div class=""  >
    <nav class="nav-extended indigo" >
      <div class=" nav-wrapper valign-wrapper" style="height: 100px" >
        <router-link :to="{name:'home'}" class="brand-logo ml-3 title" >Zeal Smoothies</router-link >

        <router-link :to="{name:'add-smoothie'}" class="btn-floating btn-large halfway-fab waves-effect waves-light pink pulse" >
          <i class="material-icons" >add</i >
        </router-link >
      </div >
    </nav >
    <router-view />


  </div >
</template >


<style >
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(hotpink, #8181e9);
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover
  {
    transition: background 1s;
    background: linear-gradient(#ff317b, #398bff);
  }
</style >


<style scoped >
  nav > .nav-wrapper
  {
    padding : 0 20px;
  }



</style >


<style >

  body{
    background: url("https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    background-size: cover;
    background-attachment: fixed;
    /*background-position: bottom;*/
    background-repeat: no-repeat;

    color: white;
  }



  /* label color */
  .input-field label {
    color: #fbfbfb;
  }
  /* label focus color */
  .input-field input[type=text]:focus + label {
    color: #f1f1f1;
  }
  /* label underline focus color */
  .input-field input[type=text]:focus {
    border-bottom: 1px solid #ffffff;
    box-shadow: 0 1px 0 0 #e5e5e5;
  }
</style >
