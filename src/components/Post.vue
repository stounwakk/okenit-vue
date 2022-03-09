<template>
    <div class="post">
        <div class = "post-item" v-model:post="post" @click.stop="$router.push({path:`/post/${post.id}`})">
            <div class="id">Айди: {{post.id}}</div>
            <div class="title">Тилт: {{post.title}}</div>
            <div class="body">Содержимое: {{post.body}}</div>
            <div class="userId" @click.stop="$router.push(`/users/${post.userId}`)">Айди пользователя: {{post.userId}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"post",
        props:{
            post:{
                type:Object,
            },
        },
    }
</script>

<style scoped>
    .post {
        padding: 15px;
        border: 2px solid teal;
        min-width: 100%;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>