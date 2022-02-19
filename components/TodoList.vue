<template>
    <div class="to-do-list">
        <div>
            <div class="title">
                <div>
                    {{ $t('todo-title') }}
                </div>
                <!-- i18n 切換 -->
                <div class="i18n">
                    <nuxt-link :to="switchLocalePath('en')"
                               style="margin-right:20px">
                        English
                    </nuxt-link>
                    <nuxt-link :to="switchLocalePath('tw')">
                        中文
                    </nuxt-link>
                </div>
            </div>
            <!-- 列表 -->
            <div class="list">
                <todo-item v-for="(item) in list"
                           @delete="removeItem"
                           @edit="editItem"
                           :key="item.id"
                           :obj="item" />
            </div>
        </div>
        <!-- 輸入匡 -->
        <div class="input">
            <input v-model="inputText"
                   @keypress.enter="addItem"
                   type="text"
                   :disabled="loading"
                   :placeholder="$t('placeholder')">
            <!-- add btn-->
            <button @click="addItem">
                <font-awesome-icon v-if="!loading"
                                   icon="add"
                                   style="font-weight:700" />
                <font-awesome-icon v-else
                                   icon="spinner"
                                   class="spinner"
                                   style="font-weight:700" />
            </button>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
    name: "ToDoList",
    data() {
        return {
            inputText: "",
            loading: false
        };
    },
    watch: {
        "$i18n.locale": {
            immediate: true,
            handler(val) {
                if (val === "tw") {
                    moment.locale("zh-tw");
                } else {
                    moment.locale("en");
                }
            }
        }
    },
    computed: {
        ...mapGetters("todo", ["list"])
    },
    async mounted() {
        this.$store.commit("changeLoading", true);
        // get datas from cookie
        await this.getTodoApi();
        this.$store.commit("changeLoading", false);
    },
    methods: {
        async addItem() {
            if (!this.inputText) return;
            this.loading = true;
            await this.addTodoApi({
                checked: false,
                id: moment().valueOf(),
                text: this.inputText,
                createTime: moment().format(),
                updateTime: ""
            });
            this.loading = false;
            this.inputText = "";
        },
        async removeItem(id) {
            let yes = confirm("你確定刪除嗎？");
            if (yes) {
                this.$store.commit("changeLoading", true);
                await this.removeTodoApi(id);
                this.$store.commit("changeLoading", false);
            }
        },
        editItem(obj) {
            this.edit(obj);
        },
        ...mapMutations("todo", ["edit", "add", "remove"]),
        ...mapActions("todo", ["getTodoApi", "addTodoApi", "removeTodoApi"])
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
        display: flex;
        justify-content: space-between;
        .i18n {
            font-size: 16px;
        }
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
        @keyframes rotate360 {
            to {
                transform: rotate(360deg);
            }
        }
        .spinner {
            animation: 2s rotate360 infinite linear;
            cursor: not-allowed;
        }
    }
}
</style>