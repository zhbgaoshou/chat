<script setup>
import ContactIcon from "@/assets/icons/contact.svg?component";
import MessageIcon from "@/assets/icons/message.svg?component";
import MoreRoomIcon from "@/assets/icons/more_room.svg?component";
const sidebarList = [
  { icon: ContactIcon, text: "联系我" },
  { icon: MessageIcon, text: "反馈BUG" },
];
</script>
<template>
  <ul class="menu bg-base-100 flex flex-col h-full">
    <!-- Sidebar content here -->
    <li>
      <a v-for="item in sidebarList">
        <component :is="item.icon" class="w-[16px]" />
        {{ item.text }}
      </a>
    </li>
    <div class="divider">记录</div>

    <div class="overflow-auto flex-1">
      <ul class="menu rounded-box w-48">
        <li class="menu-title">今天</li>
        <li>
          <a class="focus">Item 1</a>
        </li>
        <li><a>Item 2 </a></li>
        <li><a>Item 3</a></li>
      </ul>

      <ul class="menu rounded-box">
        <li class="menu-title">昨天</li>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>

      <ul class="menu rounded-box">
        <li class="menu-title">更久</li>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li v-for="i in 100"><a>Item 3</a></li>
      </ul>
    </div>
  </ul>
</template>

<style lang="scss" scoped></style>
