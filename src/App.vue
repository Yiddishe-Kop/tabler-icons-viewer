<template>
  <layout>
    <search-bar v-model="search" />

    <section class="mt-12">
      <transition-group
        name="grid"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-stretch justify-center"
      >
        <icon v-for="icon in filterdIcons" :key="icon" :icon="icon" class="icon-card" />
      </transition-group>
    </section>

    <div class="flex justify-center my-10" :class="{'mb-96': search}">
      <button
        @click="loadMore"
        class="border-2 border-gray-700 hover:border-brand py-1 px-4 rounded-full text-gray-400 text-sm transition"
      >Show More...</button>
    </div>
  </layout>
</template>

<script>
import Layout from "@/layouts/Default.vue";
import SearchBar from "@/components/SearchBar";
import Icon from "@/components/Icon";

export default {
  name: "App",
  components: { Layout, SearchBar, Icon },
  data() {
    return {
      search: "",
      maxResults: 50
    };
  },
  computed: {
    filterdIcons() {
      return this.$icons
        .filter(i => new RegExp(this.search, "i").test(i))
        .slice(0, this.maxResults); // only show max 50 at once - for fast performance
    }
  },
  watch: {
    search(newVal) {
      if (!newVal) return;
      this.maxResults = 40;
    }
  },
  methods: {
    loadMore() {
      this.maxResults += 40;
    }
  },
  created() {
    window.addEventListener("keydown", e => {
      if (e.keyCode != 191) return;
      e.preventDefault();
      document.getElementById("search-bar").focus();
    });
  }
};
</script>
