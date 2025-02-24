import { toast } from "react-toastify";

const getStoreReadInfo = () =>{
    const storeRead = localStorage.getItem('read-list')
    if(storeRead){
        const readList = JSON.parse(storeRead);
        return readList
    }
    else{
        return [];

    }

}

const addToStoredInfo = (id) =>{
const readList = getStoreReadInfo();
if(readList.includes(id)){
    console.log(id,'already exist')
}
else{
 readList.push(id)
 const readLister = JSON.stringify(readList);
 localStorage.setItem('read-list',readLister)
 toast('this book is added')
}


}
const getStoredWishlist = () => {
    const storeWishlist = localStorage.getItem('wishlist');
    if (storeWishlist) {
        const wishlist = JSON.parse(storeWishlist);
        return wishlist;
    } else {
        return [];
    }
}


const addToWishlist = (id) => {
    const wishlist = getStoredWishlist();
    if (wishlist.includes(id)) {
        console.log(id, 'already exist in wishlist');
    } else {
        wishlist.push(id);
        const wishlistString = JSON.stringify(wishlist);
        localStorage.setItem('wishlist', wishlistString);
        console.log(id, 'added to wishlist');
    }
}







export{addToStoredInfo,addToWishlist,getStoreReadInfo}