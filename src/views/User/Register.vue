<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="hero bg-base-200 h-full">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">现在注册吧!</h1>
        <p class="py-6">
          有远见的、有创造力的人进来了。所有的逃亡者都假定除非是准的。在deleniti中，每个人都有自己的权利和权利。
        </p>
      </div>
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form @click="(e) => e.preventDefault()" class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">名字</span>
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
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">邮箱(用于找回密码)</span>
            </label>
            <input
              type="email"
              placeholder="email"
              class="input input-bordered !outline-none"
            />
          </div>
          <!-- 按钮组 -->
          <div class="form-control mt-1">
            <button class="btn btn-info flex-1 rounded-full">注册</button>
            <div class="divider text-sm">已经有账号？</div>
            <button
              class="btn flex-1 rounded-full btn-md"
              @click="router.push('/login')"
            >
              去登录
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
