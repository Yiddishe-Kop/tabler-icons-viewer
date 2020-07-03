<template>
  <layout>
    <div class="flex items-center p-2 bg-gray-800 rounded-lg">
      <span class="px-3 py-1 text-sm font-bold bg-gray-900 rounded">/</span>
      <input
        v-model="search"
        type="text"
        placeholder="Search icons..."
        class="flex-1 px-3 bg-transparent outline-none"
      />
      <span class="px-3 py-1 text-sm font-bold bg-gray-900 rounded">/</span>
    </div>

    <section class="mt-12">
      <transition-group name="grid" class="grid grid-cols-6 gap-4 items-stretch justify-center">
        <div v-for="icon in filterdIcons" :key="icon" class="bg-gray-800 rounded p-2 text-center">
          <component :is="icon" class="my-8 text-white inline w-8" />
          <p class="text-gray-400 text-xs">{{ icon.replace('icon-', '') }}</p>
        </div>
      </transition-group>
    </section>
  </layout>
</template>

<script>
import Layout from "./layouts/Default.vue";

export default {
  name: "App",
  components: { Layout },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filterdIcons() {
      return this.$icons
        .filter(i => new RegExp(this.search, "i").test(i))
        .slice(0, 60);
    }
  }
};
</script>
