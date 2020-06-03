<template>
<v-container>
    <v-card class="mt-2 mx-auto" max-width="">
        <v-card flat class="pt-4 pa-4">
        <p class="display-2 mx-auto text-center font-weight-light">
            How to use this website
        </p>
        <v-divider class="mb-4"></v-divider>
        <v-carousel
    cycle
    height="400"
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
        <div>
          <div class="display-3 mx-auto px-6 text-center">{{ slide.title }}</div>
          <v-row>
              <v-col cols="8" offset="2">
          <div class="headline mx-auto text-center">{{ slide.content }}</div>
              </v-col>
          </v-row>
        </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
        </v-card>
        
    </v-card>
    <v-card class="mt-4">
        <p class="display-2 mx-auto pt-4 text-center font-weight-light">
            Credits
        </p>
        <v-divider class="mb-4"></v-divider>
        <div class="text-center">
            <div class=" mx-auto display-1 mb-0"> Designer </div>
            <p class="headline mb-0"> Alessandro Sala </p>
            <a><p class="subtitle-1"> ale9.sala@gmail.com </p></a>
        </div>
        <v-divider class="mb-4"></v-divider>
        <div class="text-center">
            <div class=" mx-auto title mb-0"> Additional Credits </div>
            <p class="subtitle mb-0"> Hosting - Niccolò Armellini </p>
        </div>
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
                    title: 'Track your income and expenses',
                    content: 'In the Operations section of the App you can add and remove all your earnings and expenses'
                },
                {
                    title: 'Note your Investments',
                    content: 'In the Investments section you can track your investments and automatically update your operations upon closing or selling'
                },
                {
                    title: 'Be aware of your money flow',
                    content: 'Through the Statistics section you have at your disposal different tables that always update with many statistics regarding your financial activity'
                },
                {
                    title: 'Graph your data',
                    content: 'Inside the app there are plenty of graphs that help you understand with a quick glance how your money is spent and earned'
                },
                {
                    title: 'Manage your business and personal accountability',
                    content: 'With the Tools section you have tools that help you make economic calculations'
                }, 
            ],
        }
    }
}
</script>


<style scoped>

</style>
