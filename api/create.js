export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });

    try {
        const response = await fetch('https://pay.bdusp.com/api/payment/create', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'API-KEY': 'ODk5NVU5ODIwMFBTTVFBTlJVT1c1',
                'SECRET-KEY': 'NxCTI4MJBrqf0vpzFkMpaZhbrUpVD2yTM2JUEVyW',
                'BRAND-KEY': '7ScZpy6qgmrfgG9JbQb8yOqSj2PhQPCKX8q2Lbfb8ZQYrMcHCN'
            },
            body: JSON.stringify(req.body) 
        });
        
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
