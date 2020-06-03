<template>
<p>
    logout
</p>
</template>

<script>
export default {
    mounted: async function () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
            name:'root'
        })
    }

}
</script>


<style scoped>

</style>
