<template>
  <section>
    <Header
      :title="project.content.title"
      :back-title="project.content.title_back"
      :intro="project.content.intro"
      :image="project.content.header"
      :credits="project.content.header_credits"
    />
    <section class="container">
      <div
        v-if="project.content.intro_block[0]"
        class="row"
      >
        <project-block
          class="offset-md-2 col-md-8"
          :title="project.content.intro_block[0].title"
          :text="project.content.intro_block[0].text"
          :media="project.content.intro_block[0].media"
          :link="project.content.intro_block[0].play_link"
          :video="project.content.intro_block[0].local_video"
          :aspect="project.content.intro_block[0].custom_video_aspect"
        />
      </div>
      <span class="section-backtitle back-title">
        <span class="marquee marquee--reverse">
          <span>
            {{ project.content.blocks_title }} &nbsp;
          </span>
        </span>
        <span class="marquee marquee--reverse marquee--second">
          <span>
            {{ project.content.blocks_title }} &nbsp;
          </span>
        </span>
      </span>
      <div class="row blocks-sm section-inset-y">
        <div
          v-for="(block, index) in project.content.blocks"
          :key="index"
          class="block-sm col-md-6"
        >
          <project-block
            :title="block.title"
            :text="block.text"
            :media="block.media"
            :link="block.play_link"
            :video="block.local_video"
            :aspect="block.custom_video_aspect"
          />
        </div>
      </div>
    </section>
    <project-link
      v-if="project.content.project_link.url"
      :link="project.content.project_link"
    />
  </section>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Header from '~/components/Header';
import ProjectBlock from '~/components/ProjectBlock';
import ProjectLink from '~/components/ProjectLink';

export default {
  components: {
    Header,
    ProjectBlock,
    ProjectLink,
  },

  props: {
    projectSlug: {
      type: String,
      default: null,
    },
  },

  computed: {
    project() {
      const projectBySlug = this.$store.getters['projects/projectBySlug'];
      const slug = this.projectSlug || this.$route.params.slug;
      return projectBySlug(slug);
    },
  },
  async fetch({ store }) {
    if (!store.getters['projects/isFetched']) {
      return store.dispatch('projects/fetchProjects');
    }

    return true;
  },
};
</script>

<style lang="scss">
.blocks-sm {
  .block-sm:nth-child(odd) .block {
    padding-top: 0;
  }

  .block-sm:nth-child(even) .block {
    margin-top: 10vh;
  }
}

.section-backtitle {
  position: absolute;
  right: 0;
  left: 0;
  height: calc(50vh + 1em);
  margin-top: calc(-10vh - #{rem($section-max-value)});
  overflow: hidden;
  pointer-events: none;
}
</style>
