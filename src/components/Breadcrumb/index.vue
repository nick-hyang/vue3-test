<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
                <span
                    v-if="
                        item.redirect === 'noRedirect' || index == levelList.length - 1
                    "
                    class="no-redirect"
                    >{{ item.meta.title }}</span
                >
                <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { reactive, watch } from 'vue'
import { getBreadcrumb, handleLink } from './useBreadcrumb'

const levelList = reactive([])
const route = useRoute()

watch(route, () => {
    if (route.path.startsWith('/redirect/')) {
        return
    }
    getBreadcrumb(levelList)
})
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;

    .no-redirect {
        color: #97a8be;
        cursor: text;
    }
}
</style>
