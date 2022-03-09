<template>
    <div id="main">
        <posts-list :posts="posts"/>
    </div>
</template>

<script>
    import PostsList from "@/components/PostsList";
    import axios from "axios";
    export default {
        components: {PostsList},
        data() {
            return {posts: []}
        },
         mounted: async function () {
             await axios.get('https://jsonplaceholder.typicode.com/posts')
                 .then(result=> this.posts.push(...result.data))
        }
    }
</script>


<style>
</style>