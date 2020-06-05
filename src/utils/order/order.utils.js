export const calculateTotal = (items, quantity, price='noPrice',tax='noTax') => {
    return items.reduce((totalQuantity, item) => {
    item['noPrice'] = 1;
    item['noTax'] = 100;
    
    return totalQuantity+item[quantity]*item[price]*(item[tax]/100)
    },0)
}