export const POSTS = [
	{
		_id: "1",
		text: "Let's build a fullstack WhatsApp clone with NEXT.JS 14 😍",
		img: "/posts/post1.png",
		user: {
			username: "arun",
			profileImg: "/avatars/boy1.jpg",
			fullName: "arunkumar",
		},
		comments: [
			{
				_id: "1",
				text: "Nice Tutorial",
				user: {
					username: "animesh",
					profileImg: "/avatars/girl1.png",
					fullName: "animeshpandey",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
	{
		_id: "2",
		text: "How you guys doing? 😊",
		user: {
			username: "shiv",
			profileImg: "/avatars/boy2.png",
			fullName: "shivsingh",
		},
		comments: [
			{
				_id: "1",
				text: "Nice Tutorial",
				user: {
					username: "shivsing",
					profileImg: "/avatars/girl2.png",
					fullName: "shivshanka",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
	{
		_id: "3",
		text: "Astronaut in a room of drawers, generated by Midjourney. 🚀",
		img: "/posts/post2.png",
		user: {
			username: "mayank",
			profileImg: "/avatars/boy3.png",
			fullName: "mayanksrivastava",
		},
		comments: [],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894", "6658s895", "6658s896"],
	},
	{
		_id: "4",
		text: "I'm learning GO this week. Any tips? 🤔",
		img: "/posts/post3.png",
		user: {
			username: "mayank",
			profileImg: "/avatars/boy3.png",
			fullName: "mayanksrivastava",
		},
		comments: [
			{
				_id: "1",
				text: "Nice Tutorial",
				user: {
					username: "mayank",
					profileImg: "/avatars/girl3.png",
					fullName: "mayanksrivastava",
				},
			},
		],
		likes: [
			"6658s891",
			"6658s892",
			"6658s893",
			"6658s894",
			"6658s895",
			"6658s896",
			"6658s897",
			"6658s898",
			"6658s899",
		],
	},
];

export const USERS_FOR_RIGHT_PANEL = [
	{
		_id: "1",
		fullName: "mayanksrivastava",
		username: "mayank",
		profileImg: "/avatars/boy2.png",
	},
	{
		_id: "2",
		fullName: "animesh",
		username: "animeshpandey",
		profileImg: "/avatars/girl1.png",
	},
	{
		_id: "3",
		fullName: "anshsingh",
		username: "ansh",
		profileImg: "/avatars/boy3.png",
	},
	{
		_id: "4",
		fullName: "navneet",
		username: "navneet",
		profileImg: "/avatars/girl2.png",
	},
];