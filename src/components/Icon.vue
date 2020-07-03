<template>
  <div
    @click="copy"
    @keydown.enter="copy"
    @keydown.space.prevent="copy"
    class="icon-card"
    tabindex="0"
  >
    <component :is="icon" class="icon" ref="icon" />
    <p class="caption">{{ copied ? 'copied!' : icon.replace("icon-", "") }}</p>
  </div>
</template>

<script>
import copyToClipboard from "@/helpers/copyToClipboard";

export default {
  name: "Icon",
  props: {
    icon: String
  },
  data() {
    return {
      copied: false
    };
  },
  methods: {
    copy() {
      copyToClipboard(this.$refs.icon.outerHTML);
      this.copied = "copied!";
      setTimeout(() => {
        this.copied = false;
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
.icon-card {
  transition: all 0.25s ease;
  @apply relative bg-gray-800 rounded-lg p-4 text-center cursor-pointer;
  svg.icon {
    transition: all 0.25s ease;
    @apply mt-10 mb-12 text-white inline w-8 transform scale-100;
  }
  p.caption {
    transition: all 0.5s ease;
    @apply absolute mb-2 bottom-0 left-0 right-0 text-gray-400 text-xs font-mono antialiased leading-tight;
  }

  &:hover {
    @apply bg-brand;
    p.caption {
      @apply text-gray-900;
    }
    svg.icon {
      @apply text-gray-900 scale-125;
    }
  }

  &:focus,
  &:active {
    @apply shadow-outline outline-none;
  }
}
</style>
