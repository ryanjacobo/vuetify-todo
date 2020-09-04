<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">

      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content class="grey--text">
           
              <div class="font-weight-bold">due by {{ project.duedate }}</div>
              <div>{{ project.content }}</div>
          
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Ryan Jacobo",
          duedate: "date",
          status: "ongoing",
          content:
            "Mollit pariatur esse aliquip et incididunt aliqua Lorem labore qui fugiat deserunt eiusmod et et."
        },
        {
          title: "Code up the homepage",
          person: "Brad Pitt",
          duedate: "date",
          status: "complete",
          content:
            "Mollit sit mollit reprehenderit consectetur et ullamco consequat adipisicing."
        },
        {
          title: "Design video thumbnail",
          person: "Batman",
          duedate: "date",
          status: "overdue",
          content: "Deserunt dolor duis in est ex et et ipsum anim in eiusmod."
        },
        {
          title: "Create a community forum",
          person: "Spider-man",
          duedate: "date",
          status: "ongoing",
          content:
            "Duis reprehenderit in excepteur mollit veniam cupidatat occaecat consectetur incididunt consequat dolore."
        }
      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Ryan Jacobo'
      })
    }
  }
};
</script>
