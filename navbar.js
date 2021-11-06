let navheader = '<nav class="navbar navbar-expand-lg navbar-light bg-light"> \
<a class="navbar-brand" href="./index.html"> \
  <img src="./assets/images/ANMPlogo.jpg" width="30" height="30" class="d-inline-block align-top" alt="ANMP Logo" \
    loading="lazy"> \
  Advocates for North Mill Pond \
</a> \
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" \
  aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> \
  <span class="navbar-toggler-icon"></span> \
</button> \
<div class="collapse navbar-collapse" id="navbarNavDropdown"> \
  <ul class="navbar-nav mr-auto mt-2 mt-lg-0"> \
    <li class="nav-item"> \
      <a class="nav-link" href="./index.html">Home</a> \
    </li> \
    <li class="nav-item events"> \
      <a class="nav-link" href="./events.html">Events</a> \
    </li> \
    <li class="nav-item events"> \
      <a class="nav-link" href="./info.html">NMP Info</a> \
    </li> \
    <li class="nav-item events"> \
      <a class="nav-link" href="./park.html">McEachern Park</a> \
    </li> \
    <li class="nav-item history"> \
      <a class="nav-link" href="./history.html">History</a> \
    </li> \
    <li class="nav-item advocacy"> \
      <a class="nav-link" href="./advocacy.html">Advocacy</a> \
    </li> \
    <li class="nav-item"> \
      <a class="nav-link" href="./news.html">News/Press</a> \
    </li> \
    <li class="nav-item"> \
      <a class="nav-link" href="./contact.html">Contact</a> \
    </li> \
    <li class="nav-item"> \
      <a class="nav-link" href="./support.html">Support Us!</a> \
    </li> \
  </ul> \
</div> \
</nav>'

document.getElementById("navbardiv").innerHTML +=
navheader;
