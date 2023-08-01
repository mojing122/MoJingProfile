<template>
  <div className="py-6 px-10 bg-white border-t-2 border-t-gray-100 shadow-sm">
    <div className="flex flex-col items-center justify-between md:flex-row">
      <div class="mx-6 flex content-center">
        <img
          class="h-10 w-auto text-slate-900 md:mr-4"
          src="/src/assets/image/logo_ml.png"
          alt="Logo"
        />
        <a
          class="mx-4 self-center hover:text-indigo-700 hover:font-semibold"
          href="https://docs.mojing.live"
          >文档站</a
        >
      </div>
      <div
        class="text-slate-500 md:mt-0 md:mr-6 text-xs content-center items-center mt-4"
      >
        <p>Copyright &copy; Sha Zhiqing . All rights reserved.</p>
        <div class="flex flex-wrap">
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            class="mr-0 mt-1 w-full md:w-auto md:mr-4"
            >苏ICP备2023024060号-1</a
          >
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32128102010312"
            class="flex mt-1 mx-auto pr-2 md:pr-0"
            ><img src="/public/beian.png" class="h-[16px]" />
            <p>苏公网安备 32128102010312号</p></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
