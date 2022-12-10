import items from "../data/items";

export function getAllItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(items), 500);
    })
};

export function getItemsByCategory(category) {
    return new Promise((resolve, reject) => {
        const filteredItems = items.filter((item) => item.category === category)
        setTimeout(() => resolve(filteredItems), 500);
    })
};

export function getItem(itemId) {
    return new Promise((resolve, reject) => {
        const targetItem = items.find((item) => item.id === itemId)
        setTimeout(() => resolve(targetItem), 500);
    })
};
