<template>
<v-card centered>
    <v-btn @click="logout">
        Logout
    </v-btn>
</v-card>
</template>

<script>
export default {
methods: {
    async logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
            name:'root'
        })
    }
}

}
</script>


<style scoped>

</style>
