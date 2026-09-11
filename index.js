import express from 'express'
import QRCode from 'qrcode'

const app = express();

app.use(express.json()); 

app.post('/', async (req, res) => {
  try {
    const { url } = req.body; 
    const data = await QRCode.toDataURL(url, {scale: 6});
    return res.send(`<html>
    <img src="${data}">
</html>`)
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
})

app.listen(3000, () => {

  console.log('Server is running on http://localhost:3000')
})