<template>
    <div class ="form">
        <form class="form" type="text" @submit.prevent>
            <h2>Создать комментарий</h2>
            <input v-bind:value = "comment.name" @input="comment.name = $event.target.value" class="input" type="text" placeholder="Название модер уберет">
            <input v-bind:value = "comment.body" @input="comment.body = $event.target.value" class="input" type="text" placeholder="Содержимое модер уберет">
            <button class = "btn" @click.prevent="createNewComment">
                Насрать комментарий
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        name:'vue-form',
        data(){
            return {
                comment:{
                  name:'',
                  body:''
                },
            }
        },
        methods:{
            createNewComment() {
                this.comment.id=Date.now()
                this.$emit('create',this.comment)
                this.body = ''
                this.name = ''
            }
        }
    }
</script>

<style scoped>
    .btn {
        padding: 10px 15px;
        background: none;
        color: teal;
        border: 1px solid teal;
    }
    .form{
        display: flex;
    }
</style>