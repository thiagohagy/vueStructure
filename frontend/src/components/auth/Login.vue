<template>
  <div>
    Login
    <input type="text" v-model='login' class="form-control">
    <br>
    <input type="text" v-model='password' class="form-control">
  </div>
</template>


<script>
  export default {
    data: () => {
      return {
        login: 'admin1',
        password: 'admin'
      }
    },
    mounted() {
      axios.get('/').
      then( (reponse) => {
        console.log(response);
      }).
      catch (error => {
        console.log(error)
      });
    }
  }
</script>
