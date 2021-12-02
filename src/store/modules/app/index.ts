// eslint-disable-next-line prettier/prettier
import { Module } from 'vuex'
import appStateTypes from './types'
import BaseStateTypes from '../../types'

const appModule: Module<appStateTypes, BaseStateTypes> = {
    namespaced: true,
    state: {
        sidebar: {
            opened: true
        }
    },
    getters: {
        sidebarOpened(state) {
            return state.sidebar.opened
        }
    },
    mutations: {
        TOGGLE_SIDEBAR(state: appStateTypes) {
            state.sidebar.opened = !state.sidebar.opened
        }
    },
    actions: {
        toggleSidebar({ commit }) {
            commit('TOGGLE_SIDEBAR')
        }
    }
}

export default appModule
