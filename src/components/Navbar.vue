<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>New project successfully added!</span>
      <v-btn text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-app-bar text app>
      <!--v-app-bar has replaced v-toolbar starting in Vuetify 2.0.-->
      <!--v-app-bar-nav-icon has replaced v-toolbar-side-icon-->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!--dropdown menu-->
      <v-menu offset-y>
        <!--offsets in the y direction - shows the menu button when dropdown is open-->
        <template v-slot:activator="{ on, attrs }">
          <v-btn text color="grey lighten-2" v-bind="attrs" v-on="on">
            <!--text has replaced flat props-->
            <v-icon left>expand_more</v-icon>menu
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(link, text) in links" :key="text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
            <!--v-list-item-title replaced v-list-tile-title-->
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey lighten-2">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <!--align = vertical(column). justify = horizontal(row)-->
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.jpg" alt />
          </v-avatar>
          <p class="white--text subheading mt-1">Ryan Jacobo</p>
        </v-flex>
        <v-flex class="ma-5">
          <Popup @projectAdded="snackbar=true" />
        </v-flex>
      </v-layout>

      <v-list>
        <!-- <v-list-tile> has been replaced <v-list-item> -->
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-icon class="white--text">{{link.icon}}</v-icon>
          <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";

export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" }
      ],
      snackbar: false
    };
  }
};
</script>

<style>
</style>