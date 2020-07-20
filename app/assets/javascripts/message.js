$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="mainChat__message">
          <div class="mainChat__uppermessage">
            <div class="mainChat__username">
              ${message.user_name}
            </div>
            <div class="mainChat__date">
              ${message.created_at}
            </div>
          </div>
          <div class="mainChat__lowermessage">
            <div class="mainChat__comment">
              ${message.content}
            </div>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else{
      let html =
      `<div class="mainChat__message">
        <div class="mainChat__uppermessage">
          <div class="mainChat__username">
            ${message.user_name}
          </div>
          <div class="mainChat__date">
            ${message.created_at}
          </div>
        </div>
        <div class="mainChat__lowermessage">
          <div class="mainChat__comment">
            ${message.content}
          </div>
        </div>
      </div>`
    return html;
    };
  }

  $('.form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data)
      let html = buildHTML(data);
    })
  });
});