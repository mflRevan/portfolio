import React from "react";

function article_1() {
	return {
		date: "29 May 2023",
		title: "ACE - The Future Of Gaming",
		description:
			"The future of gaming is upon us, and NVIDIA is leading the charge. At the recent Computex 2023 event, NVIDIA lifted the veil on their groundbreaking technology...",
		keywords: [
			"The Benefits of Cloud Computing",
			"Aiman",
			"Aiman C",
			"Aiman Chbib",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: left;
					line-height: normal
				}

				.randImage {
					align-self: center;
					outline: 3px solid black;
					object-fit: cover; /* New property */
					width: 800px; /* Set the width */
					height: 450px; /* Set the height */
					margin 12px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<h1>Speaking the Language of the Future: <br></br>NVIDIA's Generative AI</h1>
					The future of gaming is upon us, and NVIDIA is leading the charge. At the recent Computex 2023 event, NVIDIA lifted the veil on their groundbreaking technology, the Avatar Cloud Engine (ACE).
					This innovative tool promises to let gamers engage in natural conversation with NPCs, illustrating a tremendous shift in interactive gaming as we know it.
					<img
						src="https://images.nvidia.com/aem-dam/Solutions/geforce/news/nvidia-ace-for-games-generative-ai-npcs/nvidia-geforce-rtx-computex-2023-ace-for-games-kairos-demo-3840x2160-screenshot-002.jpg"
						alt="random"
						className="randImage"
					/>
					<h1>Inside the Demo: Talking to Jin in Kairos</h1>
					In the dystopian demo named Kairos, NVIDIA introduced us to a gloomy Ramen shop, home to the NPC Jin. 
					The playable character sparked a dialogue with Jin, asking, "Hey Jin, how are you?" To which Jin replied, "Unfortunately, not so good." 
					The conversation continued, revealing Jin's concerns about the rising crime rate affecting his humble Ramen shop.
					While the dialogue might seem a bit rigid, it's an impressive leap forward from the pre-determined responses we've become accustomed to in gaming. 
					Through a headset, players can have contextual conversations with NPCs, fostering a more immersive and natural gaming experience.
					<h3><br></br>More than Just Small Talk</h3>
					With ACE, NVIDIA has taken a giant stride towards humanizing NPC interaction. 
					Conversations will no longer be bound by a script, and players can experience the game in a more organic way, enhancing the overall realism of the gaming universe.
					<h1><br></br>Behind the Scenes: The Tech Underpinning the Demo</h1>
					The magic of ACE lies in its use of NVIDIA NeMo, a toolkit for building, customizing, and deploying expansive language models. 
					Gamers can personalize these models with character lore and backstories while using guardrails to steer clear of inappropriate content. 
					Add to that, NVIDIA's Riva, a speech recognition tool, and Omniverse Audio2Face, a software that syncs facial animation with speech, and you've got a recipe for an incredibly engaging gaming experience.
					<h3><br></br>Unreal Engine 5 and NVIDIA's GPU</h3>
					The Kairos demo was developed using Unreal Engine 5, amplifying NVIDIA's ray-tracing and GPU capabilities. 
					The visual result was as compelling as the AI dialogue, if not more. 
					These engaging visuals hint at the future gaming landscape's potential, where a perfect blend of realistic graphics and AI-powered dialogue could be the norm.
					<h3><br></br>The Future of Gaming</h3>
					NVIDIA hasn't announced any games incorporating ACE yet, but fans can look forward to Stalker 2: Heart of Chernobyl and Fort Solis, which will feature Omniverse Audio2Face technology.
					With the rapid advancement in AI technology, the gaming world is on the cusp of a revolution. Who knows, soon we might not only be playing games but also having meaningful conversations with our favorite characters. 
					The future is exciting, and NVIDIA's ACE is taking us there. Game on!
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "6 June 2023",
		title: "Meta Quest 3 - A Huge Leap Forward",
		description:
			"Building on its predecessor's success, the Quest 3 is set to deliver a VR experience like never before. With advancements in optics and mobile processing technology, we expect the new headset to stand out as a marvel of VR engineering.",
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: left;
				line-height: normal
			}

			.randImage {
				align-self: center;
				outline: 3px solid black;
				object-fit: cover; /* New property */
				width: 800px; /* Set the width */
				height: 450px; /* Set the height */
				margin 14px;
			}
			`,
		keywords: [
			"Quest 3",
			"Meta Quest",
			"Aiman Chbib"
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<h1>Meta Quest 3: A New Era in VR Gaming</h1>
					The release of the Meta Quest 2 (formerly Oculus Quest 2) catapulted VR gaming into the mainstream, eliminating the common notion of VR as cumbersome and cost-prohibitive. 
					The Quest 2 provided an easy-to-use standalone VR experience that gained massive popularity globally. 
					Now, with the Meta Quest 3 announced, anticipation is high, and it seems the future of VR gaming is about to get even more exciting.
					<img
						src="https://assetsio.reedpopcdn.com/Meta-Quest-3-announcement.png?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp"
						alt="random"
						className="randImage"
					/>
					<h1><br/>The Quest Legacy</h1>
					Since its inception, the Quest line of VR headsets has been known for shattering expectations and bringing VR to the masses. The Quest 2, launched over two years ago, redefined the gaming scene with its wireless functionality, immersive experience, and accessibility. As we stand on the precipice of the Quest 3 release, it's clear that Meta intends to continue this trend of breaking barriers and pushing the boundaries of VR gaming.
					<h3><br/>The Meta Quest 3: What To Expect</h3>
					Building on its predecessor's success, the Quest 3 is set to deliver a VR experience like never before. With advancements in optics and mobile processing technology, we expect the new headset to stand out as a marvel of VR engineering.
					<h1><br/>Revamped Design</h1>
					Leaks and early information point towards a design that mirrors the familiar aesthetic of the Quest 2 but introduces some significant modifications. The front-on silhouette remains similar, but the front section of the headset is significantly slimmed down, reducing its bulk by about 40%. This change promises a lighter and more comfortable VR experience.
					<img
						src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/06/Meta-Quest-3-4.png"
						alt="random"
						className="randImage"
					/>
					<br/>
					The headset also features a set of redesigned front cameras, housed in pill-shaped areas, making them far more prominent. These new cameras open up exciting possibilities for more sophisticated mixed-reality experiences, pushing the Quest line further into this emerging field.
					<br/>
					<br/>
					While the soft strap and front-mounted battery make a return, there are other noticeable changes. The USB-C port and headphone socket have moved, and fabric has replaced the plastic sides seen on the Quest 2. The headset also introduces a full IPD (interpupillary distance) adjustment feature and compatibility with the Quest Pro's charging dock.
					<h1><br/>Supercharged Specs</h1>
					The Quest 3 is slated to use a next-generation Qualcomm XR chipset - the second generation of the XR2 chip, boasting twice the graphical power of its predecessor. This boost promises a smoother, more detailed, and more immersive VR gaming experience. The headset also appears to come with 128GB of onboard storage by default, with rumors of higher-storage versions being available as well.
					<br/>
					<br/>
					The inclusion of pancake lenses and dual displays, coupled with the likelihood of a resolution of 4,128 by 2,208 pixels (2,064 by 2,208 pixels per eye) and possibly a 120Hz refresh rate, indicate that the Quest 3 is geared towards providing an unparalleled visual experience.
					<h3><br/>The Future of VR Gaming</h3>
					The Quest 3's new features and technological advancements are poised to have a profound impact on VR gaming. The improved graphics, resolution, and potential mixed reality capabilities suggest that the Quest 3 will deliver games that are more immersive and engaging than ever before. This new era of VR gaming promises to bring new possibilities for game developers and deliver games that are as visually stunning as they are thrilling to play.
					<h3><br/>Release Date and Pricing</h3>
					Meta has confirmed that the Quest 3 will be officially launched at the annual Meta Connect event in October 2023, with a price tag of $499.99. The pricing represents a rise from the Quest 2's initial price, reflecting inflation and increased production costs. The price of the Quest 2 is expected to return to $299 upon the Quest 3's arrival.
					<iframe className="randImage"
						src="https://youtube.com/embed/5AKl_cEB26c?autoplay=1&mute=1">
					</iframe>
					<h1><br/>Conclusion</h1>
					The Meta Quest 3 represents the future of VR gaming. With its new features and enhanced specifications, the headset is set to push the boundaries of VR experiences, cementing Meta's role as a leader in the field. As we eagerly await the headset's launch in October, one thing is clear: the future of VR gaming takes a huge leap forward, and the Quest 3 plays a significant role in it.
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
