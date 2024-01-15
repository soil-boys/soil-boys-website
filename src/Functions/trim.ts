const trim = (str: string, max: number): string => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

export default trim