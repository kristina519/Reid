$(document).ready(function(){
    getHeader()

    getFooter()
})


$(window).scroll(function(){
    if(window.pageYOffset>50){
        $("header").addClass("headerColor")

        $("#backToTop").removeClass("d-none")

        
        if($("#themeToggle").hasClass("darkTheme")){
            $("header").addClass("yellowTheme")

        }
        else{
            $("header").addClass("headerColor")
            $("header").removeClass("yellowTheme")
        }
    }
    else{
        if($("nav").hasClass("d-none")){
            $("header").removeClass("headerColor")
            $("header").removeClass("yellowTheme")
        }

        $("#backToTop").addClass("d-none")
    }
})


$("#scroll a").on("click",function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});


function getHeader(){
    let print=''
    print+=`<div id="Logo"><a class="text-decoration-none fw-bold text-secondary text-uppercase fs-3" href="index.html">Reid</a></div>
            <div class="d-flex align-items-center">
                <a href="#" id="themeToggle"><i class="fas fa-toggle-on fs-2 mx-2"></i></a>
                <a href="#" id="card"><i class="fas fa-shopping-cart fs-4 card-up mx-2"></i></a>
                <a href="#" id="hamburger" class="hamburger text-secondary"><i class="fas fa-bars fs-4 mx-2"></i></a>
            </div>`


        
    $('header').html(print)

    getMenu()

    $("#hamburger").on("click",showMenu)

    $("#themeToggle").on("click",themeToggle)
}

function themeToggle(e){
    e.preventDefault()
    if($("#themeToggle").hasClass("darkTheme")){
        ///remove dark
        $("#themeToggle").removeClass("darkTheme")

        
        $("#themeToggle").removeClass("darkTheme")
        $("body").removeClass("bg-dark")
        $("p").removeClass("text-light")
        $("h1").removeClass("text-light")
        $("h2").removeClass("text-light")
        $("h3").removeClass("text-light")
        $("footer").removeClass("yellowTheme")
        $("label").removeClass("text-light")
        // $("#best a i").removeClass("text-light")
        $(".form-control").removeClass("text-light")

        $("#slider h1").removeClass("text-light")
        $("#slider p").removeClass("text-light")
        // $(".old-price").addClass("text-danger")

        $("nav").removeClass("yellowTheme")
        $("header").removeClass("yellowTheme")

        $(".view i").removeClass("text-light")
    }
    else{
        ///add dark
        $("#themeToggle").addClass("darkTheme")
        $("body").addClass("bg-dark")
        $("p").not($(".old-price")).not($(".text-success")).addClass("text-light")
        $("h1").addClass("text-light")
        $("h2").addClass("text-light")
        $("h3").addClass("text-light")
        $("footer").addClass("yellowTheme")
        // $("#best a i").addClass("text-light")
        $("nav").addClass("yellowTheme")
        $("label").addClass("text-light")
        $(".form-control").addClass("text-light")

        $("#slider h1").removeClass("text-light")
        $("#slider p").removeClass("text-light")
        // $(".old-price").removeClass("text-light")
        $(".view i").addClass("text-light")

        if(!$("nav").hasClass("d-none")){
            $("header").addClass("yellowTheme")
        }

        if(window.pageYOffset>50){
            $("header").addClass("yellowTheme")
        }
    }
}

function getMenu(){
    var menuNames=['Home','Men','Women','About','Contact','Author']
    var menuLinks=['index.html','men.html','women.html','about.html','contact.html','author.html']
    let print=''
    print+=`<nav class="col-12 d-none"><ul class="text-end">`
    for(let i=0;i<menuNames.length;i++){
        print+=`<li><a class="text-decoration-none text-uppercase fs-4" href="${menuLinks[i]}">${menuNames[i]}</a></li>`
    }
    print+=`</ul></nav>`
    document.getElementById("header").innerHTML+=print

}
function getFooter(){
    var footer=document.createElement("footer");
    footer.setAttribute("class","p-4 d-flex justify-content-between flex-wrap");
    $("body").append(footer)


    var footerInformations=document.createElement("div")
    var footerContact=document.createElement("div")

    footerInformations.setAttribute("class","col-10 col-md-6")
    footerContact.setAttribute("class","col-10 col-md-6")

    footer.append(footerInformations)
    footer.append(footerContact)

    footerInformations.innerHTML=`<h3>Informations</h3>
    <p>Stores</p>
    <p>Adress: Princess Road 55</p>
    <p>Phone: +385/555-555</p>
    <p>Adress: King James street 156</p>
    <p>Phone: +385/665-335</p>
    `

    footerContact.innerHTML=`<h3>Contact Us</h3>
    <p>Address: 6688 Princess Road, London, Greater London BAS 23JK, UK</p>
    <p>Phone: (+012) 800 456 789 - 987</p>
    <p>Email: reid@gmail.com</p>
    `

    var networks=['fa-facebook-f','fa-instagram','fa-youtube','fa-twitter']
    var networksLinks=['https://www.facebook.com','https://www.instagram.com','https://www.youtube.com','https://www.twitter.com/']

    for(let i=0;i<networks.length;i++){
        footerContact.innerHTML+=`<a target="_blank" class="px-3 py-2 me-2 rounded-circle bg-light border-1 text-dark fs-5" href="${networksLinks[i]}"><i class="fab ${networks[i]}"></i></a>`
    }

    footerContact.innerHTML+=`<br/><br/><a class="text-decoration-none text-dark" href="doc.pdf">Documentation</a>`
}

function showMenu(e){
    e.preventDefault()
    if($("nav").hasClass("d-none")){
        $("nav").removeClass("d-none")
        $("#hamburger").html(`<i class="fas fa-times fs-4 mx-2"></i>`)

        if($("#themeToggle").hasClass("darkTheme")){
            $("nav").addClass("yellowTheme")
            $("header").addClass("yellowTheme")


            $("nav").removeClass("headerColor")
            $("header").removeClass("headerColor")
        }
        else{
            $("nav").addClass("headerColor")
            $("header").addClass("headerColor")
        }
    }
    else{
        $("nav").addClass("d-none")
        $("#hamburger").html(`<i class="fas fa-bars fs-4 mx-2"></i>`)
        $("header").removeClass("headerColor")
        $("nav").removeClass("headerColor")
        $("header").removeClass("yellowTheme")
    }
}


let url=location.href;


function getSlider(){
    var slider=document.querySelector("#sliderImage");
    var imagesSrc=["slider13.jpg","slider14.jpg","slider15.jpg"];
    var i=0;
    function loadSlider(){
        slider.src="assets/images/"+imagesSrc[i];
        if(i<imagesSrc.length-1) i++;
        else i=0;
        setTimeout(loadSlider, 3000);
    };
    loadSlider();
}

function getCategories(){
    
    var categoriesImages=['shipping.png','shipping1.png','shipping2.png','shipping3.png','shipping4.png','shipping5.png']

    var categoryNames=['Backpak','Hooded Jacket','Lingerie Women','Sneaker','Socks','Clothing',]

let print=''
for(let i=0;i<categoriesImages.length;i++){
    print+=`<div class='item text-center'><img alt="Category" class="img-fluid" src='assets/images/${categoriesImages[i]}'/><p class="mt-4 fs-6 fw-bolder">${categoryNames[i]}</p></div>`
}

document.getElementById("categories").innerHTML+=print

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        60:{
            items:3
        },
        100:{
            items:5
        }
    }
})
}

///top products
var topProducts=['T-Shirt','Trousers','Jacket','T-Shirt']
var topProductsImages=['product9.webp','product3.webp','product14.webp','product8.webp']
var topProductsPrices=[25,35,50,20]
var topProductsOldPrices=[35,null,null,30]
var topProductRate=[5,3,3,4]

///men products
var menProducts=['T-Shirt','Shorts','Jeans','Joggers','Hoodie','Jacket','Jeans','Hoodie']
var menProductsImages=['product9.webp','product10.webp','product11.webp','product12.webp','product13.webp','product14.webp','product15.webp','product16.webp']
var menProductsPrices=[25,20,66,30,20,44,30,20]
var menProductsOldPrices=[35,null,null,45,30,45,null,30]
var menProductRate=[5,5,3,2,5,5,3,2]


///woman products
var womanProducts=['Sweatshirt','Jeans','Trousers ','Dress','T-Shirt','Leather Jacket','Jacket','T-Shirt']
var womanProductsImages=['product1.webp','product2.webp','product3.webp','product4.webp','product5.webp','product6.webp','product7.webp','product8.webp']
var womanProductsPrices=[55,44,35,50,15,60,40,20]
var womanProductsOldPrices=[66,null,null,60,20,null,45,30]
var womanProductRate=[5,5,3,2,5,5,3,2]


function printProducts(products,productsImages,productsPrices,oldPrices,productRate){
    let print=''

    for(let i=0;i<products.length;i++){
        print+=`<div class="col-6 col-md-3 px-4 my-3 product">
                <div class="my-2 text-center"><img class="img-fluid" src="assets/images/${productsImages[i]}"/></div>
                <p class="productName">${products[i]}</p>`
                if(oldPrices[i]!=null){
                    print+=`<p class="old-price text-decoration-line-through me-5 text-danger">${oldPrices[i]} $</p>`
                }
                else{
                    print+=`<p>&nbsp;</p>`
                }
                print+=`<p class="fw-bolder">${productsPrices[i]} $</p>`
                
                for(let j=1;j<=5;j++){
                    if(j<=productRate[i]){
                        print+=`<i class="fas fa-star"></i>`
                    }
                    else{
                        print+=`<i class="far fa-star"></i>`
                    }
                }
                print+=`<a href="#" class="add-to-card"><i class="fas fa-shopping-cart card-position fs-4"></i></a>`
                print+=`</div>`
    }


    $("#topProducts").html(print)

    $("#productsNumber").html(products.length)

    $(".add-to-card").on("click",addToCard)

    $(".product").hover(
        function(){
            if($("#themeToggle").hasClass("darkTheme")){
                $(this).removeClass("shadow")
                $(this).addClass("shadow-dark")
            }
            else{
                $(this).addClass("shadow")
            }
        },
        function(){
            $(this).removeClass("shadow-dark")
            $(this).removeClass("shadow")
        })


}
function addToCard(e){
    e.preventDefault()
    $(".card-up").addClass("card-added")
    if($(".card-up").hasClass("card-animation")){
        $(".card-up").removeClass("card-animation")
    }
    else{
        $(".card-up").addClass("card-animation")
    }
    $(this).addClass("card-added")
}

var newsTitle=['Reid gets tiktok','Opening of the month'];
var newsContent=['We are now on TikTok! The social media platform is experiencing a real hype and we want to prove that fashion means more than just clothes. Find out more here and become part of our community!','On Thursday, August 19, 2021, we are celebrating a great opening party! 3 new stores in Belgrade, Amsterdam and Paris. We are expecting you at the opening. Big discounts are waiting for you! Stores Locations : Belgrade - Bulevar Kralja Aleksandra 55, Amsterdam : Leidsestraat 7, Paris : 62 Rue Bonaparte']
var newsImage=['tiktok.png','opening.jpg']
function getNews(){

    let print=''

    for(let i=0;i<newsTitle.length;i++){
        print+=`<div class="col-12 my-4 d-flex justify-content-around flex-wrap">
                    <div class="col-10 col-md-6 my-2"><img class="img-fluid" src="assets/images/${newsImage[i]}" alt="${newsTitle[i]}"/></div>
                    <div class="col-10 col-md-6">
                        <h3 class="text-uppercase">${newsTitle[i]}</h3>
                        <p class="mt-5" data-id="${i}">${newsContent[i].substring(0,150)}... <a href="#" class="news-more text-decoration-none">Read more</a></p>
                    </div>
                </div>`
    }

    $("#news-container").html(print)

    $(".news-more").on("click",moreTextNews)
}
function moreTextNews(e){
    e.preventDefault()
    var text=$(this).parent()
    var clicked=$(this).parent().attr("data-id")

    text.html(newsContent[clicked])
}

function getNumbers(){
    var divOffset=document.getElementsByClassName("stats")[0].offsetTop;
    console.log(divOffset)
    $(window).scroll(function(){
        if(window.pageYOffset>divOffset){
            function tajmer(i,number,div){
                setInterval(() => {
                    if(i<=number){
                        $(div).html(i)
                    }
                    if(i>number){
                        clearInterval()
                    }
                    i++
                })
            }
            tajmer($("#users").text(),1000,"#users")
            tajmer($("#awards").text(),153,"#awards")
            tajmer($("#hours").text(),455,"#hours")
            tajmer($("#delivery").text(),60,"#delivery")
        }
    })
}


function getAnimatin(){
    setInterval(function(){
        $("#sneakerAnimation").animate({
            left: "75%"
        },5000).animate({
            left: "0%"
        },5000)
    })

    setInterval(function(){
        if($("#sneakerAnimation").hasClass("left")){
            $("#sneakerAnimation").addClass("right")
            $("#sneakerAnimation").removeClass("left")
        }
        else{
            $("#sneakerAnimation").addClass("left")
            $("#sneakerAnimation").removeClass("right")
        }
    },5000)
}

if(url.indexOf("index.html")!=-1){
    getSlider()
    getCategories()
    printProducts(topProducts,topProductsImages,topProductsPrices,topProductsOldPrices,topProductRate)
    getNews()
    getNumbers()
    getAnimatin()
}


if(url.indexOf("men.html")!=-1){
    printProducts(menProducts,menProductsImages,menProductsPrices,menProductsOldPrices,menProductRate)
}



if(url.indexOf("women.html")!=-1){
    printProducts(womanProducts,womanProductsImages,womanProductsPrices,womanProductsOldPrices,womanProductRate)
}


if(url.indexOf("women.html")!=-1 || url.indexOf("men.html")!=-1){
    $(".view").on("click",function(e){
        e.preventDefault()
        $(".product").removeClass("col-md-3")
        $(".product").removeClass("col-md-2")
        $(".product").removeClass("col-md-4")
        $(".product").removeClass("col-6")
        $(".product").removeClass("col-4")
        $(".product").removeClass("col-3")
        $(".product").addClass(this.dataset.id)
    })
}

if(url.indexOf("contact.html")!=-1){
    $("#btnSend").on("click",function(){
        $("#messageSuccess").removeClass("d-none")
        $("input").val("")
        $("textarea").val("")
        document.getElementById("btnSend").classList.add("disabled")
        $("input").removeClass("border-success")
        $("textarea").removeClass("border-success")
        $("input[type=radio]").prop('checked', false);
    })
    $("#rate").change(getRateValue)
    $("input[name='rateShop']").change(getRate2Value)


    var email=document.getElementById("email")
    var phone=document.getElementById("phone")
    var subject=document.getElementById("subject")
    var message=document.getElementById("message")
    var rate=document.getElementById("rate")
    var rateShop=$("input[name='rateShop']:checked")


    var 
    Email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var regTelefon=/^06[012345679]\d{6,7}$/;
    var regSubject=/^[A-ZŠĐŽČĆ][a-zšđžčć]{2,}(\s[a-z]{2,}){0,2}$/;

    var err=0;

    function emailCheck(){
        checkAll()
    }

    function subjectCheck(){
        checkAll()
    }

    function phoneCheck(){
        checkAll()
    }

    function messageCheck(){
        checkAll()
    }

    function rateCheck(){
        checkAll()
    }

    function rateShopCheck(){
        checkAll()
    }

    email.addEventListener("keyup",emailCheck)
    phone.addEventListener("keyup",phoneCheck)
    subject.addEventListener("keyup",subjectCheck)
    message.addEventListener("keyup",messageCheck)
    rate.addEventListener("change",rateCheck)
    rateShop.change(rateShopCheck)

}


function checkAll(){
    var rateShop=$("input[name='rateShop']:checked")
    var err=0
    if(!regEmail.test(email.value)){
        document.getElementById("errEmail").innerHTML='E-mail eg. kristina@gmail.com or kristina.mladenovic.5.19@ict.edu.rs'
        $("#email").addClass("border-danger")
        $("#email").removeClass("border-success")
        err++
    }
    else{
        document.getElementById("errEmail").innerHTML=''
        $("#email").addClass("border-success")
        $("#email").removeClass("border-danger")
    }
    if(message.value.split(" ").length<10){
        document.getElementById("errMessage").innerHTML="Message has 10 words minimum"
        $("#message").addClass("border-danger")
        $("#message").removeClass("border-success")
        err++
    }
    else{
        document.getElementById("errMessage").innerHTML=""
        $("#message").addClass("border-success")
        $("#message").removeClass("border-danger")
    }
    if(!regTelefon.test(phone.value)){
        document.getElementById("errPhone").innerHTML='Phone format 06XXXXXXX(X)'
        $("#phone").addClass("border-danger")
        $("#phone").removeClass("border-success")
        err++
    }
    else{
        document.getElementById("errPhone").innerHTML=''
        $("#phone").addClass("border-success")
        $("#phone").removeClass("border-danger")
    }
    if(!regSubject.test(subject.value)){
        document.getElementById("errSubject").innerHTML='Subject has one word minimum with capital letter, maximum 3 words with lowercase. Every word has minimum 2 letters'
        $("#subject").addClass("border-danger")
        $("#subject").removeClass("border-success")
        err++
    }
    else{
        document.getElementById("errSubject").innerHTML=''
        $("#subject").addClass("border-success")
        $("#subject").removeClass("border-danger")
    }
    if(document.getElementById("rate").value==0){
        document.getElementById("errRate").innerHTML="You have to choose number grater than 0"
        err++
    }
    else{
        document.getElementById("errRate").innerHTML=""
    }
    if(rateShop.length==0){
        err++
        document.getElementById("errRate2").innerHTML="You have to choose rate"
    }
    else{
        document.getElementById("errRate2").innerHTML=""
    }


    if(err==0){
        document.getElementById("btnSend").classList.remove("disabled")
    }

   
}

function getRateValue(){
    $("#rangeValue").html(this.value)
    if(this.value==0){
        document.getElementById("btnSend").classList.add("disabled")
    }
}

function getRate2Value(){
    checkAll()
    document.getElementById("errRate2").innerHTML=""
}
