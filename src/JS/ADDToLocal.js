
export const getStoreReadInfo = () => {
    const storedInfo = localStorage.getItem('readList');
    return storedInfo ? JSON.parse(storedInfo) : [];
};

export const getStoredWishlist = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
};


export const addToStoredInfo = (id) => {
    const existing = getStoreReadInfo();
    if (!existing.includes(id)) {
        existing.push(id);
        localStorage.setItem('readList', JSON.stringify(existing));
    }
};
export const addToWishlist = (id) => {
    const existing = getStoredWishlist();
    if (!existing.includes(id)) {
        existing.push(id);
        localStorage.setItem('wishlist', JSON.stringify(existing));
    }
};
