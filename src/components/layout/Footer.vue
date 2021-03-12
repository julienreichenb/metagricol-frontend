<template>
    <div id="footer" class="text-center text-muted">
        <span class="my-1">
            <router-link class="text-muted" :to="$i18nRoute({ name: 'Home' })">
                LINK
            </router-link>
            <span class="font-weight-bold">·</span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            tKey: 'footer.',
        }
    },
}
</script>

<style lang="scss">
#footer {
    width: 100%;
    border-top: 1px solid theme-color-level("secondary", -7);
    background-color: theme-color("light");
}
</style>