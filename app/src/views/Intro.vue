<template>
    <div>
        <h1>
            {{title1}}
        </h1>
        <h2>
            {{title2}}
        </h2>
    </div>
</template>

<script>
export default {
    name: "Intro",

    data() {
        return {
            title1: "Exploring patterns of language variation on social media",
            title2: "A case study in Atlanta online communities"
        }
    }
}
</script>

<style scoped>
div {
    height: 100vh;
    border: 1px #000000;
    margin: 0;
}

h1 {
    text-align: center;
    margin: 1em;
    margin-top: 2em;
}

h2 {
    text-align: center;
    margin: 1em;
}
</style>