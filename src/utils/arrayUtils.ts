export const findObjectInArray = <T>(
	arr: T[],
	value: unknown,
	key: keyof T = 'id' as keyof T,
): T | undefined => {
	return arr?.find((item) => item[key] === value);
};

export const isEmptyArray = <T>(arr?: T[]) => {
	if (!arr || !arr.length) return true;
	return false;
};

export const filterArray = <T>(
	arr: T[],
	callback: (val: T) => boolean,
	maxLength?: number | null,
) => {
	const ret = arr?.filter((item) => callback(item));
	if (maxLength) return ret?.slice(0, maxLength);
	else return ret;
};

export const divideInChunks = <T>(arr: T[], chunkSize: number = 100) => {
	const size = arr?.length;
	const ret: T[][] = [];
	for (let i = 0; i < size; i += chunkSize) {
		ret.push(arr.slice(i, i + chunkSize));
	}

	return ret;
};

export const filterArrayOnProperty = <T>(
	arr: T[],
	value: unknown,
	key: keyof T = 'id' as keyof T,
): T[] => {
	return arr?.filter((item: T) => item[key] !== value);
};