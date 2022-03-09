<template>
    <div class="UsersPosts">
        <h1>Посты пользователя {{this.userId}}</h1>
        <post v-for="post in posts" :post="post"/>
    </div>
</template>

<script>
    import axios from "axios";
    import Post from "@/components/Post";
    export default {
        components: {Post},
        data() {
            return {
            posts: [],
            userId: this.$route.params.userId
            }
        },
        mounted: async function () {
            await axios.get(`https://jsonplaceholder.typicode.com/posts/?userId=${this.userId}`)
                .then(result=> this.posts.push(...result.data))
        }
    }
</script>

<style scoped>

</style>