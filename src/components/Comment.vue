<template>
    <div class="comment-list">
        <h2>Комментарии:</h2>
        <div class = "comment-item" v-for="comment in comments">
            <div class="id">Айди: {{comment.id}}</div>
            <div class="name">Тилт: {{comment.name}}</div>
            <div class="body">Содержимое: {{comment.body}}</div>
            <div class="usersEmail">Мыло пользователя: {{comment.email}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"comments",
        props:{
            comments:{
                type:Array,
            },
        },
    }
</script>

<style scoped>
    .comment-item {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
</style>