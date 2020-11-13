export const paginateOptions = (data) => {
	const { limit = 10, skip = 1 } = data;
	if (limit < 0 || skip <= 0) throw new AppError("limit and skip can't be negative number.");
	return { limit: parseInt(limit), skip: parseInt(skip - 1) };
};
