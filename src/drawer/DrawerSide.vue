<script setup>
import ContactIcon from "@/assets/icons/contact.svg?component"
import MessageIcon from "@/assets/icons/message.svg?component"
const sidebarList = [
    { icon: ContactIcon, text: "联系我" },
    { icon: MessageIcon, text: "反馈BUG" },
]
</script>
<template>
    <ul class="menu bg-base-200 min-h-full p-4">
        <!-- Sidebar content here -->
        <li>
            <a v-for="item in sidebarList">
                <component :is="item.icon" class="w-[16px]" />
                {{ item.text }}
            </a>
        </li>
        <div class="divider">聊天记录</div>

    </ul>
</template>



<style lang="scss" scoped></style>