var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Welcome to Minimal Mistakes Jekyll",
      excerpt: "Welcome to the first blog posts of Minimal Mistakes Jekyll. You may edit the title, date, categories, and tags of...",
      categories: ["update"],
      tags: ["jekyll"],
      id: 0
    });
    
  
    idx.add({
      title: "Math Support",
      excerpt: "You can enable math support through use_math: true front matter which enable the MathJax.js rendering. After enable math support, use...",
      categories: [],
      tags: ["MathJax"],
      id: 1
    });
    
  
    idx.add({
      title: "Sample Post",
      excerpt: "Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sem efficitur, accumsan erat at, molestie dui....",
      categories: ["sample"],
      tags: [],
      id: 2
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Welcome to Minimal Mistakes Jekyll",
        "url": "/update/welcome-to-minimal-mistakes-jekyll/",
        "excerpt": "Welcome to the first blog posts of Minimal Mistakes Jekyll. You may edit the title, date, categories, and tags of...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Math Support",
        "url": "/math-support/",
        "excerpt": "You can enable math support through use_math: true front matter which enable the MathJax.js rendering. After enable math support, use...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Sample Post",
        "url": "/sample/sample-post/",
        "excerpt": "Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sem efficitur, accumsan erat at, molestie dui....",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
