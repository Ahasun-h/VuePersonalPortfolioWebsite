<template>
  <!--Main menu-->
  <nav :class="{ menu_active: isScrolled }" class="menu">
    <div class="container">
      <div class="row">
        <div class="menu__wrapper d-none d-lg-block col-md-12">
          <nav class="">
            <ul>
              <li><a @click="scrollToSection('hello')">Hello</a></li>
              <li><a @click="scrollToSection('resume')">Resume</a></li>
              <li><a @click="scrollToSection('portfolio')">Paper</a></li>
              <li>
                <a @click="scrollToSection('testimonials')">testimonials</a>
              </li>
              <li><a @click="scrollToSection('blog')">blog</a></li>
              <li><a @click="scrollToSection('contact')">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div class="menu__wrapper col-md-12 d-lg-none">
          <button
            type="button"
            class="menu__mobile-button"
            @click="mobileMenuActive"
          >
            <span>
              <i class="fa-solid fa-bars" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <!--Main menu-->

  <!-- Mobile menu -->
  <div class="mobile-menu d-lg-none" :class="{ active: isMobileMenuExpand }">
    <div class="container">
      <div class="mobile-menu__close" @click="closeMobileMenu">
        <span><i class="mdi mdi-close" aria-hidden="true"></i></span>
      </div>
      <nav class="mobile-menu__wrapper">
        <ul>
          <li>
            <a @click="scrollToSection('hello')">Hello</a>
          </li>
          <li>
            <a @click="scrollToSection('resume')">Resume</a>
          </li>
          <li>
            <a @click="scrollToSection('portfolio')">Paper</a>
          </li>
          <li>
            <a @click="scrollToSection('testimonials')">Testimonials</a>
          </li>
          <li>
            <a @click="scrollToSection('blog')">Blog</a>
          </li>
          <li>
            <a @click="scrollToSection('contact')">Contact</a>
          </li>
          <!-- <li><a :href="#resume"></a></li>
          <li><a :href="#portfolio">Portfolio</a></li>
          <li><a :href="#testimonials">testimonials</a></li>
          <li><a :href="#blog">blog</a></li>
          <li><a :href="#contact">Contact</a></li> -->
        </ul>
      </nav>
    </div>
  </div>
  <!-- Mobile menu -->
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isScrolled: false,
      isMobileMenuExpand: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // Fix Main Menu in Scroll
    handleScroll() {
      if (window.scrollY > 50) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },

    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return { selector: to.hash };
      }
    },

    // Open Mobile Menu
    mobileMenuActive() {
      this.isMobileMenuExpand = true;
    },
    // Close Mobile Menu
    closeMobileMenu() {
      this.isMobileMenuExpand = false;
    },

    // Scroll to section
    scrollToSection(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
