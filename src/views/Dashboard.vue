
<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">

      <!-- All of the content for each page goes inside the container.-->

      <!-- <v-card >
        <v-layout row wrap class="pa-5">
        <v-flex xs12 md6>
          <v-btn outline block class="primary">1</v-btn>
        </v-flex>

        <v-flex xs12 md6>
          <v-btn outline block class="primary">2</v-btn>
        </v-flex>

        <v-flex xs4 md2>
          <v-btn outline block class="primary">3</v-btn>
        </v-flex>

        <v-flex xs4 md2>
          <v-btn outline block class="primary">4</v-btn>
        </v-flex>

        <v-flex xs4 md2>
          <v-btn outline block class="primary">5</v-btn>
        </v-flex>      
      </v-layout>-->

      <!--other justify props: justify-center justify-end justify-between-->
      <!-- <v-layout row wrap justify-space-around>
      <v-flex xs4 md3>
          <v-btn outline block class="success"></v-btn>
        </v-flex>

        <v-flex xs4 md3>
          <v-btn outline block class="success"></v-btn>
        </v-flex>
      </v-layout> -->

<!-- v-tooltip example -->
  <!-- <div class="text-center d-flex align-center">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >Button</v-btn>
      </template>
      <span>Tooltip</span>
    </v-tooltip> 
</div> -->

      <v-layout row class="mb-3"> <!--layout stands for row.-->

      <v-tooltip top color="grey">
         <template  v-slot:activator="{ on, attrs }">
        <v-btn small text color="grey" @click="sortBy('title')"  
          dark
          v-bind="attrs"
          v-on="on">
          <v-icon left small>person</v-icon>
          <span class="caption text-lowercase">By project name</span>
        </v-btn>
          </template> 
        <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top color="grey">
         <template  v-slot:activator="{ on, attrs }">
        <v-btn small text color="grey"  @click="sortBy('person')"
        dark
          v-bind="attrs"
          v-on="on">
          <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase">By person</span>
        </v-btn>
        </template>
        <span>Sort projects by person</span>
        </v-tooltip>
       
      </v-layout>

      <v-card text v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip
                small
                :class="`${project.status}`"
                class="white--text my-2 caption"
              >{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from '@/firebase-config'

export default {
  data() {
    return {
      projects: []
    };
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1) //a and b are a pair of consecutive items in the array. if a < b, return -1 (keep the order). otherwise, a > b, return 1 (change the order). performs this function on every consecutive pair of objects in the array until it's sorted correctly.
    }
  },
  // Retrieves data from Firestore DB - Firestore Real-time Listeners. Using life-cycle hook.
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
  // Doesn't work
  // computed: {
  //   projectStatus() {
  //     if (this.project.status === "complete") return "green";
  //     else if (this.project.status === "ongoing") return "orange";
  //     return "tomato"
  //   }
  // }
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete{
  color: #3cd1c2;
}
.v-chip.ongoing{
  background: #ffaa2c;
}
.v-chip.overdue{
  background: #f83e70;
}
</style>