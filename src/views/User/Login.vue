<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="hero bg-base-200 h-full">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">马上登录吧!</h1>
        <p class="py-6">
          平台致力于通过先进的人工智能技术，让每个人都能更轻松地获取信息、解决问题、激发创造力。
        </p>
      </div>

      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form @click="(e) => e.preventDefault()" class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">登录名</span>
            </label>
            <input
              type="text"
              placeholder="username"
              class="input input-bordered !outline-none"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">密码</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input input-bordered !outline-none"
              required
            />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">忘记密码?</a>
            </label>
          </div>
          <!-- 按钮组 -->
          <div class="form-control">
            <button class="btn btn-info flex-1 rounded-full">登录</button>
            <div class="divider text-sm">OR</div>
            <div class="grid grid-cols-2 gap-2">
              <button
                class="btn btn-primary flex-1 rounded-full"
                @click="router.push('/register')"
              >
                去注册
              </button>
              <button
                class="btn flex-1 rounded-full"
                @click="router.replace('/')"
              >
                暂时不注册
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
