<template>
    <header>
        <div class="left">
            <!-- menu -->
            <font-awesome-icon class="menu"
                               icon="bars" />
            <div class="title">
                HandsUP
            </div>
        </div>
        <div class="right">
            <!-- logout -->
            <font-awesome-icon class="menu"
                               icon="arrow-right-from-bracket" />
        </div>
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
    justify-content: space-between;
    position: fixed;
    top: 0;
    .menu {
        font-size: 30px;
        color: #fff;
    }
    .left {
        margin-left: 20px;
        display: flex;
        align-items: center;
        .title {
            margin-left: 20px;
            font-size: 30px;
            color: #fff;
        }
    }
    .right {
        margin-right: 20px;
    }
}
</style>