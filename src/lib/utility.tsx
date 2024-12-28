export const generateUniqueId = (): string => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

const Utility = {
    generateUniqueId
};

export default Utility;