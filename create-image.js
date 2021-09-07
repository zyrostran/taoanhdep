const { Image, createCanvas, registerFont } = require("canvas");
const path = require("path");

/** Register fonts */
registerFont(path.join(process.cwd(), "assets", "mtd.ttf"), {
  family: "MTD William Letter",
});

registerFont(path.join(process.cwd(), "assets", "steelfish.ttf"), {
  family: "Steelfish",
});
/** Register fonts */

module.exports = (imgUrl, title, signature, colorBg) => {
  console.log(imgUrl, title, signature, colorBg);
  return new Promise((resolve, reject) => {
    var a = new Image();
    a.src =
      "https://1.bp.blogspot.com/-5SECGn_32Co/YQkQ-ZyDSPI/AAAAAAAAv1o/nZYKV0s_UPY41XlfWfNIX0HbVoRLhnlogCNcBGAsYHQ/s0/line.png";
    a.onload = () => {
      var b = new Image();
      b.src = imgUrl;
      b.onload = () => {
        var gradient2;
        var t1 = signature;
        var t2 = title.toUpperCase();
        var c = createCanvas(2000, 2000);
        var d = c.getContext("2d");

        d.clearRect(0, 0, c.width, c.height);
        d.save();

        d.fillStyle = "#fff";
        d.fillRect(0, 0, c.width, c.height);
        d.restore();
        d.save();

        d.fillStyle = colorBg;
        d.fillRect(0, 0, c.width, c.height);
        d.restore();
        d.save();

        d.fillStyle = "#fff";
        d.font = "300px 'MTD William Letter'";
        d.textAlign = "center";
        d.fillText(t1, c.width / 2, 350);
        d.restore();
        d.save();

        d.strokeStyle = "white";
        d.lineWidth = 7;
        d.font = "450px Steelfish";
        d.textAlign = "center";
        d.strokeText(t2, c.width / 2, 900);
        d.restore();
        d.save();

        d.fillStyle = "rgb(255 255 255 / 70%)";
        d.font = "450px Steelfish";
        d.textAlign = "center";
        d.fillText(t2, c.width / 2, 1350);
        d.restore();
        d.save();

        d.strokeStyle = "white";
        d.lineWidth = 7;
        d.font = "450px Steelfish";
        d.textAlign = "center";
        d.strokeText(t2, c.width / 2, 1800);
        d.restore();
        d.save();

        d.drawImage(a, 0, 0, c.width, c.height);
        d.restore();
        d.save();

        gradient2 = d.createLinearGradient(0, 0, 0, 2000);
        gradient2.addColorStop(0, "rgba(0,0,0,0.05)");
        gradient2.addColorStop(0.5, "rgba(0,0,0,0)");
        gradient2.addColorStop(1, "rgba(0,0,0,0.1)");
        d.fillStyle = gradient2;
        d.fillRect(0, 0, 2000, 2000);
        d.restore();
        d.save();

        d.drawImage(b, 0, 0, c.width, c.height);
        d.restore();

        resolve(c.toBuffer());
      };
    };
  });
};
