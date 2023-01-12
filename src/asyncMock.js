const products = [
    { id: '1', name: "Mantenimiento", category: "mantenimiento",  price: 2500, img: "https://images.pexels.com/photos/4792727/pexels-photo-4792727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", stock: 15 },
    { id: '2', name: "Armado de pc", category: "armado", price: 3000, img: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", stock: 15 },
    { id: '3', name: "Cambio de componentes", category: "componentes", price: 1500, img: "https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", stock: 15 },
    { id: '4', name: "Formateo e instalación de SO", category: "sistema", price: 2000, img: "https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", stock: 15 }
]


export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 750)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 750)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 750)
    })
}