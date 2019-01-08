<template>
    <div>
        <input v-model="text" placeholder="create post" type="text">
        <button v-on:click="createPost">post</button>
        <p class="error" v-if="error">{{error}}</p>
        <div class="post" 
            v-for="(post, index) in posts"
            v-bind:item="post"
            v-bind:index="index"
            v-bind:key="post._id"
            v-on:dblclick="deletePost(post._id)">
        <p class="text">{{post.text}}</p>
        </div>
    </div>
</template>

<script>
import aboutfront from '../aboutfront';

export default {
name:"about",
data() {
    return {
        posts:[],
        text: [],
        error: ''    
    }
},  
async created(){
    try{
      this.posts = await aboutfront.getabout();
    }catch(err){
      this.error = err.message;

    }
  },
  methods:{
    async createPost  (){
      await aboutfront.insertabout(this.text);
      this.posts = await aboutfront.getabout();
    },
    async deletePost(id){
      await aboutfront.deleteabout(id);
      this.posts = await aboutfront.getabout();
    }
  }  
}
</script>

<style>

</style>
