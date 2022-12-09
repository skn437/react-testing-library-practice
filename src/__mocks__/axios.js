const mockResponse = {
	data: {
		results: [
			{
				name: {
					first: "So",
					last: "Wang",
				},
				picture: {
					large: "https://randomuser.me/api/portraits/men/39.jpg",
				},
				login: {
					username: "SKN",
				},
			},
		],
	},
};

export default {
	get: jest.fn().mockResolvedValue(mockResponse),
};
