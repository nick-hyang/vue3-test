<template>
    <div class="navbar">
        <hamburger
            :is-active="isActive"
            id="hamburger-container"
            class="hamburger-container"
            @toggleClick="toggleSidebar"
        ></hamburger>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/store/index'
import Hamburger from '@/components/Hamburger/index.vue'

const isActive = ref(true)
const store = useStore()

const toggleSidebar = () => {
    isActive.value = !isActive.value
    store.dispatch('app/toggleSidebar')
}
</script>

<style lang="scss">
.navbar {
    height: 50px;
    width: 100%;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

    .hamburger-container {
        line-height: 46px;
        height: 100%;
        float: left;
        cursor: pointer;
        transition: background 0.3s;
        -webkit-tap-highlight-color: transparent;

        &:hover {
            background: rgba(0, 0, 0, 0.025);
        }
    }
}
</style>
