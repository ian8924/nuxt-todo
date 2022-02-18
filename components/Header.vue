<template>
    <header>
        <font-awesome-icon class="menu"
                           icon="bars"
                           style="font-size: 30px" />
    </header>
</template>

<script>
export default {
    name: "Header"
};
</script>

<style scoped>
header {
    width: 100%;
    height: 55px;
    background: #8dc8ff;
    display: flex;
    align-items: center;
    padding: 0 20px;
}
</style>