export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });

    try {
        const payload = req.body;
        // BDUSP এর নিয়ম অনুযায়ী api_key টা বডির ভেতরেই পাঠানো বেশি নিরাপদ
        payload.api_key = '7ScZpy6qgmrfgG9JbQb8yOqSj2PhQPCKX8q2Lbfb8ZQYrMcHCN';

        const response = await fetch('https://pay.bdusp.com/api/payment/create', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(payload) 
        });
        
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
