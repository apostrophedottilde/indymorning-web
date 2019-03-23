<template>
    <div class="">
        <hr/>
        {{comment.text}}

    </div>
</template>

<script>
    export default {
        name: "comment",
        props: {
            comment: {
                text: String
            }
        },
    }
</script>

<style scoped>

</style>