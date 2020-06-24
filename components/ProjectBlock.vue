<template>
  <article class="block section-inset-y">
    <figure class="block__media">
      <v-lazy-image
        v-if="!video || !youtube"
        class="block__media__image"
        :src="media | transformImage('1200x0')"
        :src-placeholder="media | transformImage('70x0')"
      />
      <div
        v-if="video && !youtube"
        ref="video"
        class="video"
      >
        <video
          :src="require(`~/assets/video/${video}.mp4`)"
          autoplay
          muted
          playsinline
          loop="true"
          :controls="controls"
          class="video__media"
        />
      </div>
      <div
        v-if="youtube"
        class="video-container"
      >
        <youtube
          ref="youtube"
          :video-id="youtube"
        />
        </div>

      <figcaption class="block__media__caption">
        <p>
          {{ text }}
        </p>
        <a
          v-if="link.url"
          :href="link.url"
          class="button-link button-link--sm button-link--icon"
          target="_blank"
        >
          play
          <icon-target class="icon icon--target" />
        </a>
      </figcaption>
    </figure>
  </article>
</template>

<script>
import IconTarget from '@/assets/img/icons/icon-target.svg';

export default {
  components: {
    IconTarget,
  },

  props: {
    youtube: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
    aspect: {
      type: String,
      required: true,
    },
    link: {
      type: Object,
      default: null,
    },
    media: {
      type: String,
      default: null,
    },
    video: {
      type: String,
      default: null,
    },
    controls: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    if (this.aspect) {
      this.$refs.video.style.paddingBottom = `${this.aspect}%`;
    }
  },
};
</script>

<style lang="scss">
.block__media {
  &__caption {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: rem(15px);

    p {
      margin-top: rem(20px);
    }
  }

  &__image {
    width: 100%;
    height: auto;
  }
}

.col-md-6 .block__media__caption p {
  max-width: rem(500px);
}

.video {
  position: relative;
  height: 0;
  padding-top: 25px;
  padding-bottom: 56.25%;

  &__media {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:focus {
      outline: none;
    }
  }
}

.video-container {
  position: relative;
  height: 0;
  padding-top: 30px;
  padding-bottom: 56.25%;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
