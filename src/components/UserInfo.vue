<template>
    <div class="user-info">
        <h2>О пользвателе:</h2>
        <div class="user-attribute">Айди: {{user.id}}</div>
        <div class="user-attribute">Имя: {{user.name}}</div>
        <div class="user-attribute">Ник: {{user.username}}</div>
        <div class="user-attribute">Мыло: {{user.email}}</div>
        <div class="user-attribute">Адрес: {{user.address.city + ", " + user.address.street}}</div>
        <div class="user-attribute">Пфоне: {{user.phone}}</div>
        <div class="user-attribute">Сайт: {{user.website}}</div>
        <div class="user-attribute">Место работы: {{user.company.name}}</div>
    </div>
</template>

<script>
    export default {
        name:"user-info",
        props:{
            user:{
                type:Object,
            },
        },
    }
</script>

<style scoped>
    .user-info {
        padding: 15px;
        border: 2px solid teal;
        min-width: 100%;
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
</style>