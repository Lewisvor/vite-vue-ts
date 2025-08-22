export const regExp = (pattern: string | RegExp, flags?: string | undefined) => {
	return new RegExp(pattern, flags);
};
