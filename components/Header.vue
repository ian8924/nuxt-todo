<template>
    <header>
        <!-- menu -->
        <font-awesome-icon class="menu"
                           icon="bars" />
    </header>
</template>

<script>
export default {
    name: "Header"
};
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    height: 55px;
    background: #8dc8ff;
    display: flex;
    align-items: center;
    padding: 0 20px;
    .menu {
        font-size: 30px;
        color: #fff;
    }
}
</style>