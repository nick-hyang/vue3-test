import appStateTypes from './modules/app/types'

export default interface BaseStateTypes {
    // text: string
}

export interface AllStateTypes extends BaseStateTypes {
    app: appStateTypes
}
