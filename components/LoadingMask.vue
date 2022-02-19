<template>
    <div v-if="loading"
         class="loading">
        <font-awesome-icon icon="spinner"
                           class="spinner"
                           style="font-weight:700" />
    </div>
</template>

<script>
export default {
    name: "LoadingMask",
    computed: {
        loading() {
            return this.$store.getters.loading;
        }
    }
};
</script>

<style lang="scss" scoped>
.loading {
    width: 100%;
    height: 100vh;
    background: rgba(77, 77, 76, 0.3);
    position: fixed;
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    @keyframes rotate360 {
        to {
            transform: rotate(360deg);
        }
    }
    .spinner {
        animation: 2s rotate360 infinite linear;
        cursor: not-allowed;
        font-size: 30px;
    }
}
</style>