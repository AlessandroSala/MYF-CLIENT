<template>
<v-container>
    <v-card class="mt-2 mx-auto" max-width="">
        <v-card flat class="pt-1 pa-4">
        <p class="display-3 mx-auto text-center ">
            How to use this website
        </p>
        <v-carousel
            cycle
            hide-delimiter-background
            show-arrows-on-hover
        >
            <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            >
            <v-sheet
                :color="colors[i]"
                height="100%"
            >
                 <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        
          <div class="display-3">{{ slide.title }} <br> <v-responsive :aspect-ratio="16/9" max-width="800px">
      <p class="display-1"> {{slide.content}} </p></v-responsive></div>
        </v-row>
            </v-sheet>
            </v-carousel-item>
        </v-carousel>
        </v-card>
        <v-card flat >
            <v-card-title>
                The Designer
            </v-card-title>
        </v-card>
    </v-card>
</v-container>
</template>

<script>
export default {
    data: function() {
        return {
            colors: [
            'indigo',
            'warning',
            'pink darken-2',
            'red lighten-1',
            'deep-purple accent-4',
            ],
            slides: [
                {
                    title: 'Track your expenses',
                    content: 'Be thoughtful and manage wisely your money to achieve your goals'
                },
                {
                    title: 'First',
                    content: 'cfdasfdasf asd fdas f da sfs asf dasf ads as as fds '
                },
                {
                    title: 'First',
                    content: 'c'
                },
                {
                    title: 'First',
                    content: 'c'
                },
                {
                    title: 'First',
                    content: 'c'
                },
            ],
        }
    }
}
</script>


<style scoped>

</style>
