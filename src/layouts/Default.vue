<template>
  <div class="min-h-screen p-6 text-gray-100 bg-gray-900">
    <div class="fixed top-0 left-0 right-0 z-0 bg-gray-700 h-96"></div>
    <section class="relative z-10 mt-8 text-center md:mt-24">
      <h1 class="text-5xl font-extrabold">Tabler Icons</h1>
      <div class="flex items-stretch justify-center mt-6 space-x-4">
        <p class="flex flex-col items-start px-3 py-2 bg-gray-600 rounded-md">
          <span class="text-sm text-gray-300">Icons by</span>
          <a class="mt-1" target="_blank" href="https://github.com/tabler/tabler-icons">
            <img
              class="inline-block w-10 h-10 mr-2 rounded-full"
              src="https://avatars2.githubusercontent.com/u/35471246?s=200&v=4"
              alt="Yiddishe Kop"
            />
            <span class="text-sm font-medium tracking-wider uppercase">Tabler Icons</span>
          </a>
        </p>
        <p class="flex flex-col items-start px-3 py-2 bg-gray-600 rounded-md">
          <span class="text-sm text-gray-300">Viewer by</span>
          <a class="mt-1" target="_blank" href="https://github.com/Yiddishe-Kop">
            <img
              class="inline-block w-10 h-10 mr-2 rounded-full"
              src="https://avatars2.githubusercontent.com/u/36875437?s=460&u=4a37772bb1817e51355b75cf3dbe75ff7f7a7b58&v=4"
              alt="Yiddishe Kop"
            />
            <span class="text-sm font-medium tracking-wider uppercase">Yehuda Neufeld</span>
          </a>
        </p>
      </div>
    </section>
    <main class="max-w-4xl px-4 mx-auto mb-16 mt-28 md:mt-11">
      <slot />
    </main>
    <a
      class="absolute flex items-center rounded-full top-2 right-2 group"
      href="https://github.com/Yiddishe-Kop/tabler-icons-viewer"
      target="_blank"
    >
      <span class="mr-2 text-gray-200">Star on GitHub!</span>
      <span
        class="inline-flex items-center justify-center p-2 transition bg-gray-900 rounded-full group-hover:text-gray-900 group-hover:bg-gray-400 text-brand"
      >
        <icon-brand-github class="inline-block w-7" />
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
};
</script>

<style>
</style>
