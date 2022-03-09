<template>
    <div class="post-info">
        <h1>Про пост по фактам</h1>
        <post :post="post"/>
        <user-info :user="user"/>
        <comments :comments="comments"/>
        <vue-form @create="createComment"/>
    </div>
</template>

<script>
    import axios from  'axios';
    import Comments from "@/components/Comment";
    import Post from "@/components/Post";
    import UserInfo from "@/components/UserInfo";
    import VueForm from "@/components/CommentForm";
    export default {
        name:"post-info",
        components: {VueForm, UserInfo, Post, Comments},
        data() {
            return{
                user:{},
                comments:[],
                postId:this.$route.params.id,
                post:{},
            }
        },
        mounted: async function () {
            await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.postId}`)
            .then(result=> this.post = result.data)
            await axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${this.postId}`)
                    .then(result => {
                        this.comments.push(...result.data)
                    }).catch(e => console.log(e))
             await axios.get(`https://jsonplaceholder.typicode.com/users/${this.post.userId}`)
                 .then(result=> this.user = result.data)
         },
        methods:{
            createComment(comment) {
                this.comments.push(comment)
            }
        },
    }
</script>

<style scoped>
</style>