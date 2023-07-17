<template>
    <p :class="['todo-item', todoProps.completed ? 'is-completed' : '']">
        <input type="checkbox" :checked="todoProps.completed">
        {{todoProps.title}}
        <button class="del-btn">Delete</button>
    </p>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['todoProps'],
}
</script>

<style>
.todo-item{
    background-color:#f4f4f4;
    margin: 0;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}

.is-completed{
    text-decoration: line-through;
}

.del-btn{
    background-color: #ff0000;
    color: aliceblue;
    border: none;
    cursor: pointer;
    float: right;
}
</style>