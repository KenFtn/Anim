document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
});

/**********************************************************************************************************************
                                            FONCTION DU PANIER
 **********************************************************************************************************************/
(function() {
    var tabBtn=document.querySelectorAll(".add_product");
    var nbProduc= 0;
    tabBtn.forEach(btn => {
        btn.addEventListener("click", function(){
            var price="";
            nbProduc ++;
            console.log(nbProduc);
            console.log(price);
        });
    })


})();