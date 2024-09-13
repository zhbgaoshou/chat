<script setup lang="ts">
import ToggleTheme from "./components/ToggleTheme.vue";
import DownIcon from "@/assets/icons/down.svg?component";
import EditIcon from "@/assets/icons/edit.svg?component";
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="flex-none md:hidden">
        <label
          for="drawer"
          aria-label="open sidebar"
          class="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-6 w-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div class="tooltip tooltip-right" data-tip="新建对话">
        <button class="btn btn-ghost btn-circle">
          <EditIcon />
        </button>
      </div>
    </div>
    <div class="navbar-center">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn m-1 btn-ghost rounded-full">
          CHATGPT4o <DownIcon />
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 border-[1px]  rounded-box z-[1] w-52 p-2 left-1/2 translate-x-[-50%]"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end">
      <ToggleTheme />

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="avatar ml-2">
          <div class="w-10 rounded-full cursor-pointer">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="dropdown-content border-[1px] menu bg-base-100 rounded-box z-[1] w-max shadow-sm"
        >
          <li><a>退出登录</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
