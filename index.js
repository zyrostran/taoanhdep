const { Response } = require("./response");
const animeList = require("./anime-list.js");
const createWibuImage = require("./create-image.js");

const morgan = require("morgan");
const express = require("express");

const app = express();

console.log(`Loaded ${animeList.length} anime characters`);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("common"));

app.set("json spaces", 2);

app.get("/", (req, res) => {
	return res.status(200).send(new Response(200, "Successful"));
});

app.get("/v1/wibu/create", async (req, res) => {
	let imageId = req.query.id_nhanvat || null;
	let title = req.query.chu_nen || null;
	let signature = req.query.chu_ky || null;
	let color = req.query.mau_nen || null;

	if (imageId && title && signature) {
		if (!animeList[imageId]) return res.status(400).send(new Response(400, "Invalid character ID"));

		var imgUrl = animeList[imageId].imgAnime.replace(/s120/g, "s0");
		var imgColor = animeList[imageId].colorBg;

		if (!color) color = imgColor || "black";

		let imageBuffer;

		try {
			imageBuffer = await createWibuImage(imgUrl, title, signature, color);
		} catch (err) {
			res.status(500).send(new Response(500, "Internal server error"));
			console.error(`Error when creating image`, err);
		}

		console.log(`Done!`);

		res.set("Content-Type", "image/png");
		res.status(200).send(imageBuffer);
	} else {
		res.status(400).send(new Response(400, "Missing parameters"));
	}
});

app.get("/v1/wibu/list", (req, res) => {
	let mappedAnimeList = animeList.map((el, i) => {
		return {
			characterId: i,
			characterName: el.imgAnime
				.substring(el.imgAnime.lastIndexOf("/") + 1, el.imgAnime.length)
				.replace(/-/g, " ")
				.replace(/.png/g, ""),
			backgroundColor: el.bgColor,
			imageUrl: el.imgAnime
		}
	});

	res.status(200).send(new Response(200, "Successful", mappedAnimeList));
});

const server = app.listen(process.env.PORT || 3000, () => {
	console.log(`Server started and listening on port ${server.address().port}`);
});
