export default function handler(req, res) {
    if (req.method === 'POST') {
      const formData = req.body; 
  
      console.log('Form data received:', formData);
  
      res.status(200).json({ message: 'Form data received successfully!' });
    } 
    else {
      res.status(404).json({ message: 'Method Not Allowed' });
    }
}