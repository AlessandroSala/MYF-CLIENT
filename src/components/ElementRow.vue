<template>
    <v-list-item>
        <v-list-item-content>{{title}}</v-list-item-content>
        <v-list-item-content>{{category}}</v-list-item-content>
        <v-list-item-content>{{type}}</v-list-item-content>
        <v-list-item-content>{{amonut}}</v-list-item-content>
        <v-list-item-content class="align-end"><v-btn icon><v-icon>delete</v-icon></v-btn></v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    props: [
        'title',
        'category',
        'type',
        'amount'

    ]
    
}
</script>

<style scoped>

</style>