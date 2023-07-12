<template>
  <section
    class="relative isolate overflow-hidden bg-white px-6 py-44 sm:py-[300px] lg:px-8"
  >
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"
    />
    <div
      class="absolute inset-y-0 right-[90%] -z-10 mr-24 w-[400%] origin-bottom-left skew-x-[-60deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
    />
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <div class="flex flex-wrap place-content-center">
        <img
          class="mr-[14px] h-10 relative"
          src="/src/assets/image/logo_ml.png"
          alt=""
        />
        <h1 class="flex w-auto text-center text-3xl font-bold">欢迎来到</h1>

        <h1 class="flex w-auto text-center text-3xl font-bold">
          <p class="font-serif text-4xl mr-3 ml-3 grad-text font-bold pb-1">
            Mojing
          </p>
          的小站
        </h1>
      </div>

      <figure class="mt-10">
        <blockquote
          class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9"
        >
          <p>在这里，分享一些编程路上的小点滴</p>
        </blockquote>
        <figcaption class="mt-10">
          <img
            class="mx-auto h-10 w-10 rounded-full"
            src="/src/assets/image/homePage/myAvatar.png"
            alt=""
          />
          <div
            class="mt-4 sm:flex items-center justify-center space-x-3 text-base"
          >
            <div class="font-semibold text-gray-900">沙志清</div>
            <svg
              viewBox="0 0 2 2"
              width="3"
              height="3"
              aria-hidden="true"
              class="fill-gray-900 hidden sm:block"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div class="text-gray-600">
              扬州大学 | 信息工程学院/创新创业学院
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.grad-text {
  background: -webkit-linear-gradient(
    left,
    #84fab0 0%,
    #8fd3f4 70%,
    #8fd3f4 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
