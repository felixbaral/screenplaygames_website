// Create animated starfield background
const starfield = document.getElementById("starfield");
const numStars = 500;

function createStar() {
  const star = document.createElement("div");
  star.className = "star";

  // Random position
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";

  // Random size (1-3px)
  const size = Math.random() * 2 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";

  // Random animation duration for twinkling
  star.style.animationDuration = Math.random() * 3 + 2 + "s";

  // Random animation delay
  star.style.animationDelay = Math.random() * 3 + "s";

  return star;
}

// Generate stars
for (let i = 0; i < numStars; i++) {
  starfield.appendChild(createStar());
}

// Omnisend tracking
window.omnisend = window.omnisend || [];
omnisend.push(["brandID", "68d2b47501a124e3c12c2c24"]);
omnisend.push(["track", "$pageViewed"]);
!(function () {
  var e = document.createElement("script");
  ((e.type = "text/javascript"),
    (e.async = !0),
    (e.src = "https://omnisnippet1.com/inshop/launcher-v2.js"));
  var t = document.getElementsByTagName("script")[0];
  t.parentNode.insertBefore(e, t);
})();
