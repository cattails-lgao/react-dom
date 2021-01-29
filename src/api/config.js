import {
    REQUESTMETHODGET,
    REQUESTMETHODPOST
} from './contasts';

export const DevRequestURL = '';
export const ProRequestURL = '';

export default {
    login: {
        url: '/login',
        methods: REQUESTMETHODPOST
    },
    userList: {
        url: '/userList',
        methods: REQUESTMETHODGET
    },
    addUser: {
        url: '/addUser',
        methods: REQUESTMETHODPOST
    },
    updateUser: {
        url: '/updateUser',
        methods: REQUESTMETHODPOST
    },
    delUser: {
        url: '/delUser',
        methods: REQUESTMETHODPOST
    },

    categoryList: {
        url: '/categoryList',
        methods: REQUESTMETHODGET
    },
    addCategory: {
        url: '/addCategory',
        methods: REQUESTMETHODPOST
    },
    updateCategory: {
        url: '/updateCategory',
        methods: REQUESTMETHODPOST
    },
    categoryInfo: {
        url: '/categoryInfo',
        methods: REQUESTMETHODGET
    },

    productList: {
        url: '/productList',
        methods: REQUESTMETHODGET
    },
    productSearch: {
        url: '/productSearch',
        methods: REQUESTMETHODGET
    },
    addProduct: {
        url: '/addProduct',
        methods: REQUESTMETHODPOST
    },
    updateProduct: {
        url: '/updateProduct',
        methods: REQUESTMETHODPOST
    },
    updateProductStatus: {
        url: '/updateProductStatus',
        methods: REQUESTMETHODPOST
    },

    upload: {
        url: '/upload',
        methods: REQUESTMETHODPOST
    },
    delImg: {
        url: '/delImg',
        methods: REQUESTMETHODPOST
    },

    roleList: {
        url: '/releList',
        methods: REQUESTMETHODGET
    },
    addRole: {
        url: '/addRole',
        methods: REQUESTMETHODPOST
    },
    updateRole: {
        url: '/updateRole',
        methods: REQUESTMETHODPOST
    },
}