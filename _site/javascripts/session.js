(function(){ 
    
    function showTopic(loadurl) {
        $.get(loadurl, function(data) {
            $('#topic-data').html(data);
            /* run the async gist script to show any gists */
            loadGists();
        });    
    }
    
    var $topicLinks = $('a.topic-link');
    
    var firstTopicUrl = $topicLinks.first().attr('href');
    showTopic(firstTopicUrl);

    $topicLinks.click(function(e) {
        e.preventDefault();
        var loadurl = $(this).attr('href');
        showTopic(loadurl);

        return false;
    });

    
}())