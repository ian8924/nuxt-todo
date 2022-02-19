<template>
    <div class="to-do-item">
        <div class="left"
             :class="{'checked':obj.checked}">
            <input type="checkbox"
                   @click="toggleChecked"
                   v-model="obj.checked">
            <div class="description">
                {{ obj.text }}
            </div>
        </div>
        <div class="right">
            <font-awesome-icon @click="remove"
                               icon="trash-can"
                               class="trash" />
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: {
        obj: {
            require: true,
            default() {
                return {
                    checked: false,
                    id: 0,
                    text: ""
                };
            }
        }
    },
    methods: {
        toggleChecked() {
            this.$emit("toggleChecked", { id: this.obj.id, val: !this.obj.checked });
        },
        remove() {
            this.$emit("delete", this.obj.id);
        }
    }
};
</script>

<style lang="scss" scoped>
.to-do-item {
    display: flex;
    justify-content: space-between;
    height: 60px;
    .left {
        display: flex;
        align-items: center;

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