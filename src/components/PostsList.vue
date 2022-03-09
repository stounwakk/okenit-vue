<template>
    <div class="postList">
        <post v-for="post in posts" :post="post"/>
    </div>
</template>

<script>
    import Post from "@/components/Post";
    export default {
        name: 'posts-list',
        components: {Post},
        props:{
            posts:{
                type:Array,
            },
        }
    }
</script>

<style scoped>

</style>