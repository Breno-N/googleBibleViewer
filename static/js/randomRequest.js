$(document).ready(function(){

    $.getJSON("https://www.abibliadigital.com.br/api/verses/nvi/random")
        .done(function(data){

            var book = data.book.name;
            var group = data.book.group;

            var chapter = data.chapter;
            var number = data.number;
            var text =  data.text;

            var bookGroup = "<h1>Livro " + book + " " + group + "</h1>";
            var chapterNumber = "<h3>Capítulo " + chapter + ", Versículo " + number + "</h3>";

            $(".book-group").html(bookGroup);
            $(".chapter-number").html(chapterNumber);
            $(".text").html("<h2><cite>" + text + "</cite></h2>");
        })
        .fail(function(jqxhr, textStatus, error){

            $(".book-group").html("<h1>Desculpe o inconveniente!</h1>");
            $(".text").html("<h2>Tente novamente mais tarde.</h2>");

            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });
});