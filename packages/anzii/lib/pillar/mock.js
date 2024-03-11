const dummyInfo = {
	name: "anzii",
	status: "package",
	type: "backend",
	authour: "iiprodakts",
};

const dummyList = ["Malamulee", "Cape Town", "Pretoria", "Free State"];

const mockData = {
	p_o_freeze: {
		positive: {
			toFreeze: dummyInfo,
		},
		negative: {
			toFreezeNull: null,
		},
	},
	p_clone: {
		positive: {
			toClone: dummyInfo,
		},
	},
	p_deepMerge: {
		positive: {
			fromMerge: dummyInfo,
			toMerge: { merging: "merge prop" },
		},
	},
	p_forEach: {
		positive: {
			main: dummyInfo,
			list: dummyList,
			arrayHandler: function (item, index) {
				console.log("THE item is", item);
				console.log("THE index is:", index);
			},
			objectHandler: function (value, property, o, index) {
				console.log("THE OBJECT", o);
				console.log("THE VALUE IS IS:", value, property, index);
			},
		},
	},
	p_objArrayToHash: {
		positive: {
			main: dummyInfo,
			mainHashProp: "anziio",
			list: dummyList,
			listHashProp: "anzii",
		},
	},
};

export default mockData;
