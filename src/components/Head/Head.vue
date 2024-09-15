<script setup lang="ts">
import { useRouter } from "vue-router";

// icons import
import ToggleTheme from "./components/ToggleTheme.vue";
import DownIcon from "@/assets/icons/down.svg?component";
import EditIcon from "@/assets/icons/edit.svg?component";
import LogoutIcon from "@/assets/icons/logout.svg?component";
import SettingIcon from "@/assets/icons/setting.svg?component";
import LoginIcon from "@/assets/icons/login.svg?component";
import InfoIcon from "@/assets/icons/info.svg?component";
import MoreLeftIcon from "@/assets/icons/more-left.svg?component";

// store
import { useSettingsStore } from "@/store/modules/settings";

const settingsStore = useSettingsStore();

const router = useRouter();
</script>

<template>
  <div class="navbar bg-base-100">
    <!-- Head left -->
    <div class="navbar-start">
      <div class="flex-none md:hidden">
        <label
          for="drawer"
          aria-label="open sidebar"
          class="btn btn-ghost btn-circle"
        >
          <MoreLeftIcon />
        </label>
      </div>
      <div class="tooltip tooltip-right" data-tip="新建对话">
        <button class="btn btn-ghost btn-circle">
          <EditIcon />
        </button>
      </div>
    </div>
    <!-- Head center -->
    <div class="navbar-center">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn m-1 btn-ghost rounded-full">
          CHATGPT4o
          <DownIcon />
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 border-[1px] border-base-300 rounded-box z-[1] w-52 p-2 left-1/2 translate-x-[-50%]"
        >
          <li v-for="i in 4" class="my-[4px]">
            <a :class="{ focus: i === 4 }">
              <svg
                class="feather feather-zap"
                fill="none"
                height="18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <div>
                <span class="font-bold">GPT {{ i }}o</span><br />
                <span>适合处理复杂业务</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Head right -->
    <div class="navbar-end">
      <div class="dropdown dropdown-end mx-[5px]">
        <div tabindex="0" role="button" class="btn btn-circle btn-ghost">
          <SettingIcon />
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 border-[1px] border-base-300 rounded-box z-[1] w-60 p-2 shadow"
        >
          <li>
            <a class="flex justify-between">
              暗夜模式
              <ToggleTheme />
            </a>
          </li>

          <li>
            <a class="flex justify-between">
              全屏宽
              <input
                type="checkbox"
                class="toggle toggle-info"
                v-model="settingsStore.width"
              />
            </a>
          </li>
        </ul>
      </div>

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-circle btn-md">头像</div>
        <ul
          tabindex="0"
          class="dropdown-content border-base-300 border-[1px] menu bg-base-100 rounded-box z-[1] w-max shadow-sm"
        >
          <!-- 已登陆 -->
          <div v-if="false">
            <div class="stats stats-vertical">
              <div class="stat">
                <div class="stat-figure text-secondary">
                  <div class="avatar online">
                    <div class="w-16 rounded-full">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                </div>
                <div class="stat-title">Tasks done</div>
                <div class="stat-desc text-secondary">31 tasks remaining</div>
                <div class="stat-value">第一天</div>
              </div>
            </div>
            <div class="divider">OR</div>
            <button class="btn w-full">
              退出登录
              <LogoutIcon class="w-[18px]" />
            </button>
          </div>

          <!-- 未登录 -->
          <div v-else>
            <span class="flex justify-center items-center">
              <InfoIcon class="w-[16px] mr-[3px]" />没有登录
            </span>
            <div class="divider">OR</div>
            <button class="btn btn-sm" @click="router.replace('/login')">
              登录
              <LoginIcon class="w-[18px]" />
            </button>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
