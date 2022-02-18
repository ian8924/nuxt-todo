<template>
    <div class="to-do-list">
        <div>
            <div class="title">
                ToDo List
            </div>
            <div class="list"></div>
        </div>

        <div class="input">
            <input type="text"
                   placeholder="請輸入要做的事">
            <button>
                <!-- logout -->
                <font-awesome-icon icon="add"
                                   style="font-weight:700" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ToDoList"
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
        font-size: 24px;
        font-weight: 700;
    }

    .input {
        width: 100%;
        display: flex;
        input {
            flex-grow: 1;
            margin-right: 20px;
            padding: 0 10px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            width: 35px;
            height: 35px;
            background: #8dc8ff;
            color: #fff;
            cursor: pointer;
            font-size: 20px;
            border: none;
            border-radius: 4px;
        }
    }
}
</style>