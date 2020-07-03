<template>
  <div class="flex items-center p-2 bg-gray-800 rounded-lg focus-within:shadow-outline">
    <icon-search class="w-5 mx-2 text-gray-500" />
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      type="text"
      :placeholder="`Search ${$icons.length} icons...`"
      class="flex-1 px-3 bg-transparent outline-none"
      id="search-bar"
    />
    <span class="px-3 py-1 text-sm font-bold bg-gray-900 rounded">/</span>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    value: String
  }
};
</script>

<style>
</style>
