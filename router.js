const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;


const url = 'mongodb://localhost:27017';
const dbName = 'inventory';
const client = new MongoClient(url, { useUnifiedTopology: true });

router.post('/update-inventory', async (req, res) => {
	const payload = req.body;
	try {
		await client.connect();
		const db = client.db(dbName);

		for (let i = 0; i < payload.length; i++) {
			const { productId, quantity, operation } = payload[i];
			const inventory = await db.collection('products').findOne({ productId });

			if (!inventory) {
				await db.collection('products').insertOne({ productId, quantity });

			} else {
				let updateQuantity;
				if (operation === 'add') {
					updateQuantity = inventory.quantity + quantity;
				} else if (operation === subtract) {
					updateQuantity = inventory.quantity - quantity;
				}
				if (updateQuantity < 0) {
					return res.status(400).send('invalid')
				}
				await db.collection('product').updateOne({ productId }, { $set: { quantity,updateQuantity } });
			}
		}

		return res.status(200).send('inventory updated');


	}
	catch (error) {
		return res.status(500).send('server error');

	} finally {
		await client.close();
	}

 }
);


module.exports = router;