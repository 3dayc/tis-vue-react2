<template>
    <div class="signup">
        <h1>This is an signup page</h1>
        <user-register></user-register>
    </div>
</template>

<script>
import UserRegister from "@/components/user/UserRegister.vue";
export default {
    /* npdtmc^2w */
    name: "Signup",
    props: {},
    data() {
        return {};
    },
    template: {},
    methods: {},
    computed: {},
    components: {
        "user-register": UserRegister
    },
    watch: {}
};
</script>
