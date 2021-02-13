// console.log("i can see you");
var portfolioForm = document.querySelector(".book-portfolio-form");
var portfolioDetails = document.querySelectorAll(".form-control");
var portfolioFormName = document.querySelector("h1");

portfolioForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const firstName = portfolioDetails[0].value;
    const email = portfolioDetails[1].value;
    const subject = portfolioDetails[2].value;
    const message = portfolioDetails[3].value;
    const portfolioName = portfolioFormName.innerText;
    
    sendEmail(firstName, email, subject, message, portfolioName);
})

var sendEmail = (firstname, email, subject, message, formName) =>{
    
    Email.send({
        Host : "smtp.innovativewebservice.com",
        Username : "info@innovativewebservice.com",
        Password : "Iws@2020",
        To : 'info@innovativewebservice.com',
        From : "info@innovativewebservice.com",
        Subject : `New Submission from ${formName}'s Form`,
        Body : `<tbody>
        <tr>
            <td width="90%" valign="top">
                <div>
                    <table bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" width="90%" style="margin-left:auto;margin-right:auto;margin-top:25px;margin-bottom:15px" dir="ltr">
                        <tbody>
                            <tr>
                                <td width="45%" bgcolor="#ffffff" style="text-align:left">
                                    <a href="https://www.activebug.com" target="_blank">
                                    <img img src="https://drive.google.com/uc?export=view&id=1agEDvtnEHXkIQM_Nm90HtdP1jVN1H-cE"
                                    style="width: 500px; max-width: 100%; height: auto" alt="Active-Bug" class="logo-1 display:inline-block;max-width:100%!important;width:auto!important;height:auto!important" border="0">
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
                                                    <p style="text-align:left;color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;margin:0px;padding:0;margin-top:10px;font-weight:normal">There's a contact interest from <b>${firstname}</b>.
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
                                                    
                                                    <p style="text-align:left;color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;margin:0px;padding:0;margin-top:10px;font-weight:normal">Email: <b>${email}</b></p>
                                                    <p style="text-align:left;color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;margin:0px;padding:0;margin-top:10px;font-weight:normal">Phone: <b>${subject}</b></p>
                                                    <p style="text-align:left;color:#333333;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;margin:0px;padding:0;margin-top:10px;font-weight:normal">Message/Query: <b>${message}</b></p>
                                                    
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
    }).then(
      message => alert("Form Submission Successful")
    );
}
