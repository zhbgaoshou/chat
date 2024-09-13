<script setup lang="ts">
import ToggleTheme from "./components/ToggleTheme.vue";
import DownIcon from "@/assets/icons/down.svg?component";
import EditIcon from "@/assets/icons/edit.svg?component";
import LogoutIcon from "@/assets/icons/logout.svg?component";
import SettingIcon from "@/assets/icons/setting.svg?component";

</script>

<template>
  <div class="navbar bg-base-200">
    <div class="navbar-start">
      <div class="flex-none md:hidden">
        <label for="drawer" aria-label="open sidebar" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="inline-block h-6 w-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
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
          CHATGPT4o
          <DownIcon />
        </div>
        <ul tabindex="0"
          class="dropdown-content menu bg-base-100 border-[1px] border-base-300 rounded-box z-[1] w-52 p-2 left-1/2 translate-x-[-50%]">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-circle btn-ghost">
            <SettingIcon />
        </div>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><a class="flex justify-between">
              暗夜模式
              <ToggleTheme />
            </a></li>
        </ul>
      </div>

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-circle btn-md">
          头像
        </div>
        <ul tabindex="0"
          class="dropdown-content  border-base-300 border-[1px] menu bg-base-100 rounded-box z-[1] w-max shadow-sm">
          <div class="stats stats-vertical">
            <div class="stat">
              <div class="stat-figure text-secondary">
                <div class="avatar online">
                  <div class="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              </div>
              <div class="stat-title">Tasks done</div>
              <div class="stat-desc text-secondary">31 tasks remaining</div>
              <div class="stat-value">第一天</div>
            </div>
          </div>
          <div class="divider">OR</div>
          <button class="btn">退出登录
            <LogoutIcon class="w-[18px]" />
          </button>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
