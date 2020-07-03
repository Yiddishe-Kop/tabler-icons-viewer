<template>
  <div class="min-h-screen p-6 text-gray-100 bg-gray-900">
    <section class="flex flex-col items-center mt-24">
      <h1 class="text-5xl font-extrabold">Tabler Icons</h1>
      <p>
        Viewer by
        <a
          href="https://github.com/Yiddishe-Kop"
          target="_blank"
          class="underline text-brand hover:no-underline"
        >Yiddishe Kop</a>
      </p>
    </section>
    <main class="max-w-4xl px-4 mx-auto my-16">
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
};
</script>

<style>
</style>
