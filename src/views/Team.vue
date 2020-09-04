<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container fluid class="my-5"> <!--v-container keeps the content/body in the middle of the page. fluid makes the side margins smaller-->
        
        <v-layout row wrap>
            <v-flex class="ma-4" xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                <v-card color="grey lighten-4" >
                    <v-responsive class="pa-4 text-center"> <!--class="text-xs-center" not working-->
                        <v-avatar size="100" class="grey lighten-2">
                            <img :src="person.avatar"> 
                        </v-avatar>
                    </v-responsive>

                    <v-card-text class="text-center">
                        <div class="subheading">{{ person.name }}</div>
                        <div class="grey--text">{{ person.role }}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn flat class="grey lighten-2">
                            <v-icon small left>message</v-icon>
                            <span>message</span>
                        </v-btn>
                    </v-card-actions>
                </v-card> 
            </v-flex>
        </v-layout>

    </v-container>
  </div>
</template>

<script>
export default {
  data() {
      return {
      team: [
          { name: 'Ryan Jacobo', role: 'Senior SW Engineer', avatar: '/avatar-1.jpg' },
          { name: 'Tony Starks', role: 'Web Developer', avatar: '/avatar-2.jpg' },
          { name: 'Bruce Wayne', role: 'Front End Developer', avatar: '/avatar-3.jpg' },
          { name: 'Bruce Lee', role: 'Back End Developer', avatar: '/avatar-4.jpg' },
          { name: 'Jennifer Aniston', role: 'Database Developer', avatar: '/avatar-5.jpg' }
        ]
      }
  }
}
</script>
