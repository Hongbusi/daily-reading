<template>
  <div id="app">
    Welcome to Hongbusi website.
    <router-view/>

    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer';
export default {
  name: 'App', 
  components: {
    Footer
  }
}
</script>
