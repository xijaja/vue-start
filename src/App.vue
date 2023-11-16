<template>
<main class="p-4 mx-auto max-w-6xl">
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav class="flex items-center gap-4 my-2">
        <RouterLink class="buttonHover" to="/">index</RouterLink>
        <RouterLink class="buttonHover" to="/home">Home</RouterLink>
        <RouterLink class="buttonHover" to="/abc">abc</RouterLink>
        <RouterLink class="buttonHover" to="/about">About</RouterLink>
        <DarkMode />
      </nav>
    </div>
  </header>

  <RouterView />
</main>
</template>

<style scoped lang="postcss">
.buttonHover {
  @apply hover:text-blue-600 hover:underline underline-offset-4;
}
</style>