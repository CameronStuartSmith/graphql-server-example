const getProjection = (fieldASTs) => {
	var n = fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
		projections[selection.name.value] = true;
		return projections;
	}, {});

	return n;
};

module.exports = getProjection;