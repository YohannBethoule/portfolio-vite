<script setup>
import ArticleHeading from "./ArticleHeading.vue";
import PersonalInfo from "./PersonalInfo.vue";
import Link from "./Link.vue";

const props = defineProps({
    infos: Object
})
</script>

<template>
    <div class="flex flex-col mx-auto text-center space-y-5">

        <h1 class="text-5xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-[#D50000] via-[#E60026] to-violet-600">
            <img alt="my logo" class="inline h-16 w-16 md:h-28 md:w-28 mb-5" src="/logo.webp"/> {{ infos.name }}</h1>

        <ArticleHeading>{{ infos.subtitle }}</ArticleHeading>
        <div class="flex flex-col space-y-2">
            <PersonalInfo>
                <Link :href="'mailto:'+infos.mail">
                    <font-awesome-icon class="mr-2" icon="envelope"/>
                    {{ infos.mail }}
                </Link>
            </PersonalInfo>
            <PersonalInfo>
                <font-awesome-icon class="mr-2" icon="home"/>
                {{ infos.postalCode }} {{ infos.city }}, {{ infos.country.toUpperCase() }}
            </PersonalInfo>
            <PersonalInfo>
                <Link :href="infos.github" class="text-5xl m-5" title="Github Profile">
                    <font-awesome-icon :icon="['fab', 'github']"/>
                </Link>
                <Link :href="infos.linkedin" class="text-5xl m-5" title="Linkedin Profile">
                    <font-awesome-icon :icon="['fab', 'linkedin']"/>
                </Link>
            </PersonalInfo>
        </div>
        <p class="text-xl">{{ infos.description }}</p>
    </div>

</template>