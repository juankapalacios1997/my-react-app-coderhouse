const reducer = (store, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD-TO-CAR" : {
            let orders = store.orders;

            if (orders.length === 0) {
                const order = {
                items: [],
                total: 0,
                };

                orders.push(order);
            }
            
            orders[orders.length - 1].items.push(payload);
            orders[orders.length - 1].total += payload.price;
        
            return { orders };
        }
        default : {
            return null;
        }
    }
}

export default reducer;