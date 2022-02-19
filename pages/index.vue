<template>
    <div class="dashbroad">
        <todo-list />
    </div>
</template>

<script>
export default {
    head: {
        title: "HandsUP"
    },
    layout: "default",
    name: "IndexPage"
};
</script>
<style scoped>
.dashbroad {
    min-height: 100vh;
    background: #f8f8f8;
    padding-top: 70px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
}
</style>
