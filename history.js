
// pictureCard
function pictureCardFormat() {
    document.getElementById("historypointdiv").innerHTML +=
    '<div class="card border-secondary text-center"> \
      <img src="./assets/images/' + historyCardData[i].imageSource + '" class="card-img" alt="' + historyCardData[i].imageAlt + '"> \
      <div class="card-img-overlay"> \
        <h5 class="card-title text-white">' + historyCardData[i].cardTitle + '</h5> \
      </div> \
      <p class="card-text">' + historyCardData[i].cardText + '</p> \
      <footer class="blockquote-footer"> \
      <small> \
        <cite title="Source Title">' + historyCardData[i].sourceInfo + '</cite> \
      </small> \
    </footer> \
    </div>'
    }
    
    
    //blockQuote
    function blockQouteCardFormat() {
        document.getElementById("historypointdiv").innerHTML +=
    '<div class="card p-3 text-white bg-dark border-secondary text-center"> \
      <blockquote class="blockquote mb-0 card-body"> \
        <p>' + historyCardData[i].cardText + '</p> \
      </blockquote> \
      <footer class="blockquote-footer"> \
        <small> \
          from <cite title="Source Title">' + historyCardData[i].sourceInfo + '</cite> \
        </small> \
      </footer> \
    </div>'
    }



