<template>
  <div ref="stickyBar" class="z-20 pt-4 sticky-bar">
    <div
      class="flex items-center p-2 transition bg-gray-800 border-2 border-transparent rounded-lg bar focus-within:shadow-outline"
    >
      <icon-search class="w-5 mx-2 text-gray-500" />
      <input
        :value="value"
        @input="$emit('input', $event.target.value)"
        type="text"
        :placeholder="`Search ${$icons.length} icons...`"
        class="flex-1 px-3 bg-transparent outline-none"
        id="search-bar"
      />
      <span class="px-3 py-1 text-sm font-bold bg-gray-900 border-2 border-gray-600 rounded">/</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    value: String
  },
  mounted() {
    // detect when search-bar becomes sticky - and add a orange border
    const searchBar = this.$refs.stickyBar;
    const observer = new IntersectionObserver(
      ([e]) => {
        e.target.classList.toggle("isSticky", e.intersectionRatio < 1);
      },
      { threshold: [1] }
    );
    observer.observe(searchBar);
  }
};
</script>

<style lang="scss">
.sticky-bar {
  position: sticky;
  top: -1px;
  margin-top: 1px;

  &.isSticky .bar {
    @apply border-brand;
  }
}
</style>
