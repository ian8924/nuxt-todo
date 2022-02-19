<template>
    <div class="to-do-item">
        <div class="left"
             :class="{'checked':inputData.checked}">
            <input type="checkbox"
                   @change="edit"
                   v-model="inputData.checked">
            <div class="description"
                 @dblclick="openEdit">
                <!-- 雙擊進行編輯 -->
                <div v-click-outside="edit"
                     style="min-height:25px">
                    <textarea ref="textarea"
                              v-if="isEdit"
                              class="edit-input"
                              :rows="1"
                              v-model="inputData.text"
                              @blur="edit" />
                    <div v-else>
                        {{ obj.text }}
                    </div>
                </div>
                <!-- show create time -->
                <div class="time">
                    {{ fromNow(obj.date) }} {{$t('created')}}
                </div>
            </div>
        </div>
        <!-- remove -->
        <div class="right">
            <font-awesome-icon @click="remove"
                               icon="trash-can"
                               class="trash" />
        </div>
    </div>
</template>

<script>
import moment from "moment";
import ClickOutside from "vue-click-outside";

export default {
    name: "TodoItem",
    directives: {
        ClickOutside
    },
    props: {
        obj: {
            require: true,
            default() {
                return {
                    checked: false,
                    id: 0,
                    text: "",
                    date: ""
                };
            }
        }
    },
    watch: {
        obj: {
            deep: true,
            handler(val) {
                this.inputData = { ...val };
            }
        }
    },
    data() {
        return {
            isEdit: false,
            inputData: {
                checked: false,
                id: 0,
                text: "",
                date: ""
            },
            rows: 1
        };
    },
    mounted() {
        this.inputData = { ...this.obj };
    },
    methods: {
        edit() {
            this.isEdit = false;
            this.$emit("edit", { ...this.inputData });
        },
        remove() {
            this.$emit("delete", this.obj.id);
        },
        fromNow(val) {
            return moment(val).fromNow();
        },
        openEdit() {
            this.isEdit = true;
        }
    }
};
</script>

<style lang="scss" scoped>
.to-do-item {
    display: flex;
    justify-content: space-between;
    line-break: anywhere;
    margin: 20px 0;
    padding-bottom: 20px;
    .left {
        flex-grow: 1;
        display: flex;
        align-items: center;
        margin-right: 20px;
        input[type="checkbox"] {
            appearance: none;
            background-color: #fff;
            margin: 0;
            font: inherit;
            color: currentColor;
            width: 1.15em;
            height: 1.15em;
            border: 0.15em solid currentColor;
            border-radius: 0.15em;
            transform: translateY(-0.075em);
            display: grid;
            place-content: center;
        }

        input[type="checkbox"]::before {
            content: "";
            width: 0.65em;
            height: 0.65em;
            transform: scale(0);
            transition: 120ms transform ease-in-out;
            box-shadow: inset 1em 1em $lightBlue;
            transform-origin: bottom left;
            clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        }

        input[type="checkbox"]:checked::before {
            transform: scale(1);
        }

        .description {
            margin-left: 20px;
            flex-grow: 1;
            .time {
                font-size: 12px;
                color: rgb(120, 114, 114);
            }
            .edit-input {
                width: 100%;
                outline: none;
                line-height: 25px;
                height: 25px;
                font-size: 16px;
                // border: none;
                resize: none;
            }
        }

        &.checked .description {
            color: $lightBlue;
        }
    }
    .right {
        display: flex;
        align-items: center;
        .trash {
            font-size: 25px;
            color: $red;
        }
    }
}
</style>