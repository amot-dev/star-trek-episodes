var mainURL = "https://memory-alpha.fandom.com"
var episodes = [];
var load = $('<div>');

$(document).ready(function(){
	//set the series URL to the correct series
	if (document.title == "The Original Series") seriesURL = mainURL + "/wiki/Star_Trek:_The_Original_Series"
	else if (document.title == "The Animated Series") seriesURL = mainURL + "/wiki/Star_Trek:_The_Animated_Series"
	else if (document.title == "The Next Generation") seriesURL = mainURL + "/wiki/Star_Trek:_The_Next_Generation"
	else if (document.title == "Deep Space Nine") seriesURL = mainURL + "/wiki/Star_Trek:_Deep_Space_Nine"
	else if (document.title == "Voyager") seriesURL = mainURL + "/wiki/Star_Trek:_Voyager"
	else if (document.title == "Enterprise") seriesURL = mainURL + "/wiki/Star_Trek:_Enterprise"
	else if (document.title == "Discovery") seriesURL = mainURL + "/wiki/Star_Trek:_Discovery"
	else if (document.title == "Picard") seriesURL = mainURL + "/wiki/Star_Trek:_Picard"

	$(".num").each(function(i){
		episodes[i] = $(this).text();
	});
	for (let i=0;i<episodes.length;i++){
		setEpisodeURL(i);
		setTimeout(function() {
			setTitles(i);
			setDescriptions(i);
			setImages(i);
		}, 6000);
	}
});

function setEpisodeURL(i){
	load.load(seriesURL + " td", function(){
		episodeURL = mainURL + load.find("td:contains('" + episodes[i] + "')").prev().find('a').attr('href');
		$('.episode').eq(i).find('a').attr('href', episodeURL);
	});
}
function setTitles(i){
	url = $('.episode').eq(i).find('a').attr('href') + " .pi-title";
	load.load(url, function(){
		episodeTitle = load.text();
		episodeTitle = episodeTitle.replace(/"/g, '');
		$('.episode').eq(i).find('h3').text(episodeTitle);
	});
}
function setDescriptions(i){
	url = $('.episode').eq(i).find('a').attr('href') + " p:lt(1)";
	load.load(url, function(){
		episodeDescription = load.text();
		$('.episode').eq(i).find('p').text(episodeDescription);
	});
}
function setImages(i){
	url = $('.episode').eq(i).find('a').attr('href') + " .image-thumbnail:lt(1)";
	load.load(url, function(){
		episodeImage = load.find("img").attr('src');
		$('.episode').eq(i).find('img').attr('src', episodeImage);
	});
}