<template>
    <router-link v-if="link !== ''" :to="setPath" type="button" tag="button" :class="elClass">
        <slot></slot>
        <span v-if="elText">{{elText}}</span>
    </router-link>
    <button v-else type="button" :class="elClass">
        <slot></slot>
        <span v-if="elText">{{elText}}</span>
    </button>
</template>

<script>

    export default {
        props: {
            id: {
                type: String,
                default: 'button'
            },
            elClass: {
                default: 'btn'
            },
            elText: {
                default: 'Buy now'
            },
            link: {
                default: ''
            },
            params: ''
        },
        data() {
            return {
                url: '/button'
            }
        },
        methods: {

        },
        computed: {
            setPath() {
                if (this.params) {
                    return {path:this.link, name:this.link+this.params, params: {route: this.params}}
                }
                else {
                    return this.link
                }
            }
        }
    }

</script>

<style scoped>
    .btn {
        font: 700 14px/1 'Open Sans';
        display: block;
        text-decoration: none;
        border-radius: 30px;
        line-height: 1;
        height: 40px;
        width: 100%;
        padding: 12px 20px 10px;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear;
        position: relative;
        box-sizing: border-box;
        border: 2px solid #48a415;
        background-color: #FFF;
        color: #48a415;
        cursor: pointer;
    }
    .btn:hover,
    .btn:focus {
        color: #FFF;
        background-color: #367b10;
        border-color: #367b10;
        box-shadow: none;
    }
    .btn span {
        display: inline-block;
    }
    .btn.right__arrow {
        padding-right: 40px;
    }
    .btn.left__arrow {
        padding-left: 40px;
    }
    .btn__primary {
        font-family: 'gb';
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
    }
    .btn__primary,
    .btn__secondary {
        position: relative;
        color: #fff;
        border-color: #48a415;
        background-color: #48a415;
        box-shadow: 0 2px 0 0 #c6cacc;
    }
    .btn__sub {
        font: 700 14px/1 'Open Sans';
        text-transform: none;
    }
    .btn__secondary {
        color: #00aeef;
        background-color: #fff;
        border-color: #00aeef;
        box-shadow: none;
        text-transform: none;
    }
    .btn__secondary:hover,
    .btn__secondary:focus {
        color: #FFF;
        background-color: #00aeef;
        border-color: #00aeef;
        box-shadow: none;
    }
    .left__arrow:before,
    .right__arrow:after,
    .btn__secondary.left__arrow:hover:before,
    .btn__secondary.right__arrow:hover:after,
    .btn__secondary.left__arrow:focus:before,
    .btn__secondary.right__arrow:focus:after {
        content: '';
        background: transparent url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><polyline fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" stroke="%23fff" points="41.5,67 58.5,50 41.5,33"/></svg>') center center no-repeat;
        background-size: contain;
        height: 24px;
        width: 24px;
        position: absolute;
        margin-left: 5px;
        top: 7px;
    }
    .left__arrow:before,
    .left__arrow:hover:before,
    .left__arrow:focus:before,
    .btn__secondary.left__arrow:hover:before,
    .btn__secondary.left__arrow:focus:before {
        margin-left: -30px;
        transform: rotate(180deg);
    }
    .btn__secondary.left__arrow:before,
    .btn__secondary.right__arrow:after {
        background: transparent url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><polyline fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" stroke="%2300aeef" points="41.5,67 58.5,50 41.5,33"/></svg>') center center no-repeat;
    }
    .btn__inline {
        display: inline-block;
        height: auto;
        width: auto;
        padding: 11px 20px;
    }
    .btn svg {
        margin: -4px 0;
    }
    @media (min-width: 340px) {
        .btn {
            max-width: 300px;
        }
    }
    @media (min-width: 620px) {
        .btn {
            width: auto;
        }
    }
</style>