$(document).ready(() => {
  const btnLoad = $(".load-more");
  const image = $(".load");
  $("nav.navbar button.navbar-toggler").click(function () {
    $("nav").addClass("dark");
  });
  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
      $(".navbar").removeClass("dark");
    }

    // if ($(document).scrollTop() > 150) {
    //   $("section.visi-misi .col-md-6").css(
    //     "animation",
    //     "slideSection 0.5s ease"
    //   );
    //   $("section.visi-misi .col-md-6").css("opacity", "1");
    // } else {
    //   $("section.visi-misi .col-md-6").removeAttr("style");
    // }

    // if ($(document).scrollTop() > 300) {
    //   $("section.anggota .container .col-lg-12 .heading").css(
    //     "animation",
    //     "slideSection 0.5s ease"
    //   );
    //   $("section.anggota .container .col-lg-12 .heading").css("opacity", "1");
    // } else {
    //   $("section.anggota .container .col-lg-12 .heading").removeAttr("style");
    // }
    // if ($(document).scrollTop() > 600) {
    //   $("section.anggota .container .image").css(
    //     "animation",
    //     "slideSection 0.5s ease"
    //   );
    //   $("section.anggota .container .image").css("opacity", "1");
    // } else {
    //   $("section.anggota .container .image").removeAttr("style");
    // }
    // if ($(document).scrollTop() > 1300) {
    //   $("section.about").css("animation", "slideSection 0.5s ease");
    //   $("section.about").css("opacity", "1");
    // } else {
    //   $("section.about").removeAttr("style");
    // }

    // if ($(document).scrollTop() > 1700) {
    //   $("section.divisi .container").css("animation", "slideSection 0.5s ease");
    //   $("section.divisi .container .heading").css("opacity", "1");
    // } else {
    //   $("section.divisi .container .heading").removeAttr("style");
    // }
  });

  btnLoad.click(function () {
    image.addClass("active");
    btnLoad.css("display", "none");
  });

  $("section.anggota .container .image").click(function () {
    $(".image-show").addClass("active");
  });

  $(".close-btn").click(function () {
    $(".image-show").removeClass("active");
  });

  $(".image-show .bg").click(function () {
    $(".image-show").removeClass("active");
  });

  // imgae-show function
  let itemIndex = 0;
  const imageShow = $(".anggota img");
  const lightboxImg = $(".image-show img");
  imageShow.each(function (i) {
    $(this).click(function () {
      itemIndex = i;
      changeItem();
    });
  });

  $(".next-btn").click(function () {
    if (itemIndex == imageShow.length - 1) {
      itemIndex = 0;
    } else {
      itemIndex++;
    }
    changeItem();
  });

  $(".prev-btn").click(function () {
    if (itemIndex == 0) {
      itemIndex = imageShow.length - 1;
    } else {
      itemIndex--;
    }
    changeItem();
    console.log(itemIndex);
  });

  function changeItem() {
    const imgSrc = imageShow[itemIndex].getAttribute("src");

    lightboxImg.attr("src", imgSrc);

    console.log("Image Berhasil Ditampilkan");
  }

  // imageShow.each((i, img) => {
  //   // imageShow[i].click(function () {
  //   //   console.log(img.src);
  //   // });
  // });
});
