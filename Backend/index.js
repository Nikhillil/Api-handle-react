import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
     
    const products = [
        {
            id: 1,
            name: 'table wooden',
            price: 2000,
            image: "https://cdn.pixabay.com/photo/2016/11/21/12/59/couch-1845270_640.jpg"
        },
        {
            id: 2,
            name: 'dining table',
            price: 5000,
            image: "https://cdn.pixabay.com/photo/2016/11/19/17/25/furniture-1840463_1280.jpg"
        },
        {
            id: 3,
            name: 'conferance table',
            price: 10000,
            image: "https://cdn.pixabay.com/photo/2017/03/28/12/15/chairs-2181977_640.jpg"
        },
        {
            id: 4,
            name: 'laptop stand',
            price: 5000,
            image: "https://cdn.pixabay.com/photo/2016/11/21/15/46/computer-1846056_640.jpg"
        },
        {
            id: 5,
            name: 'Luxiary sofas',
            price: 15000,
            image: "https://cdn.pixabay.com/photo/2018/05/02/09/02/baby-boy-3368016_640.jpghttps://cdn.pixabay.com/photo/2016/11/19/17/25/furniture-1840463_1280.jpg"
        },
    ]

    if(req.query.search){
        const filterProducts = products.filter(product => product.name.includes(req.query.search));
        res.send(filterProducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
});