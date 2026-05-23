export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });

    try {
        // আপনার চাবিগুলো (কপি করে বসানো)
        const API_KEY = 'ODk5NVU5ODIwMFBTTVFBTlJVT1c1';
        const SECRET_KEY = 'NxCTI4MJBrqf0vpzFkMpaZhbrUpVD2yTM2JUEVyW';
        const BRAND_KEY = '7ScZpy6qgmrfgG9JbQb8yOqSj2PhQPCKX8q2Lbfb8ZQYrMcHCN';

        const bodyData = req.body;

        const response = await fetch('https://pay.bdusp.com/api/payment/create', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'API-KEY': API_KEY,
                'SECRET-KEY': SECRET_KEY,
                'BRAND-KEY': BRAND_KEY
            },
            body: JSON.stringify({
                cus_name: bodyData.cus_name,
                cus_email: bodyData.cus_email,
                amount: bodyData.amount.toString(),
                success_url: bodyData.success_url,
                cancel_url: bodyData.cancel_url
            })
        });
        
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Server Error: ' + error.message });
    }
}
