(function(){
    var beginning = "You are a";

    var adjective = ["foul", "bad", "caring", "calamitous",
		     "damnable", "handsome", "intelligent", "brilliant",
		     "strong", "smart", "nefarious", "powerful", "great",
		     "quick", "perfect", "flawless", "skilled",
		     "talented", "smart", "offensive", "spiteful",
		     "selfish", "focused", "undefeated", "unbeatable",
		     "awesome", "incredible", "fantastic", "heinous",
		     "lovely", "dashing", "funny", "sharp", "crazy",
		     "shining", "devilish", "fantastic", "irreplaceable",
		     "unique", "valuable", "magical", "diabolical", "bad", "execrable", "iconic",
		     "masterful", "unmistakable", "unbreakable", "goetic", "revolting", "wrathful",
		     "adventurous", "ambitious", "brave", "bright", "single-minded", "malevloent", "hideous",
		     "spiteful", "injurious", "decisive", "iniquitous", "atrocious", "enthusiastic",
		     "faithful", "fearless", "stingy", "base", "helpless", "dishonest", "intuitive", "pesimistic", "low",
		     "impolite", "dull-witted", "irrational", "self-indulgent", "disciplined", "crooked", "darkhearted"];

    var noun = ["human being", "person", "demi-god",
		"symbol", "warrior", "master", "nemesis",
		"maker", "blade", "thorn", "lord of lords", "warrior",
		"idol", "king of kings", "genius", "hole", "supernova",
		"usurper", "conqueror", "god", "inspiration", "commander",
		"deity", "success", "example", "leader", "team of one",
		"thinker", "vanquisher", "taker", "go-getter", "human",
		"vindicator", "achiever", "asset", "victor", "dictator",
		"tyrant"];

    window.getCompliment = getCompliment;
    getCompliment();
    //window.onclick = getCompliment;
    function getCompliment()
    {
	var a = Math.floor((Math.random() * adjective.length) + 1) - 1;
	var n = Math.floor((Math.random() * noun.length) + 1) - 1;
	var rb = beginning;
	if(adjective[a].toLowerCase().charAt(0) == "a" ||
	   adjective[a].toLowerCase().charAt(0) == "e" ||
	   adjective[a].toLowerCase().charAt(0) == "i" ||
	   adjective[a].toLowerCase().charAt(0) == "o" ||
	   adjective[a].toLowerCase().charAt(0) == "u")
	{
	    rb += "n";
	}
	document.getElementById("compliment").innerHTML =
	    rb + " <strong>" + adjective[a] + "</strong> " + noun[n] + ".";
	return false;
    }
}());
