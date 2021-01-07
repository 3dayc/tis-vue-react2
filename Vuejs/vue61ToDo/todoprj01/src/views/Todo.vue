<style scoped>
body {
    text-align: center;
    background-color: #f6f6f8;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
    <div id="app">
        <!-- TodoHeader -->
        <TodoHeader></TodoHeader>

        <!-- TodoInput -->
        <TodoInput v-on:addTodo="addTodo"></TodoInput>

        <!-- TodoList -->
        <TodoList
            v-bind:todoItems="todoItems"
            v-on:doneToggle="doneToggle"
            v-on:removeTodo="removeTodo"
        ></TodoList>

        <!-- TodoFooter -->
        <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
    </div>
</template>


<script>
    import TodoHeader from "@/components/todo/TodoHeader.vue";
    import TodoInput from "@/components/todo/TodoInput.vue";
    import TodoList from "@/components/todo/TodoList.vue";
    import TodoFooter from "@/components/todo/TodoFooter.vue";

    export default { 
        /* pdtmc^2w */
        props: [] ,
        data: function() {
            return { 
                todoItems: [
                    { id: 1, todo: "영화보기", done: false },
                    { id: 2, todo: "주말 산책", done: true },
                    { id: 3, todo: "ES6 학습", done: false },
                    { id: 4, todo: "잠실 야구장", done: false }
                ],
            }
        },
        //template: ` `,
        methods: {
            doneToggle: function (id, index) {
                debugger;
                this.$data.todoItems[index].done = !this.$data.todoItems[index].done;
            },
            removeTodo: function (id, index) {
                debugger;
                this.$data.todoItems.splice(index, 1)
            },
            clearAll: function () { 
                this.$data.todoItems = []
            },
            addTodo: function(newTodoItem){
                
                // this.$data.todoItems에서 최대 id 값  찾기
                var maxObj = null;
                if (this.$data.todoItems.length > 0) {
                    maxObj = this.$data.todoItems.reduce(function (previtem, nextitem) {
                        return previtem.id > nextitem.id ? previtem : nextitem;
                    });
                    // maxObj = { id: 4, todo: "잠실 야구장", done: false }
                }
                else {
                    maxObj = { id: 0, todo: "", done: false }
                }

                var obj = {
                    id: maxObj.id + 1,
                    todo: newTodoItem,
                    done: false
                }

                // this.$data.todoItems 에 obj를 추가하시오. 
                //this.$data.todoItems[this.$data.todoItems.length] = obj;
                this.$set(this.$data.todoItems, this.$data.todoItems.length, obj);
            }
        },
        components: {
            "TodoHeader": TodoHeader,
            "TodoFooter": TodoFooter,
            "TodoList": TodoList,
            "TodoInput": TodoInput,    
        },
        computed: {
    
        },
        watch: {
    
        },
    }
</script>