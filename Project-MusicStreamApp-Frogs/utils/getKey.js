const getKey = () => {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2, 15);
    return `${timestamp}-${random}`;
};

export default getKey;
