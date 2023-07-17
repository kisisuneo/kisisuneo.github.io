<template>
  <div>    
        <TodoItem v-for="todo in todos" v-bind:key="todo.id" :todoProps="todo"></TodoItem>    
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import TodoItem from "./TodoItem.vue"
export default {
    name: 'TodosPage',
    components: {TodoItem},
    setup(){
        const todos = ref([
            {
                id: 1,
                title: 'Job 1',
                completed: true
            },
            {
                id: 2,
                title: 'Job 2',
                completed: true
            },
            {
                id: 3,
                title: 'Job 3',
                completed: false
            }
        ])
        return{
            todos: todos
        }
    }
}
</script>

<style>

</style>