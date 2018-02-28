//These are pretty self-explanatory

$(document).ready(function () {

var rand = 0;

var quotes = ["“The way get started is to quit talking and begin doing.” -Walt Disney", 
                    "“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” -Winston Churchill",
                    "“Don’t let yesterday take up too much of today.” -Will Rogers", 
                    "“It’s not whether you get knocked down, it’s whether you get up.” – Inspirational Quote by Vince Lombardi",
                    "“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.”- Steve Jobs",
                    "“People who are crazy enough to think they can change the world, are the ones who do.”- Rob Siltanen",
                    "“Failure will never overtake me if my determination to succeed is strong enough.”- Og Mandino",
                    ]

var quotes2 = ["“Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.”- Mohnish Pabrai",
                    "“We may encounter many defeats but we must not be defeated.”- Maya Angelou",
                    "“Knowing is not enough; we must apply. Wishing is not enough; we must do.”- Johann Wolfgang Von Goethe",
                    "“Imagine your life is perfect in every respect; what would it look like?”- Brian Tracy",
                    "“Whether you think you can or think you can’t, you’re right.”- Henry Ford",
                    "“Security is mostly a superstition. Life is either a daring adventure or nothing.”- Helen Keller"]

var backs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg"]

var chill = ["1.gif", "2.gif", "3.gif", "4.gif", "5.gif", "6.gif", "7.gif", "8.gif"]

var names = ["Walt Disney", "Winston Churchill", "Will Rogers", "Vince Lombardi", "Steve Jobs", "Rob Siltanen", "Og Mandino", "Mohnish Pabrai", "Maya Angelou", "Johann Wolfgang Von Goethe", "Brian Tracy", "Henry Ford", "Helen Keller"]

var peeps = ["disney.jpg", "church.jpg", "rogers.jpg", "lombardi.jpg", "jobs.jpg", "siltanen.jpg", "mandino.jpg", "pabrai.jpg", "angelou.jpg", "goethe.jpg", "tracy.jpg", "ford.jpg", "keller.jpg"]

rand = Math.floor(Math.random() * 12) //Using math floor to get random 
	
	$('.sec1').css({'background-image':'url(img/' + backs[rand] + ')'});

    $('.foots').css({'background-image':'url(chill/' + chill[rand] + ')'});

    $('.sec1txt').find('h1').text(quotes[rand]);

    $('.sec2txt').find('h1').text(quotes2[rand]);
        
    $('.sec2').css("background",colors[rand]);

    $('.sec2txt').find('p').text(names[rand]);
    
    $('.sec2img').css({'background-image': 'url(peeps/' + peeps[rand] + '.jpg' + ')'});
   

});