<template>
    <div class="to-do-list">
        <div>
            <div class="title">
                ToDo List
            </div>
            <div class="list">
                <todo-item v-for="item in datas"
                           :key="item.text"
                           :obj="item" />
                {{datas}}
            </div>
        </div>
        <div class="input">
            <input v-model="inputText"
                   @keypress.enter="add"
                   type="text"
                   placeholder="請輸入要做的事">
            <!-- add btn-->
            <button @click="add">
                <font-awesome-icon icon="add"
                                   style="font-weight:700" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ToDoList",
    data() {
        return {
            inputText: "",
            datas: [
                {
                    checked: false,
                    id: 0,
                    text: ""
                }
            ]
        };
    },
    methods: {
        add() {
            if (!this.inputText) return;

            this.datas.push(this.inputText);
            this.inputText = "";
        }
    }
};
</script>

<style lang="scss" scoped>
.to-do-list {
    width: 80%;
    background: #fff;
    padding: 30px 33px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
        font-size: $titleSize;
        font-weight: 700;
        margin-bottom: 30px;
    }
    .input {
        width: 100%;
        display: flex;
        input {
            flex-grow: 1;
            margin-right: 20px;
            padding: 0 10px;
            outline: none;
            border: 1px solid $gray;
            border-radius: 4px;
        }
        button {
            width: 35px;
            height: 35px;
            background: $lightBlue;
            color: #fff;
            cursor: pointer;
            font-size: 20px;
            border: none;
            border-radius: 4px;
        }
    }
}
</style>