<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text slot="activator" class="success" v-bind="attrs" v-on="on">Add New Project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

          <!--Date-picker-->
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="formattedDate"
                label="Due Date"
                prepend-icon="event"
                readonly
                v-bind="attrs"
                v-on="on"
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due" @input="menu = false"></v-date-picker>
          </v-menu>

          <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loadingWheel">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
// import { format } from "date-fns"
// date-fns doesn't work
import moment from "moment";
import db from "@/firebase-config"; // @/ works the same as ../

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      menu: false,
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"],
      loadingWheel: false,
      dialog: false
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
          this.loadingWheel = true;
        console.log(this.title, this.content);
        const project = {
          title: this.title,
          content: this.content,
          due: moment(this.due).format("dddd, MMMM Do YYYY"),
          person: "Ryan Jacobo",
          status: "ongoing"
        };

        db.collection("projects")
          .add(project)
          .then(() => {
            console.log("added to db");
            this.loadingWheel = false;
            this.dialog = false;
            this.$emit('projectAdded')
          });
      }
    }
  },
  computed: {
    formattedDate() {
      //   return this.due ? format(this.due, "Do MMM  YYYY") : ""; // date-fns doesn't work
      return this.due ? moment(this.due).format("dddd, MMMM Do YYYY") : "";
    }
  }
};
</script>

<style>
</style>