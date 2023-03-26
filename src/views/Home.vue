<template>
  <!--Header-->
  <header
    class="main-header"
    :style="{ 'background-image': 'url(' + user_info.background_image + ')' }"
  >
    <div class="container">
      <div class="row personal-profile">
        <div class="col-md-4 personal-profile__avatar">
          <img class="" :src="user_info.image" alt="avatar" />
        </div>
        <div class="col-md-8">
          <p class="personal-profile__name">{{ user_info.name }}_</p>
          <p class="personal-profile__work">{{ user_info.position }}</p>
          <div class="personal-profile__contacts">
            <dl class="contact-list contact-list__opacity-titles">
              <dt>Age:</dt>
              <dd>{{ user_info.age }}</dd>
              <dt>Phone:</dt>
              <dd>
                <a href="tel:{{ user_info.contact_number }}">{{
                  user_info.contact_number
                }}</a>
              </dd>
              <dt>Email:</dt>
              <dd>
                <a href="mailto:{{ user_info.email }}">{{ user_info.email }}</a>
              </dd>
              <dt>Address:</dt>
              <dd>{{ user_info.address }}</dd>
            </dl>
          </div>
          <p class="personal-profile__social">
            <a
              v-for="socialLink in user_info.socialLinks"
              :key="socialLink"
              :href="socialLink.url"
              target="_blank"
              ><i :class="socialLink.icon"></i
            ></a>
          </p>
        </div>
      </div>
    </div>
  </header>
  <!--Header-->

  <!--Hello-->
  <section id="hello" class="container section">
    <div class="row">
      <div class="col-md-10">
        <h2 id="hello_header" class="section__title">Hi_</h2>
        <p class="section__description">
          {{ hello.description }}
        </p>
        <a :href="hello.cv" target="_blank" class="section_btn site-btn"
          ><img src="../assets/img/img_btn_icon.png" alt="" />Download CV</a
        >
      </div>
    </div>
  </section>
  <!--Hello-->

  <hr />

  <!--Resume-->
  <section id="resume" class="container section">
    <div class="row">
      <div class="col-md-10">
        <h2 id="resume_header" class="section__title">Resume_</h2>
        <p class="section__description"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 section__resume resume-list">
        <h3 class="resume-list_title">education</h3>

        <div
          class="resume-list__block"
          v-for="education in resume.educations"
          :key="education"
        >
          <p class="resume-list__block-title">
            {{ education.institute_name }}
          </p>
          <p class="resume-list__block-date">{{ education.time }}</p>
          <p>{{ education.description }}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 section__resume resume-list">
        <h3 class="resume-list_title">employment</h3>

        <div
          class="resume-list__block"
          v-for="employment in resume.employments"
          :key="employment"
        >
          <p class="resume-list__block-title">{{ employment.company_name }}</p>
          <p class="resume-list__block-date">{{ employment.time }}</p>
          <p>{{ employment.description }}</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 section__resume resume-list">
        <h3 class="resume-list_title">My Achievement_</h3>
        <div class="achievement_slider">
          <Carousel
            v-if="achievements && achievements.length"
            :autoplay="true"
            :items="4"
            :loop="true"
            :nav="false"
            :dots="true"
            :responsive="{
              0: { items: 1 },
              768: { items: 2 },
              1024: { items: 4 },
            }"
          >
            <div
              v-for="achievement in achievements"
              :key="achievement"
              class="achievement-cards__card m-2"
            >
              <div class="achievement-cards__img">
                <img :src="achievement.image" alt="blog_img" />
              </div>
              <div class="achievement-cards__info">
                <p class="achievement-cards__date">{{ achievement.date }}</p>
                <h4 class="achievement-cards_title">
                  {{ achievement.title }}
                </h4>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
  <!--Resume-->

  <!--Portfolio-->
  <section id="portfolio" class="container section">
    <div class="row">
      <div class="col-md-12">
        <h2 id="portfolio_header" class="section__title">
          My Research papers_
        </h2>
      </div>
    </div>

    <div class="portfolio-cards">
      <div
        class="row project-card"
        v-for="portfolio in portfolios"
        :key="portfolio"
      >
        <div class="col-md-6 col-lg-5 project-card__img">
          <img class="" :src="portfolio.images" alt="project-img" />
        </div>
        <div class="col-md-6 col-lg-7 project-card__info">
          <h3 class="project-card__title">
            {{ portfolio.name }}
          </h3>
          <p class="project-card__description">
            {{ portfolio.description }}
          </p>
          <p class="project-card__stack">Topics :</p>
          <ul class="tags">
            <li v-for="topic in portfolio.topics" :key="topic">
              {{ topic.name }}
            </li>
          </ul>
          <a
            :href="portfolio.link"
            target="_blank"
            class="project-card__link"
            >{{ portfolio.site_name }}</a
          >
        </div>
      </div>
    </div>
  </section>
  <!--Portfolio-->

  <!--Testimonials-->
  <div id="testimonials" class="section">
    <div
      class="background slider-carousel"
      style="background-image: url(../assets/img/img_bg_main.jpg)"
    >
      <div class="carouselTestimonials">
        <div>
          <Carousel
            id="carouselTestimonials"
            class="carousel-inner"
            v-if="testimonials && testimonials.length"
            :autoplay="true"
            :items="1"
            :loop="true"
            :nav="false"
            :dots="true"
          >
            <div
              class="carousel-item"
              v-for="testimonial in testimonials"
              :key="testimonial"
            >
              <div class="row">
                <div class="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                  <p class="slider-carousel__title">{{ testimonial.name }}</p>
                  <p class="slider-carousel__caption">
                    Project: {{ testimonial.Project }}
                  </p>
                  <hr />
                  <p class="slider-carousel__description">
                    {{ testimonial.review }}
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
  <!--Testimonials-->

  <!--Blog-->
  <section id="blog" class="container section">
    <div class="row">
      <div class="col-md-12">
        <h2 id="blog_header" class="section__title">Latest Posts_</h2>
      </div>
    </div>
    <div class="row post-cards">
      <div class="col-md-4 py-3" v-for="post in posts" :key="post">
        <a :href="post.link" target="_blank">
          <div class="post-cards__card">
            <div class="post-cards__img">
              <img :src="post.thumbnail" alt="blog_img" />
            </div>
            <div class="post-cards__info">
              <p class="post-cards__date">{{ post.date }}</p>
              <h3 class="post-cards_title">{{ post.title }}</h3>
              <p class="post-cards_description">
                {{ post.description }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
  <!--Blog-->

  <!--Contact-->
  <div
    class="background"
    style="background-image: url(../assets/img/img_bg_main.jpg)"
  >
    <div id="contact" class="container section">
      <div class="row">
        <div class="col-md-12">
          <p id="contacts_header" class="section__title">Get in touch_</p>
        </div>
      </div>
      <div class="row contacts">
        <div class="col-md-5 col-lg-4">
          <div class="contacts__list">
            <dl class="contact-list">
              <dt>Phone:</dt>
              <dd>
                <a href="tel:{{ user_info.contact_number }}">{{
                  user_info.contact_number
                }}</a>
              </dd>
              <dt>Skype:</dt>
              <dd><a href="skype:iamivanovivan">iamivanovivan</a></dd>
              <dt>Email:</dt>
              <dd>
                <a href="mailto:{{ user_info.email }}">{{ user_info.email }}</a>
              </dd>
            </dl>
          </div>
          <div class="contacts__social">
            <ul>
              <li v-for="socialLink in user_info.socialLinks" :key="socialLink">
                <a :href="socialLink.url" target="_blank">{{
                  socialLink.name
                }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-7 col-lg-5">
          <div class="contacts__form">
            <p class="contacts__form-title">Or just write me a letter here_</p>
            <ContactForm />
          </div>
          <div class="footer">
            <p>© 2016 Ivan Susanin. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Contact-->
</template>

<script>
import { ref, onMounted } from "vue";
import Carousel from "vue-owl-carousel/src/Carousel.vue";
import ContactForm from "../components/ContactForm.vue";
import axiosClient from "../axios.js";

export default {
  name: "Home",
  components: { Carousel, ContactForm },
  setup() {
    const user_info = ref([]);
    const hello = ref([]);
    const resume = ref([]);
    const achievements = ref([]);
    const portfolios = ref([]);
    const testimonials = ref([]);
    const posts = ref([]);

    // Load getResorts function onMounted
    onMounted(() => {
      getUserInfoData();
      getAboutData();
      getAchievementsData();
      getPapersData();
      getTestimonialsData();
      getPostData();
    });

    // Get User information form Server
    const getUserInfoData = async () => {
      await axiosClient
        .get("/website_api/userinfo.json")
        .then((res) => {
          user_info.value = res.data[0].user_info;
        })
        .catch((e) => {
          console.log(e);
        });
    };

    // Get User information form Server
    const getAboutData = async () => {
      await axiosClient
        .get("/website_api/about.json")
        .then((res) => {
          hello.value = res.data[0].hello;
          resume.value = res.data[0].resume;
        })
        .catch((e) => {
          console.log(e);
        });
    };

    // Get Achievements information form Server
    const getAchievementsData = async () => {
      await axiosClient
        .get("/website_api/achievements.json")
        .then((res) => {
          achievements.value = res.data[0].achievements;
        })
        .catch((e) => {
          console.log(e);
        });
    };

    // Get Papers information form Server
    const getPapersData = async () => {
      await axiosClient
        .get("/website_api/papers.json")
        .then((res) => {
          portfolios.value = res.data[0].portfolios;
        })
        .catch((e) => {
          console.log(e);
        });
    };

    // Get Testimonials information form Server
    const getTestimonialsData = async () => {
      await axiosClient
        .get("/website_api/testimonial.json")
        .then((res) => {
          testimonials.value = res.data[0].testimonials;
        })
        .catch((e) => {
          console.log(e);
        });
    };

    // Get Post form Server
    const getPostData = async () => {
      await axiosClient
        .get("/website_api/blog.json")
        .then((res) => {
          posts.value = res.data[0].posts;
          console.log(res.data[0].posts);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    return {
      user_info,
      hello,
      resume,
      achievements,
      portfolios,
      testimonials,
      posts,
      getUserInfoData,
      getAboutData,
      getAchievementsData,
      getPapersData,
      getTestimonialsData,
      getPostData,
    };
  },
};
</script>
<style scoped>
.personal-profile .personal-profile__social router-link {
  font-size: 24px;
  margin-right: 15px;
  opacity: 0.4;
  color: #fff !important;
}

.achievement-cards__card {
}
.achievement-cards__card:hover {
  box-shadow: 0 1px 31px rgb(0 0 0 / 9%);
}

.achievement-cards__card img {
  position: relative;
}

.achievement-cards__card .achievement-cards__info {
  border: 1px solid #f1f1f1;
  padding: 12px;
}

.achievement-cards__card .achievement-cards__info p {
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 10px;
}

.achievement-cards__card .achievement-cards__info h3 {
  font-family: Roboto Mono, monospace;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  margin-bottom: 15px;
  font-weight: 700;
  color: #555;
}

.achievement-cards_title {
  font-family: Roboto Mono, monospace;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  margin-bottom: 15px;
  font-weight: 700;
  color: #555;
}
</style>
