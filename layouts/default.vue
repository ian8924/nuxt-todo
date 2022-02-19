<template>
    <div>
        <loading-mask />
        <div>
            <Header />
            <Nuxt />
        </div>
    </div>
</template>

<script>
export default {
    name: "default"
};
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>