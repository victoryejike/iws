$(document).ready(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
      jQuery("#scrollToTop").fadeIn();
    } else {
      jQuery("#scrollToTop").fadeOut();
    }
  });

  jQuery("#scrollToTop").click(function () {
    jQuery("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  $(".menu-toggle").click(function () {
    $(".main-navigation").toggleClass("toggled");
  });

  // $(".btn-quote").click(function() {
  //   $('#process').show();
  //   $('html,body').animate({
  //     scrollTop: $("#process").offset().top - 160
  //   }, 'slow');
  // });
  $(".btn-client-reviews").click(function () {
    $("#ClientReviews").show();
    $("html,body").animate(
      {
        scrollTop: $("#ClientReviews").offset().top - 100,
      },
      "slow"
    );
  });

  $(".get-course-btn").click(function () {
    $("#book-a-session-section").show();
    $("html,body").animate(
      {
        scrollTop: $("#book-a-session-section").offset().top - 100,
      },
      "slow"
    );
  });
  //   $(".work-review-feedback-thumb_up").click(function(){
  //     $(".fa.fa-thumbs-o-up").toggleClass("fa-thumbs-up");
  // });

  //   $(".work-review-feedback-thumb_up").click(function(){
  //     $(".work-review-feedback-thumb_up").toggleClass("active-icon-btn");
  // });

  //   $(".work-review-feedback-thumb_down").click(function(){
  //     $(".work-review-feedback-thumb_down").toggleClass("active-icon-btn");
  // });

  //   $(".work-review-feedback-thumb_down").click(function(){
  //     $(".fa.fa-thumbs-o-down").toggleClass("fa-thumbs-down");
  // });

  $("input, textarea").focus(function () {
    this.nextElementSibling.classList.remove("fixlable");
  });
  $("input, textarea").blur(function () {
    if (this.value != "") {
      this.nextElementSibling.classList.add("fixlable");
    }
  });

  $(".work-review-feedback-thumb_up").click(function () {
    $(this).toggleClass("active-icon-btn");
    this.nextElementSibling.classList.remove("active-icon-btn");
  });
  $(".work-review-feedback-thumb_down").click(function () {
    $(this).toggleClass("active-icon-btn");
    this.previousElementSibling.classList.remove("active-icon-btn");
  });

  new WOW().init();
  // $(window).on('scroll', function () {
  //     if ($(window).scrollTop() > 0) {
  //         $('.in-navigation').addClass('sticky-navbar py-1');
  //         $('.nav-link').addClass('color-black');
  //         $('.arrow').addClass('arrow-black');
  //         $('.logo-1').attr('src', 'https://res.cloudinary.com/www-innovativewebservice-com/image/upload/v1612798589/Logos/logo-2_jl0gcz.webp');
  //     } else {
  //         $('.in-navigation').removeClass('sticky-navbar py-1');
  //         $('.nav-link').removeClass('color-black');
  //         $('.arrow').removeClass('arrow-black');
  //         $('.logo-1').attr('src', 'https://res.cloudinary.com/www-innovativewebservice-com/image/upload/v1612798589/Logos/logo-1-white_evqqqo.webp');
  //     }
  // });

  $(".clients-slide").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  });
  $(".work-featured-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });

  $(".awards-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
    ],
  });

  $(".featured-review-slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
    // arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  });

  $(".module-scope-slider").slick({
    // dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    variableWidth: true,
    initialSlide: 0,
    prevArrow: $(".prevScopeArrow"),
    nextArrow: $(".nextScopeArrow"),
    // arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          prevArrow: $(".prevScopeArrow"),
          nextArrow: $(".nextScopeArrow"),
        },
      },
    ],
  });

  $(".testi-slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
  $(".w-zoom").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  setTimeout(function () {
    if ($.cookie("pop") == null) {
      // $('#myModal').modal('show');
      $.cookie("pop", "7");
    }
  }, 9000);
  if ($(".ss-slides").length) {
    $(document).smoothSlides({
      duration: 6000,
      captions: false,
      effect: "panUp",
      pagination: false,
      nextText: '<i class="fa fa-angle-right"></i>',
      prevText: '<i class="fa fa-angle-left"></i>',
      /* options seperated by commas */
    });
  }
});
//giveaway close modal
var times = document.querySelector(".times");
var giveaway = document.querySelector(".giveaway");
times.addEventListener("click", () => {
  console.log("working");
  giveaway.style.display = "none";
});

//form submit
var form = document.getElementById("my-form");
var firstName = document.getElementById("contact_firstname");
var lastName = document.getElementById("contact_lastname");
var email = document.getElementById("contact_email");
var phoneNumber = document.getElementById("phone");
var preferTime = document.getElementById("contact_prefertime");
var budget = document.getElementById("contact_budget");
var messages = document.getElementById("contact_message");

var getMainServicesBox = (chkboxName) => {
  let checkboxes = document.getElementsByName(chkboxName);
  let checkboxesChecked = [];
  // loop over them all
  for (let i = 0; i < checkboxes.length; i++) {
    // And stick the checked ones onto an array...
    if (checkboxes[i].checked) {
      checkboxesChecked.push(checkboxes[i].value);
    }
  }
  // Return the array if it is non-empty, or null
  return checkboxesChecked.length > 0 ? checkboxesChecked : null;
};

function getSubServicesBox() {
  console.log("true");
  let checkboxes = document.querySelectorAll(
    '[name="design_graphic[]"], [name="web_development[]"], [name="motion_graphic[]"], [name="mobile_app[]"], [name="Architect_service[]"], [name="Photography_service[]"], [name="Website_Maintenance[]"], [name="digital_marketing[]"], [name="content_writing[]"]'
  );
  let checkboxesChecked = [];
  for (let i = 0; i < checkboxes.length; i++) {
    // And stick the checked ones onto an array...
    if (checkboxes[i].checked) {
      checkboxesChecked.push(checkboxes[i].value);
    }
  }
  // Return the array if it is non-empty, or null
  return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const phoneValue = phoneNumber.value;
  const timeValue = preferTime.value;
  const budgetValue = budget.value;
  const mainServices = getMainServicesBox("services[]");
  const subServices = getSubServicesBox();
  // const subServices = getSubServicesBox("design_graphic[]","content_writing[]")
  const messageValue = messages.value;
  //console.log(firstNameValue, lastNameValue, emailValue, phoneValue, timeValue, budgetValue, mainServices, subServices, messageValue);

  sendEmail(
    firstNameValue,
    lastNameValue,
    emailValue,
    phoneValue,
    timeValue,
    budgetValue,
    mainServices,
    subServices,
    messageValue
  );
  form.reset();
});

var sendEmail = (
  firstname,
  lastname,
  email,
  phone,
  time,
  budget,
  mainCategory,
  subCategory,
  message
) => {
  // console.log(name, email, password);
  Email.send({
    Host: "smtp.innovativewebservice.com",
    Username: "info@innovativewebservice.com",
    Password: "Iws@2020",
    To: "info@innovativewebservice.com",
    From: "info@innovativewebservice.com",
    Subject: `New Submission from Contact Us Form`,
    Body: `<tbody>
        <tr>
            <td width="90%" valign="top">
                <div>
                    <table bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" width="90%" style="margin-left:auto;margin-right:auto;margin-top:25px;margin-bottom:15px" dir="ltr">
                        <tbody>
                            <tr>
                                <td width="45%" bgcolor="#ffffff" style="text-align:left">
                                    <a href="https://www.activebug.com" target="_blank"><img src="https://drive.google.com/file/d/1Y9fVWr0umrL3MCQNH2XEsbi7MD3d6voK/view?usp=sharing" alt="Active-Bug" class="logo-1" style="display:inline-block;max-width:100%!important;width:auto!important;height:auto!important" border="0" class="CToWUd">
                                    </a>
                                </td>
                                <td width="55%" bgcolor="#ffffff"></td>
                            </tr>
                        </tbody>
                    </table>
                    <table bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" width="90%" style="margin:0 auto;border-top:1px solid #cccccc;padding-top:25px" dir="ltr">
                        <tbody>
                            <tr>
                                <td width="100%" valign="top" bgcolor="#ffffff" style="text-align:left">

                                    <table border="0" cellspacing="0" cellpadding="0" dir="ltr">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p style="text-align:left;color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;margin:0px;padding:0;margin-top:10px;font-weight:bold">Dear Active Bug Rep,</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table border="0" cellspacing="0" cellpadding="0" dir="ltr">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p style="text-align:left;color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;margin:0px;padding:0;margin-top:10px;font-weight:normal">We've got new business proposal from <b>${firstname}</b>.
                                                        <br>Below are the details of the client.</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table border="0" cellspacing="10" cellpadding="10" dir="ltr">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p style="text-align:left;color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;margin:0px;padding:0;margin-top:10px;font-weight:normal">Firstname: <b>${firstname}</b></p>
                                                    <p style="text-align:left;color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;margin:0px;padding:0;margin-top:10px;font-weight:normal">Lastname: <b>${lastname}</b></p>
                                                    <p style="text-align:left;color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;margin:0px;padding:0;margin-top:10px;font-weight:normal">Email: <b>${email}</b></p>
                                                    <p style="text-align:left;color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;margin:0px;padding:0;margin-top:10px;font-weight:normal">Phone: <b>${phone}</b></p>
                                                    <p style="text-align:left;color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;margin:0px;padding:0;margin-top:10px;font-weight:normal">Preferred Time: <b>${time}</b></p>
                                                    <p style="text-align:left;color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;margin:0px;padding:0;margin-top:10px;font-weight:normal">Budget: <b>${budget}</b></p>
                                                    <p style="text-align:left;color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;margin:0px;padding:0;margin-top:10px;font-weight:normal">Main Service(s): <b>${mainCategory}</b></p>
                                                    <p style="text-align:left;color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;margin:0px;padding:0;margin-top:10px;font-weight:normal">Main Service(s): <b>${subCategory}</b></p>
                                                    <p style="text-align:left;color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;margin:0px;padding:0;margin-top:10px;font-weight:normal">Message: <b>${message}</b></p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </tr>
                            <tr>
                                <td>
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" dir="ltr">
                                        <tbody>
                                            <tr>
                                                <td width="100%" valign="top" bgcolor="#ffffff" style="text-align:left">

                                                    <table style="text-align:left" width="100%" border="0" cellpadding="0" cellspacing="0" dir="ltr">
                                                        <tbody>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align:left" dir="ltr">
                                                                    <span style="color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:19px;margin:0;padding:0;padding-bottom:10px;font-weight:normal">
                                                                        <br>
                                                                        <p>Thank you, Innovative Web Service</p>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                    <table style="margin:0 auto;text-align:left" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" width="100%" dir="ltr">
                                                        <tbody>
                                                            <tr>
                                                                <td width="100%" bgcolor="#ffffff" style="text-align:left;padding-top:10px">
                                                                    <div style="display:block;max-width:100%!important;width:100%!important;height:auto!important;padding-top:5px;padding-right:0px;padding-bottom:5px">
                                                                        <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom:10px;padding-bottom:20px;text-align:left">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>
                                                                                        <div style="text-align:center;margin-left:3px;margin-right:3px">
                                                                                            <a href="#"><img src="https://ci5.googleusercontent.com/proxy/Hp1tHwpZJplBQHTr-WRQujyXVO54yAQdUwALRHoIu3TW_4YDZ6B6Ls74s-w-3MEDpMW9F5Bc8V4B2IT49EMXsm4X1qqiK8IjzmNO4S_OfAs-tByTjpOe2-uS3s3hY3HTf5w=s0-d-e1-ft#http://pubs.payoneer.com/EmailSender/Payoneer/img/Default/BlocksTemplate/fb.jpg" border="0" alt="Facebook" class="CToWUd"></a>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div style="text-align:center;margin-left:3px;margin-right:3px">
                                                                                            <a href="#"><img src="https://ci6.googleusercontent.com/proxy/IrEOgUYJAxNOXCfkCzRhp3Pr5plttxi_SK_vo7HZtMFa9MnD5KZqMxD0PxnsIjARnAifRp7OuUYYY20Bx98L__qgfC-G266Bqx7WcwKAYkekf1hLO0pZhaVmV4UfPbaFNGY=s0-d-e1-ft#http://pubs.payoneer.com/EmailSender/Payoneer/img/Default/BlocksTemplate/tw.jpg" border="0" alt="Twitter" class="CToWUd"></a>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div style="text-align:center;margin-left:3px;margin-right:3px">
                                                                                            <a href="#"><img src="https://ci6.googleusercontent.com/proxy/BBjsFigvYDp0PT-b94ETYc7WSfGfoM6FGTJqeLE4twWSHEMs_hzt4NjPmtA_RkcJUPXv2xZI6yLiYsgSEpldVZ49jzuRngt2mFvNZCkGxGhGitIl9O7XVqsilGoehTQNH9c=s0-d-e1-ft#http://pubs.payoneer.com/EmailSender/Payoneer/img/Default/BlocksTemplate/gp.jpg" border="0" alt="Google+" class="CToWUd"></a>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div style="text-align:center;margin-left:3px;margin-right:3px">
                                                                                            <a href="#"><img src="https://ci6.googleusercontent.com/proxy/KSBDtD0zHbN5XeL5qH34sW3-l80xoG-w0BBfwWJAKOpm5TzMSQdySc4IybYGoQHKjT_Wo3UDUSeCtTIWDxoIky3CVQs4NQ208Te17XQNfgN2coi-_NX4ppd5lt40uL9B-LE=s0-d-e1-ft#http://pubs.payoneer.com/EmailSender/Payoneer/img/Default/BlocksTemplate/li.jpg" border="0" alt="LinkedIn" class="CToWUd"></a>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div style="text-align:center;margin-left:3px;margin-right:3px">
                                                                                            <a href="#"><img src="https://ci4.googleusercontent.com/proxy/cqBt0SYqEkz5P5RlEVBOgBiEsYGuAGdvEGnMKJY7Pny4E4Fc4Wh2XESh_BSxyR0kc6MwhSZ90frj3Z0X3li2uWsh2aqA78SPkhL0ypAuvU4H_SC5HzvlUoN3eE5687knUrE=s0-d-e1-ft#http://pubs.payoneer.com/EmailSender/Payoneer/img/Default/BlocksTemplate/yt.jpg" border="0" alt="YouTube" class="CToWUd"></a>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div style="text-align:center;margin-left:3px;margin-right:3px">
                                                                                            <a href="#"><img src="https://ci3.googleusercontent.com/proxy/KbRsLtM6Tt_5WQ1KD0uQZbleJrX57shJHjAl-Q-22_EWKFRHSfwaTT01nn6-Us9UGK7tf6Stejz75pXeyloTMQkliiiNCPDM4BFzwy2re5LLocKHIUpXEGk24yWVd8LFeM0=s0-d-e1-ft#http://pubs.payoneer.com/EmailSender/Payoneer/img/Default/BlocksTemplate/dm.jpg" border="0" alt="Daily Motion" class="CToWUd"></a>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div style="text-align:center;margin-left:3px;margin-right:3px">
                                                                                            <a href="#"><img src="https://ci5.googleusercontent.com/proxy/rpg3zp0WxpShFlnlHixxo58WD_aYFe0BZZ-i70C1LyHXmyf6pCshmAS4YBnHqnYMoTPCO5DZCtd9Tb8LxhkMRi9PHjdutzfPbDd96yz8mXlnWY0EQt5F-wpcTVic5ol_hXw=s0-d-e1-ft#http://pubs.payoneer.com/EmailSender/Payoneer/img/Default/BlocksTemplate/pf.jpg" border="0" alt="Payoneer Forum" class="CToWUd"></a>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div style="text-align:center;margin-left:3px;margin-right:3px">
                                                                                            <a href="#"><img src="https://ci6.googleusercontent.com/proxy/c7QzBNmXEykgKL6RatCuImsz1OubpXIF2j5HfEdNqHhSRExNZTWFmGY2kSqjkIX5ND3S_Nr2rlXVlC_GDNaaEXs5-VmzqmF2KfSeUDvYUi580MHWGee66ziaSmy5_nTWTVQ=s0-d-e1-ft#http://pubs.payoneer.com/EmailSender/Payoneer/img/Default/BlocksTemplate/pb.jpg" border="0" alt="Payoneer Blog" class="CToWUd"></a>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>                                                                                                                                                                                                                                                                                                               
                </div>
            </td>
        </tr>
    </tbody>`,
  }).then((message) => alert("Form Submission Successfull!"));
};
